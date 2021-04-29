import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { MetroidList } from "./games/MetroidList";

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/Login">
        <Login />
      </Route>

      <Route exact path="/Register">
        <Register />
      </Route>

      <Route exact path="/">
        <MetroidList />
      </Route>

        {/*looks for matching url (from task card) and digit, and sets as the 'taskId' */}
    </>
  )
}
