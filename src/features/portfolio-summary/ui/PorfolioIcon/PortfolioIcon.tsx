import icon from "./assets/portfolio-icon.svg";

import s from "./PortfolioIcon.module.css";

export const PortfolioIcon = () => {
  return <img className={s.icon} src={icon} alt="porfolio" />;
};
