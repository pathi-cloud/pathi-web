import { Toolbar, CssBaseline } from '@mui/material';
import { Outlet } from "react-router";
import AppHeader from "./components/app-header"

export default function Dashboard() {
  return (
    <div>
      <CssBaseline />
      <AppHeader />
      <Toolbar />
      <Outlet />
    </div>
  );
}