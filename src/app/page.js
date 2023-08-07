"use client";
import { Box, Container } from "@mui/material";
import Filters from "../components/Filters";
import { useService } from "../hooks/services";
import { useCallback } from "react";
import { LaunchType, Sort } from "../constants";

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

  return (
    <Container maxWidth="lg">
      <Box
        component="header"
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        py={2}
      >
        <h1>SpaceX Launches</h1>
        <Filters
          filtersApplied={initialFiltersState}
          applyFilters={(filters) => console.log("APPLY FILOTERS: ", filters)}
          disabled={false}
        />
      </Box>
      <Box component="main" minHeight="80vh">
        Bingo
      </Box>
      <Box component="footer">footer</Box>
    </Container>
  );
}
