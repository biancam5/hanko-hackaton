import { useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { register, Hanko } from "@teamhanko/hanko-elements";

const hankoApi = process.env.REACT_APP_HANKO_API_URL;

export default function Login() {
  const navigate = useNavigate();
  const hanko = useMemo(() => new Hanko(hankoApi), []);

  const redirectAfterLogin = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  useEffect(
    () =>
      hanko.onAuthFlowCompleted(() => {
        redirectAfterLogin();
      }),
    [hanko, redirectAfterLogin]
  );

  useEffect(() => {
    register(hankoApi).catch((error) => {
     console.log("you have an error");
    });
  }, []);

  return <hanko-auth />;
}