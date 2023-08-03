import { FC, ReactElement } from "react";
import ProfilePage from "./containers/ProfilePage/ProfilePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: FC = (): ReactElement => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/my_portfolio" element={<ProfilePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
