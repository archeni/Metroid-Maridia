import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { MetroidList } from "./games/MetroidList";
import { MessageList } from "./messages/MessageList";
import { LibraryList } from "./library/MyLibraryList";

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

      <Route exact path='/messages'>
        <MessageList />
      </Route>

      <Route exact path='/myLibrary'>
        <LibraryList />
      </Route>

        {/*looks for matching url (from task card) and digit, and sets as the 'taskId' */}
    </>
  )
}
