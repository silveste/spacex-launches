import { Card, Skeleton } from "@mui/material";
export default function ItemPlaceholder() {
  return (
    <Card
      component="article"
      sx={{
        width: "18rem",
        height: "24rem",
        padding: "0.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        gap: "0.1rem",
      }}
    >
      <Skeleton
        variant="rounded"
        width="70%"
        height="14rem"
        sx={{ alignSelf: "center" }}
      />
      <Skeleton variant="rounded" width="100%" height="1rem" />
      <Skeleton variant="rounded" width="87%" height="1rem" />
      <Skeleton variant="rounded" width="87%" height="1rem" />
      <Skeleton variant="rounded" width="87%" height="1rem" />
      <Skeleton variant="rounded" width="78%" height="1rem" />
      <Skeleton variant="rounded" width="73%" height="1rem" />
      <Skeleton variant="rounded" width="54%" height="1rem" />
      <Skeleton variant="rounded" width="97%" height="1rem" />
      <Skeleton variant="rounded" width="90%" height="1rem" />
      <Skeleton variant="rounded" width="65%" height="1rem" />
    </Card>
  );
}
