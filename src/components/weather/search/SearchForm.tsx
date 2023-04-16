import styles from "./SearchForm.module.scss";
import { FaSearch } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { changeLocation } from "../../../features/weather/weatherSlice";
import { selectLocationField } from "./searchFormSlice";
import { changeLocationField } from "./searchFormSlice";
import useResetForm from "../../../hooks/useResetForm";
import LocationSuggestion from "../location-suggestion/LocationSuggestion";

function SearchForm() {
  const locationField = useAppSelector(selectLocationField);
  const dispatch = useAppDispatch();
  useResetForm();
  return (
    <form
      name="search"
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(changeLocation(locationField));
      }}
    >
      <div className={styles.searchContainer}>
        <div className={styles.inputContainer}>
          <input
            id="location"
            type="text"
            name="location"
            value={locationField}
            placeholder="Search Location"
            className={styles.input}
            onChange={(event) => {
              const value = event.target.value;
              dispatch(changeLocationField(value));
            }}
          />
          <LocationSuggestion />
          <button
            aria-label="search"
            className={styles.searchButton}
            type="submit"
          >
            <FaSearch size={"1.5em"} color="grey" />
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
