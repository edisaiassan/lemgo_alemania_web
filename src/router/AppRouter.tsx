import { Navigate, Route, Routes } from "react-router"
import { NavRouter } from "./NavRouter";
import { QuickQueryPage } from "../presentation/pages/quickQuery/QuickQueryPage";
import { SignInPage } from "../presentation/pages/signIn/SignInPage";

export const AppRouter = () => {
    const user = true; // en realidad deberías traerlo del contexto o auth

    return (
        <Routes>
            <Route
                path='*'
                element={user ? <NavRouter /> : <Navigate to="/signIn" replace />}
            />
            <Route
                path="/signIn"
                element={!user ? <SignInPage /> : <Navigate to="/" replace />}
            />
            <Route
                path="/quickQuery"
                element={<QuickQueryPage />}
            />
        </Routes>
    );
};
