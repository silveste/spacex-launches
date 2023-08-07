import { useState, useEffect, useCallback } from "react";
import { ServiceStatus } from "../constants";

const URL = "https://api.spacexdata.com/v4/launches/query";

export const useService = () => {
  const [status, setStatus] = useState(ServiceStatus.IDDLE);
  const [data, setData] = useState(null);

  const getData = useCallback(async (page) => {
    setStatus(ServiceStatus.LOADING);
    setData(null);
    try {
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          options: {
            offset: 0,
            page: page || 1,
            limit: 12,
          },
        }),
      });
      const data = await res.json();
      setStatus(ServiceStatus.SUCCESS);
      setData(data);
    } catch (e) {
      setStatus(ServiceStatus.ERROR);
      setData(e);
    }
  }, []);

  //Retrieves data on the first call of the hook
  useEffect(() => {
    getData();
  }, [getData]);

  return [getData, { status, data }];
};
