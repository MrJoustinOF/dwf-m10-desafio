import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Logout: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("token");

    router.push("/");
  }, []);

  return <div>loggin out...</div>;
};

export default Logout;
