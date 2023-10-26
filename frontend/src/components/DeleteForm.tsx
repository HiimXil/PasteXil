import type { Props } from "astro";

type PropsType = {
  id: string;
};
const DeleteForm = (props: PropsType) => {
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (confirm("Are you sure you want to delete this snippet?")) {
      e.preventDefault();
      const id = props.id;
      try {
        await fetch(import.meta.env.PUBLIC_URL + "code-snippets/" + id, {
          method: "DELETE",
          body: JSON.stringify({ id }),
          headers: { "Content-Type": "application/json" },
        });
        window.location.replace("/");
      } catch {}
    }
  };

  return (
    <form onSubmit={submit}>
      <button className="text-gray-500 float-right mr-4">delete</button>
    </form>
  );
};

export default DeleteForm;
