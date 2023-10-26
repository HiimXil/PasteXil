import { allLanguages } from "../js/language";
type PropsType = {
  id: string;
  class: string;
  selected?: string;
};
const addAllOption = (selected?: string) => {
  if (selected == "all") {
    return <option value="all">All</option>;
  }
};
const SelectAllLanguages = (props: PropsType) => {
  let i = 0;
  return (
    <select id={props.id} className={props.class} defaultValue={props.selected}>
      {addAllOption(props.selected)}
      {allLanguages.map((language) => (
        <option key={(i = i + 1)} value={language.id}>
          {language.id}
        </option>
      ))}
    </select>
  );
};

export default SelectAllLanguages;
