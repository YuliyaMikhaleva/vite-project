import "./AppBody.scss";
import classNames from "classnames";
import { Route, Routes } from "react-router-dom";
import Main from "../../pages/Main/Main";
import Profile from "../../pages/Profile";

const AppBody = ({ className }) => {
  const classes = classNames("app-body", className);

  return (
    <div className={classes}>
        <Routes>
            <Route
                path="/"
                exact={true}
                element={<Main />}
            />
            <Route
                path="/profile"
                exact={true}
                element={<Profile />}
            />

        </Routes>
    </div>
  );
};

export default AppBody;
