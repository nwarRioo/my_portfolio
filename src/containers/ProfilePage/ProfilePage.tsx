import { FC, ReactElement } from "react";
import { Container } from "../../components/UI/Container/Container";
import Header from "../../components/Header/Header";
import Demo from "./Demo/Demo";
import Footer from "../../components/Footer/Footer";
import Information from "./Information/Information";
import { Route, Routes } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import AboutMe from "../../components/AboutMe/AboutMe";

const ProfilePage: FC = (): ReactElement => {
    return (
        <>  
            <Header />
            <Container>
                <Demo />
                <Information />
                <Routes>
                    <Route path={"/my_portfolio/"} element={<Layout />}>
                        <Route index element={<h2 style={{padding: "0 10px"}}>Еще не заполнено</h2>}/>
                        <Route path="/my_portfolio/works" element={<h2 style={{padding: "0 10px"}}>Еще не заполнено</h2>}/>
                        <Route path="/my_portfolio/about" element={<AboutMe />}/>
                    </Route>
                </Routes>
            </Container>
            <Footer />
        </>
    );
};

export default ProfilePage;