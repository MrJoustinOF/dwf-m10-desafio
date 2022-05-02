import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "utils/fetcher";
import { useLocalStorage } from "./useLocalStorage";

const BASE_URL = "https://m9-desafio-jous.vercel.app";

export const useMyData = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState({});

  const url = BASE_URL + "/api/me";
  const token = useLocalStorage("token");

  const { data: fetchData, error: fetchError } = useSWR(
    token ? url : null,
    fetcher,
    {
      revalidateIfStale: true,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      revalidateOnMount: true,
    }
  );

  useEffect(() => {
    setData(fetchData);
    setError(fetchError);
  }, [fetchData, fetchError, token]);

  return { data, error, isLoading: !fetchData && !fetchError };
};
