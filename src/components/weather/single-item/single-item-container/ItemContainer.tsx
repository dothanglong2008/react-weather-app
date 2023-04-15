import Item from "../item/Item";
import styles from "./ItemContainer.module.scss";

interface ItemContainerTypes {
  last_updated?: string;
  last_updated_epoch?: number;
  temp_c?: number;
  temp_f?: number;
  feelslike_c?: number;
  feelslike_f?: number;
  condition?: {
    text?: string;
    icon?: string;
    code?: number;
  };
  wind_mph?: number;
  wind_kph?: number;
  wind_degree?: number;
  wind_dir?: string;
  pressure_mb?: number;
  pressure_in?: number;
  precip_mm?: number;
  precip_in?: number;
  humidity?: number;
  cloud?: number;
  is_day?: number;
  uv?: number;
  gust_mph?: number;
  gust_kph?: number;
}

interface ItemContainerProps {
  last_updated?: string;
  last_updated_epoch?: number;
  temp_c?: number;
  temp_f?: number;
  feelslike_c?: number;
  feelslike_f?: number;
  condition?: {
    text?: string;
    icon?: string;
    code?: number;
  };
  wind_mph?: number;
  wind_kph?: number;
  wind_degree?: number;
  wind_dir?: string;
  pressure_mb?: number;
  pressure_in?: number;
  precip_mm?: number;
  precip_in?: number;
  humidity?: number;
  cloud?: number;
  is_day?: number;
  uv?: number;
  gust_mph?: number;
  gust_kph?: number;
}

function ItemContainer({
  last_updated,
  condition,
  temp_c,
  temp_f,
  feelslike_c,
  uv,
  precip_mm,
}: ItemContainerProps) {
  return <Item />;
}

export default ItemContainer;
