import { Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

export default function HomePage() {
  return (
    <>
      <Typography variant="h3">Page not found</Typography>

      <Link href="/" sx={{ display: "flex", alignItems: "center" }}>
        <HomeIcon fontSize="small" />
        Home
      </Link>
    </>
  );
}
