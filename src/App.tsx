import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Landing from "./pages/Landing";
import Signup from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./DashboardLayout";
import MyDashboard from "./pages/MyDashboard";
import Notfound from "./pages/Notfound";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Landing />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<DashboardLayout />}>
              <Route path="my-dashboard" element={<MyDashboard />} />
              <Route path="/dashboard/:id" element={<Dashboard />} />
              <Route path="*" element={<Navigate to="/notFound" />} />
            </Route>
            <Route path="/notFound" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </UserProvider>
    </QueryClientProvider>
  );
};

export default App;
