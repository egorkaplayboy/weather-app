import React from "react";
import s from "./ThisDay.module.scss";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import { Weather } from "../../../../store/types/types";

type Props = {
  weather: Weather;
};

const ThisDay = ({ weather }: Props) => {
  var now = new Date().toLocaleTimeString().slice(0, -3);

  const getWeatherImageId = (weatherType: string) => {
    switch (weatherType) {
      case "Sun":
        return "Sun" ;
      case "Rain":
        return "Rain";
      default:
        return null;
    }
  };

  const weatherType = weather.weather[0].main
  const weatherImageId = getWeatherImageId(weatherType);

  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>{Math.floor(weather.main.temp)}°</div>
          <div className={s.this__day_name}>Сегодня</div>
        </div>
        <GlobalSvgSelector id={weatherImageId} />
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Время: <span>{now}</span>
        </div>
        <div className={s.this__city}>
          Город: <span>{weather.name}</span>
        </div>
      </div>
    </div>
  );
};

export default ThisDay;
