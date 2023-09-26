import "./AppBody.scss";
import classNames from "classnames";
import { Route, Routes } from "react-router-dom";
import Main from "../../pages/Main/Main";
import Profile from "../../pages/Profile";
import Signin from "../../pages/Signin";
import Signup from "../../pages/Signup";

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
            <Route
                path="/sign-in"
                exact={true}
                element={<Signin />}
            />
            <Route
                path="/sign-up"
                exact={true}
                element={<Signup />}
            />

        </Routes>
    </div>
  );
};

export default AppBody;
