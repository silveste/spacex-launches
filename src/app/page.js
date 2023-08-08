"use client";
import { useContext } from "react";
import { Typography, Box, Container, Divider } from "@mui/material";
import Filters from "../components/Filters";
import LaunchesList from "../components/LaunchesList";
import Pagination from "../components/Pagination";
import { useService } from "../hooks/services";
import { globalStateContext } from "../store/GlobalStateProvider";
import { useCallback } from "react";
import { ServiceStatus, Action } from "../constants";

export default function Home() {
  const [state, dispatch] = useContext(globalStateContext);
  const [, data] = useService();

  const setFilters = useCallback(
    (filters) => {
      dispatch({ type: Action.UPDATE, payload: filters });
    },
    [dispatch]
  );

  const pageChangeHandler = useCallback(
    (newPage) => {
      dispatch({ type: Action.SET_PAGE, payload: newPage });
    },
    [dispatch]
  );

  return (
    <Container maxWidth="lg">
      <Box
        component="header"
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        py={2}
      >
        <Typography variant="h4">SpaceX Launches</Typography>
        <Filters
          filtersApplied={state}
          applyFilters={setFilters}
          disabled={data.status !== ServiceStatus.SUCCESS}
        />
      </Box>
      <Divider />
      <LaunchesList data={data.data?.docs} status={data.status} />
      {data.status === ServiceStatus.SUCCESS && (
        <Pagination
          current={data.data.page}
          max={data.data.totalPages}
          onChange={pageChangeHandler}
        />
      )}
    </Container>
  );
}
