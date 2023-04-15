export type BaseURL = string;

export type APIMethod = "/forecast.json" | "/forecast.xml";

export type APIKey = string;

export interface WeatherAPI {
  method: APIMethod;
}

export interface GeoLocation {
  latitude: number;
  longitude: number;
}

export type CityName = string;

export type USZip = number;

export type UKPostcode = string;
export type CanadaPostalCode = string;

export interface Metar {
  metar: `metar:${string}`;
}

export interface IATA {
  metar: `iata:${string}`;
}

export interface AutoIP {
  auto: `auto:ip`;
}

export type IP = string;

export type RequestQuery =
  | GeoLocation
  | CityName
  | USZip
  | UKPostcode
  | CanadaPostalCode
  | Metar
  | IATA
  | AutoIP
  | IP;

export interface RequestParams {
  key: APIKey;
  q: RequestQuery;
  days?: number;
}

export interface ResponseData {
  location?: Object;
  current: {
    temp_c: number;
  };
  forecast?: Object;
}

export interface ItemTypes {
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
