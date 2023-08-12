import { Navigate, Outlet } from "react-router-dom";

function useAuth() {
    const token = localStorage.getItem('accessToken');
    return token
}


function ProtectedRoute() {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/login" />
}
export default ProtectedRoute;