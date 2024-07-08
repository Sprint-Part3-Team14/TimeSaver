import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <>
      <div>header</div>
      <div>sidebar</div>
      <Outlet />
    </>
  );
}

export default DashboardLayout;
