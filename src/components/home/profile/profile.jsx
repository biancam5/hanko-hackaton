import { useEffect } from "react";
import { register } from "@teamhanko/hanko-elements";

const hankoApi = process.env.REACT_APP_HANKO_API_URL;

export default function Profile() {
  useEffect(() => {
    register(hankoApi).catch((error) => {
    console.log("you have an error");
    });
  }, []);

  return <hanko-profile />;
}
