import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserAuthContext } from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { user, setUser, loading, setLoading }: any =
    useContext(UserAuthContext);
  const navigate = useNavigate();

  const handleClickLoginButton = () => {
    setUser("aa");
    navigate("/");
  };
  return (
    <div className="flex-1 flex items-center justify-center">
      <h1 className="text-2xl">login</h1>
      <button onClick={() => handleClickLoginButton()}>loginボタン</button>
    </div>
  );
}
