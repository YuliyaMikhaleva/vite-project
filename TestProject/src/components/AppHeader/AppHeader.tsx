import "./AppHeader.scss";
import classNames from "classnames";
import {Link} from "react-router-dom";

const AppHeader = ({ className }) => {
  const classes = classNames("app-header", className);

  return (
    <div className={classes}>
        <Link to="/">Главная</Link>
        <Link to="/profile">Профиль</Link>
        <Link to="/sign-in">Авторизация</Link>
        <Link to="/sign-up">Регистрация</Link>
    </div>
  );
};

export default AppHeader;
