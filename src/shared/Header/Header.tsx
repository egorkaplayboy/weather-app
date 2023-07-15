import React from "react";
import s from "./Header.module.scss";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import Select from "react-select";

type Props = {};

const Header = (props: Props) => {
  const options = [
    { value: "city-1", label: "Санкт-Петербург" },
    { value: "city-2", label: "Москва" },
    { value: "city-3", label: "Иваново" },
  ];

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "rgba(71,147,255,0.2)",
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100
    }),
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>Weather App</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select defaultValue={options[2]} styles={colourStyles} options={options} />
      </div>
    </header>
  );
};

export default Header;
