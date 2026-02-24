import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useChoiceStore } from "../../Store";

const Auth1 = () => {
    const {choice} = useChoiceStore();
      return !choice ? <Outlet /> : <Navigate to={"/"} />;
};

export default Auth1;
