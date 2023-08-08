"use client";
import { Typography, Box, Container, Divider } from "@mui/material";
import Filters from "../components/Filters";
import LaunchesList from "../components/LaunchesList";
import Pagination from "../components/Pagination";
import { useService } from "../hooks/services";
import { useCallback } from "react";
import { LaunchType, Sort, ServiceStatus } from "../constants";

const initialFiltersState = {
  [LaunchType.UPCOMMING]: false,
  [LaunchType.PAST]: false,
  [LaunchType.UNSUCCESSFUL]: false,
  sort: Sort.ASC,
};

export default function Home() {
  const [getData, data] = useService();

  console.log(data);
  const setFilters = useCallback((filters) => {
    console.log(filters);
  }, []);

  const pageChangeHandler = useCallback((a) => {
    console.log(a);
  }, []);

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
          filtersApplied={initialFiltersState}
          applyFilters={(filters) => console.log("APPLY FILOTERS: ", filters)}
          disabled={false}
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
