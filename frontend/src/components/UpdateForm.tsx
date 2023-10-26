import { useState } from "react";
import SelectAllLanguages from "./SelectAllLanguages";
type PropsType = {
  id: string;
  title: string;
  code: string;
  language: string;
  description: string;
};
const AddForm = (props: PropsType) => {
  const [error, setError] = useState(false);

  const deleteSnippet = async (e: React.FormEvent<HTMLFormElement>) => {};

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = props.id;
    const title = e.currentTarget["title"].value;
    const code = e.currentTarget["code"].value;
    const language = e.currentTarget["language"].value.toLowerCase();
    const description = e.currentTarget["description"].value;
    try {
      await fetch(import.meta.env.PUBLIC_URL + "code-snippets/" + id, {
        method: "PATCH",
        body: JSON.stringify({ id, title, code, language, description }),
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      setError(true);
    }
    if (!error) {
      window.location.replace("/code-snippet/" + id);
    }
  };

  return (
    <form onSubmit={submit}>
      <label
        htmlFor="title"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Title
      </label>
      <input
        type="text"
        id="title"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-appPurple focus:border-appPurple block w-full p-2.5"
        defaultValue={props.title}
      />
      <label
        htmlFor="language"
        className="block mb-2 mt-2 text-sm font-medium text-gray-900"
      >
        Language
      </label>
      <SelectAllLanguages
        id="language"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-appPurple focus:border-appPurple block w-full p-2.5"
        selected={props.language}
      />

      <label
        htmlFor="code"
        className="block mb-2 mt-2 text-sm font-medium text-gray-900"
      >
        Code
      </label>
      <textarea
        id="code"
        rows={24}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-appPurple focus:border-appPurple"
        placeholder="Place your code here"
        defaultValue={props.code}
      ></textarea>

      <label
        htmlFor="description"
        className="block mb-2 mt-2 text-sm font-medium text-gray-900"
      >
        Description
      </label>
      <textarea
        id="description"
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-appPurple focus:border-appPurple"
        placeholder="Enter a description"
        defaultValue={props.description}
      ></textarea>

      <button
        type="submit"
        className="text-white mt-8 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Modify Snippet
      </button>
    </form>
  );
};
export default AddForm;
