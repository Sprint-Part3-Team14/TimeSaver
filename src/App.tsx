import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Signup from "./pages/SignUp";
import Mypage from "./pages/Mypage";
import Dashboard from "./pages/Dashboard";
import Edit from "./pages/Edit";
import DashboardLayout from "./DashboardLayout";
import MyDashboard from "./pages/MyDashboard";
import Notfound from "./pages/Notfound";
import SignIn from "./pages/SignIn";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
