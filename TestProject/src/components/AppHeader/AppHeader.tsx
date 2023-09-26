import "./AppHeader.scss";
import classNames from "classnames";
import {Link} from "react-router-dom";

const AppHeader = ({ className }) => {
  const classes = classNames("app-header", className);

  return (
    <div className={classes}>
        <Link className="app-header__link" to="/">Главная</Link>
        <Link className="app-header__link" to="/profile">Профиль</Link>
        <Link className="app-header__link" to="/sign-in">Авторизация</Link>
        <Link className="app-header__link" to="/sign-up">Регистрация</Link>
    </div>
  );
};

export default AppHeader;
