import React from "react";
import s from "./ThisDayInfo.module.scss";
import cloud from "../../../../assets/images/cloud.png";
import ThisDayItem from "./ThisDayItem";
import { Weather } from "../../../../store/types/types";

export type Item = {
  icon_id: string;
  name: string;
  value: string;
};
type Props = {
  weather: Weather;
};

const ThisDayInfo = ({ weather }: Props) => {
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: `${Math.floor(weather.main.temp)}° - ощущается как ${Math.floor(weather.main.feels_like)}°`,
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: `${weather.main.pressure} мм ртутного столба`,
    },
    {
      icon_id: "precipitation",
      name: "Влажность",
      value: `${weather.main.humidity}%`,
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: `${Math.floor(weather.wind.speed)} м/с`,
    },
  ];

  return (
    <div className={s.this__day_info}>
      <div className={s.this__day_info_items}>
        {items.map((item: Item) => (
          <ThisDayItem item={item} />
        ))}
      </div>
      <img className={s.cloud__img} src={cloud} alt="облако" />
    </div>
  );
};

export default ThisDayInfo;
