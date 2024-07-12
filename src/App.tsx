import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Mypage from "./pages/Mypage";
import Dashboard from "./pages/Dashboard";
import Edit from "./pages/Edit";
import DashboardLayout from "./DashboardLayout";
import MyDashboard from "./pages/MyDashboard";
import Notfound from "./pages/Notfound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<DashboardLayout />}>
          <Route path="my-dashboard" element={<MyDashboard />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route path="/dashboard/:id/edit" element={<Edit />} />
          <Route path="/my-page" element={<Mypage />} />
          <Route path="*" element={<Navigate to="/notFound" />} />
        </Route>
        <Route path="/notFound" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
