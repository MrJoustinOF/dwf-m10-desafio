import { useEffect, useState } from "react";

export const useLocalStorage = (field: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const localData: any = localStorage.getItem(field);

    setData(localData);
  }, []);

  return data;
};
