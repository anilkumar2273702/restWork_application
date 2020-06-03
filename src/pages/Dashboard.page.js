import React from "react";
import { getUserDetails, logout } from "../_services/user.service";

export const DashboardPage = (props) => {
  let userDetails = getUserDetails();
  // console.log("Data --- ", userDetails)
  return (
    <div>
      <h1>Dashboard Page</h1>
      <p>User Name - {userDetails.firstName} {userDetails.lastName}</p>

      <button
        onClick={() => {
          props.history.push("/");
        }}
      >
        Home
      </button>
      <button
        onClick={() => logout()}
      >
        LogOut
      </button>
    </div>
  );
};
