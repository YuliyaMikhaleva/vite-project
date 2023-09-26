import "./AppFooter.scss";
import classNames from "classnames";
import {Link} from "react-router-dom";

const AppFooter = ({ className }) => {
  const classes = classNames("app-footer", className);

  return (
    <div className={classes}>
        <div>футер</div>
    </div>
  );
};

export default AppFooter;
