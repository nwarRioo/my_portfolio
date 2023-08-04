import { FC, ReactElement } from "react";
import ProfilePage from "./containers/ProfilePage/ProfilePage";
import { BrowserRouter } from "react-router-dom";

const App: FC = (): ReactElement => {
    return (
        <BrowserRouter>
            <ProfilePage />
        </BrowserRouter>
    );
};

export default App;
