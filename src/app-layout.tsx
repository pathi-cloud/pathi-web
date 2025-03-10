import { Toolbar, CssBaseline, Box } from "@mui/material"
import { Outlet } from "react-router"
import AppHeader from "./components/app-header"

export default function Dashboard() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CssBaseline />
      <AppHeader />
      <Toolbar />
      <Outlet />
    </Box>
  )
}
