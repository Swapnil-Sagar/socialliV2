import React, { lazy } from "react";
import { Route, Routes } from "react-router";
// import { useRouteMatch } from "react-router-dom";
import MainPage from "../container/mainPage";
// const MainPage = lazy(() => import("../container/mainPage"));

const DashboardRoutes = () => {
  //   const { path } = useRouteMatch();
  return (
    // <Switch>
    <Routes>
      <Route exact path={"/"} component={MainPage} />
    </Routes>
    // </Switch>
  );
};

export default DashboardRoutes;
