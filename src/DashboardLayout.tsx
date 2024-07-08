import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./components/Sidebar/Sidebar";

function DashboardLayout() {
  const Temp = styled.div`
    display: flex;
  `;

  return (
    <>
      <div>header</div>
      <Temp>
        <Sidebar />
        <Outlet />
      </Temp>
    </>
  );
}

export default DashboardLayout;
