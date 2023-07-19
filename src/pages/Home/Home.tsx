import React from "react";
import s from "./Home.module.scss";
import ThisDay from "./components/ThisDay/ThisDay";
import ThisDayInfo from "./components/ThisDayInfo/ThisDayInfo";
import Days from "./components/Days/Days";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather";
import { useSelector } from "react-redux";
import { selectCurrentWeatherData } from "../../store/selectors";

type Props = {};

const Home = (props: Props) => {
  const dispatch = useCustomDispatch();

  const { weather } = useCustomSelector(selectCurrentWeatherData);

  React.useEffect(() => {
    dispatch(fetchCurrentWeather("Иваново"));
  }, []);

  return (
    <div className={s.home}>
      <div className={s.warpper}>
        <ThisDay weather={weather} />
        <ThisDayInfo weather={weather} />
      </div>
      <Days />
    </div>
  );
};

export default Home;
