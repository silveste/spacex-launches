import { useContext, useState, useEffect, useCallback } from "react";
import { ServiceStatus, LaunchType } from "../constants";
import { globalStateContext } from "../store/GlobalStateProvider";

const URL = "https://api.spacexdata.com/v5/launches/query";

export const useService = () => {
  const [state, _] = useContext(globalStateContext);
  const [status, setStatus] = useState(ServiceStatus.IDDLE);
  const [data, setData] = useState(null);

  const getData = useCallback(async (state) => {
    const LIMIT = 12;
    setStatus(ServiceStatus.LOADING);
    setData(null);
    try {
      const query = {};
      if (state[LaunchType.UPCOMING] && !state[LaunchType.PAST])
        query["upcoming"] = true;
      if (state[LaunchType.PAST] && !state[LaunchType.UPCOMING])
        query["upcoming"] = false;
      if (state[LaunchType.UNSUCCESSFUL]) query["success"] = false;
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          options: {
            page: state.page,
            limit: LIMIT,
            sort: {
              flight_number: state.sort,
            },
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
    getData(state);
  }, [getData, state]);
  return [getData, { status, data }];
};
