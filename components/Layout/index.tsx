import { Header } from "./Header";
import { Footer } from "./Footer";
import { useMyData } from "hooks/useMyData";

type LayoutProps = {
  // Notice that children must be one JSX Element, if there are 2 or more, get them into a fragment <></>
  children: JSX.Element;
};

export const Layout = ({ children }: LayoutProps) => {
  const { data } = useMyData();

  return (
    <>
      <Header auth={data} />

      {children}

      <Footer auth={data} />
    </>
  );
};
