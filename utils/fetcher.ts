export const fetcher = async (url: string, method?: string, body?: any) => {
  const data = await (
    await fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        Authorization: "bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    })
  ).json();

  return data;
};
