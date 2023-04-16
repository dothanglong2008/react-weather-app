import styles from "./LocationSuggestion.module.scss";
import { useAppDispatch } from "../../../app/hooks";
import { BiCurrentLocation } from "react-icons/bi";
import { changeLocation } from "../../../features/weather/weatherSlice";

function LocationSuggestion() {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(
          changeLocation(
            `${position.coords.latitude},${position.coords.longitude}`
          )
        );
      });
    } else {
      dispatch(changeLocation(`auto:ip`));
    }
  };
  return (
    <button
      type="button"
      title="Select current location"
      className={styles.suggestion}
      onClick={handleClick}
    >
      <BiCurrentLocation size={"2em"} color="grey" />
    </button>
  );
}

export default LocationSuggestion;
