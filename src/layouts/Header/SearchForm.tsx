import { ReactComponent as Search } from "../../assets/Search.svg";
import classes from "./SearchForm.module.css";

const selectOptions = [
  { name: "Board games", value: "boardgames" },
  { name: "Publishers", value: "publishers" },
  { name: "Authors", value: "authors" },
  { name: "Designers", value: "designers" },
];

const SearchForm = () => {
  return (
    <form className={classes.searchForm}>
      <div className={`${classes.searchFormDiv} flex-row-center`}>
        <input
          type="text"
          placeholder="Search"
          className={classes.searchFormInput}
        />
        <div className="flex-row-center">
          <select className={classes.searchFormSelect}>
            {selectOptions.map((selectOption) => {
              return (
                <option key={selectOption.value} value={selectOption.value}>{selectOption.name}</option>
              );
            })}
          </select>
          <button type="submit" className={classes.searchFormButton}>
            <Search />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
