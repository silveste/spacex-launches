import {
  Card,
  CardMedia,
  Chip,
  CardContent,
  Box,
  Typography,
} from "@mui/material";

export default function Item({ data }) {
  const date = new Date(data.date_local);
  return (
    <Card
      component="article"
      sx={{
        width: "18rem",
        height: "24rem",
        overflow: "hidden",
        position: "relative",
        padding: "0.5rem",
      }}
    >
      <CardMedia
        component="img"
        height="50%"
        image={data.links.patch.small}
        alt={`${data.name} badge`}
        sx={{ objectFit: "contain" }}
      />
      <Chip
        label={`Flight number: ${data.flight_number}`}
        color={data.success ? "success" : "error"}
        sx={{ position: "absolute", top: "1rem", right: "1rem" }}
      />
      <CardContent sx={{ maxHeight: "50%", overflowY: "scroll" }}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="caption">{data.name}</Typography>
          <Typography variant="caption">{date.toDateString()}</Typography>
        </Box>
        <Typography variant="body2" sx={{ mt: 1 }}>
          {data.details}
        </Typography>
      </CardContent>
    </Card>
  );
}
