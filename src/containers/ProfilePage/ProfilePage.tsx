import { FC, ReactElement } from "react";
import styles from "./ProfilePage.module.css";
import { Container } from "../../components/UI/Container/Container";
import Header from "../../components/Header/Header";
import Demo from "./Demo/Demo";
import Footer from "../../components/Footer/Footer";


const ProfilePage: FC = (): ReactElement => {
    return (
        <>  
            <Header />
            <Container>
                <Demo />
                <div className={styles.profilePage}>
                    <div className={styles.statusText}>В разработке...</div>
                    <div className={styles.statusText}>В разработке...</div>
                </div>
            </Container>
            <Footer />
        </>
    );
};

export default ProfilePage;