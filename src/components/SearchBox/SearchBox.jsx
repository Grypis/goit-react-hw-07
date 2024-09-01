import css from "./SearchBox.module.css";

import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/filter/filter.selectors";
import { changefilter } from "../../redux/filter/filtersSlice";

function SearchBox() {
  const dispatch = useDispatch();

  const value = useSelector(selectFilter);

  const handleChange = (evt) => {
    dispatch(changefilter(evt.target.value));
  };
  return (
    <div className={css.searchBoxContainer}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className={css.searchBox}
        placeholder="Search contacts by Name"
      />
    </div>
  );
}
export default SearchBox;
