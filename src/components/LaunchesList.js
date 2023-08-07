import { Box } from "@mui/material";
import LaunchItem from "./LaunchItem";
import ItemPlaceholder from "./ItemPlaceholder";
import { ServiceStatus } from "../constants";

export default function LaunchesList({ data, status }) {
  let children;
  if (status !== ServiceStatus.SUCCESS) {
    children = new Array(6).fill(1).map((_, i) => <ItemPlaceholder key={i} />);
  } else {
    children = data?.map((launch) => (
      <LaunchItem data={launch} key={launch.id} />
    ));
  }
  return (
    <Box
      component="main"
      minHeight="80vh"
      display="flex"
      flexWrap="wrap"
      justifyContent="space-evenly"
      gap="1rem"
    >
      {children}
    </Box>
  );
}
