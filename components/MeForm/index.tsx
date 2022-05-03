import { useEffect } from "react";
import { useRouter } from "next/router";
import { AddressForm } from "./AddressForm";
import { ProfileForm } from "./ProfileForm";
import { useMyData } from "hooks/useMyData";
import { Loader } from "ui/loader";

export const MeForm = () => {
  const { data, error, isLoading }: any = useMyData();

  const router = useRouter();

  useEffect(() => {
    try {
      if (Object.keys(error).length > 0 || !localStorage.getItem("token")) {
        router.push("/signin");
      }
    } catch (error) {
      // something, that's it
      const ok = "ok";
    }
  }, [error, router]);

  return isLoading ? (
    <div style={{ margin: "100px 0" }}>
      <Loader />
    </div>
  ) : (
    <>
      <ProfileForm user={data} />
      <AddressForm user={data} />
    </>
  );
};
