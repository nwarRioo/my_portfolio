import { FC, ReactElement } from "react";
import { Container } from "../../components/UI/Container/Container";
import Header from "../../components/Header/Header";
import Demo from "./Demo/Demo";
import Footer from "../../components/Footer/Footer";
import Information from "./Information/Information";
import { Route, Routes } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const ProfilePage: FC = (): ReactElement => {
    return (
        <>  
            <Header />
            <Container>
                <Demo />
                <Information />
                <Routes>
                    <Route path={"/my_portfolio/"} element={<Layout />}>
                        <Route path="/my_portfolio/about" element={<Demo />}/>
                        <Route path="/my_portfolio/works" element={<Demo />}/>
                        
                    </Route>
                </Routes>
            </Container>
            <Footer />
        </>
    );
};

export default ProfilePage;