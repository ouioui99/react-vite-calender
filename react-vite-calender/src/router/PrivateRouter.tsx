import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserAuthContext } from "../Contexts/UserContext";
import { Value } from "../types";

export default function PrivateRouter() {
  const { user, loading, setLoading }: any = useContext(UserAuthContext);

  if (user) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}
