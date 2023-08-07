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
      <Skeleton
        variant="rounded"
        width={`${70 + Math.random() * 30}%`}
        height="1rem"
      />
      <Skeleton
        variant="rounded"
        width={`${70 + Math.random() * 30}%`}
        height="1rem"
      />
      <Skeleton
        variant="rounded"
        width={`${70 + Math.random() * 30}%`}
        height="1rem"
      />
      <Skeleton
        variant="rounded"
        width={`${70 + Math.random() * 30}%`}
        height="1rem"
      />
      <Skeleton
        variant="rounded"
        width={`${70 + Math.random() * 30}%`}
        height="1rem"
      />
      <Skeleton
        variant="rounded"
        width={`${70 + Math.random() * 30}%`}
        height="1rem"
      />
      <Skeleton
        variant="rounded"
        width={`${70 + Math.random() * 30}%`}
        height="1rem"
      />
      <Skeleton
        variant="rounded"
        width={`${70 + Math.random() * 30}%`}
        height="1rem"
      />
      <Skeleton
        variant="rounded"
        width={`${70 + Math.random() * 30}%`}
        height="1rem"
      />
    </Card>
  );
}
