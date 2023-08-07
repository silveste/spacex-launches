"use client";
import { Box, Container } from "@mui/material";
import { useService } from "../hooks/services";

export default function Home() {
  const [getData, data] = useService();
  console.log(data);
  return (
    <Container maxWidth="lg">
      <Box
        component="header"
        display="flex"
        justifyContent="space-between"
        py={2}
      >
        <h1>SpaceX Launches</h1>
        <select>Filters</select>
      </Box>
      <Box component="main" minHeight="80vh">
        Bingo
      </Box>
      <Box component="footer">footer</Box>
    </Container>
  );
}
