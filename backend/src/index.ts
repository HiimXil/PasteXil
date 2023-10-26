import { PrismaClient } from '@prisma/client';
import { serve } from '@hono/node-server'
import { Hono } from 'hono';
import { cors } from 'hono/cors';

const prisma = new PrismaClient();


const app = new Hono();
app.use('*', cors())
app.get('/', (c) => c.text('Hello Hono!'));

app.post('/code-snippets', async (c) => {
    const body = await c.req.json()
    const title = body['title']
    const code = body['code']
    const language = body['language'].toLowerCase()
    const description = body['description']
    await prisma.codeSnippet.create({
        data: {
            title: title,
            code: code,
            language: language,
            description: description,
        }
    })
    return c.json({title: title, code : code, language : language, description : description})
});

app.patch('/code-snippets/:id', async (c) => {
    const id = c.req.param('id')
    const body = await c.req.json()
    const title = body['title']
    const code = body['code']
    const language = body['language'].toLowerCase()
    const description = body['description']

    await prisma.codeSnippet.update({
        where: {
            id: parseInt(id)
        },
        data: {
            title: title,
            code: code,
            language: language,
            description: description,
        }
    })
    return c.json({id: id, title: title, code : code, language : language, description : description})
});

app.delete('/code-snippets/:id', async (c) => {
    const id = c.req.param('id')
    await prisma.codeSnippet.delete({
        where: {
            id: parseInt(id)
        }
    })
    return c.json({id: id})
});

app.get('/code-snippets', async (c) => {
    return c.json(await prisma.codeSnippet.findMany())
});

app.get('/code-snippets/:id', async (c) => {
    const id = parseInt(c.req.param('id'))
    if(typeof id !== 'number') {
        return c.json({error: "Need ID as a number"})
    }
    const row = await prisma.codeSnippet.findUnique({
            where: {
                id: id
            }
        }
    )
    if(!row) {
        return c.json({error: "Code snippet not found"})
    }
    return c.json(row)
});

app.get('/search/:lang', async (c) => {
    const lang = c.req.param('lang')
    const row = await prisma.codeSnippet.findMany({
            where: {
                language: lang,
            }
        }
    )
    if(!row) {
        return c.json({error: "Code snippet not found"})
    }
    return c.json(row)
});

app.get('/search/:lang/:query', async (c) => {
    const lang = c.req.param('lang')
    const query = c.req.param('query')
    let row
    if(lang === 'all') {
        row = await prisma.codeSnippet.findMany({
            where: {
                OR: [
                    { title: { contains: query }, },
                    { description: { contains: query }, },
                  ],
            }
        })
    }else{
    row = await prisma.codeSnippet.findMany({
            where: {
                language: lang.toLowerCase(),
                OR: [
                    { title: { contains: query }, },
                    { description: { contains: query }, },
                  ],
                
            }
        }
    )
    }
    if(!row) {
        return c.json({error: "Code snippet not found"})
    }
    return c.json(row)
});

serve({
    fetch: app.fetch,
    port: 3000,
  })

export default app
