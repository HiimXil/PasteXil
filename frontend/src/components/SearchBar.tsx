import React from "react";
import SelectAllLanguages from "./SelectAllLanguages";
const submit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const query = e.currentTarget["query"].value;
  const language = e.currentTarget["language"].value;
  window.location.replace("/search/" + language + "|" + query);
};
type PropsType = {
  query?: string;
};
const SearchBar = (props: PropsType) => {
  return (
    <form
      onSubmit={submit}
      className="h-24 p-6 bg-white border-gray-200 border rounded-lg shadow flex items-center justify-center"
    >
      <input
        type="text"
        id="query"
        className="bg-gray-50 border mr-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-appPurple focus:border-appPurple block w-2/6 p-2.5"
        defaultValue={props.query}
      />
      <SelectAllLanguages
        id="language"
        class="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-appPurple focus:border-appPurple block mr-4 p-2.5"
        selected="all"
      />
      <button
        type="submit"
        className="text-white bg-gradient-to-r mr-4 mt-auto mb-auto from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Search
      </button>
      <a
        href="/add-snippet"
        className="text-white bg-gradient-to-r mt-auto mb-auto from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Add Snippet
      </a>
    </form>
  );
};

export default SearchBar;
