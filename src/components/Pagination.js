import { Stack, Pagination as MUIPagination } from "@mui/material";

export default function Pagination({ current, max, onChange }) {
  return (
    <Stack alignItems="center" component="footer" sx={{ p: 2 }}>
      <MUIPagination
        count={max}
        page={current}
        onChange={(_, newPage) => onChange(newPage)}
        size="large"
      />
    </Stack>
  );
}
