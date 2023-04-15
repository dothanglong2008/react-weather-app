export interface CurrentItemBlock {
  title: string;
  time: {
    hour: number;
    minutes: number;
    unit: "AM" | "PM";
  };
  conditionText: string;
  temperatureCelsius: {
    unit: string;
    value: number;
  };
  realFeel: number;
  wind: number;
}
