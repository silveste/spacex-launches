import { Container } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ backgroundColor: "red" }}>
      <Box
        component="header"
        display="flex"
        justifyContent="space-between"
        sx={{ backgroundColor: "green" }}
      >
        <h1>SpaceX Launches</h1>
        <select>Filters</select>
      </Box>
      <Box component="main" minHeight="80vh" backgroundColor="yellow">
        Bingo
      </Box>
      <Box component="footer" backgroundColor="blue">
        footer
      </Box>
    </Container>
  );
}
