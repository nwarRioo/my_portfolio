import { FC, ReactElement } from "react";
import styles from "./ProfilePage.module.css";
import { Container } from "../../components/UI/Container/Container";
import Header from "../../components/Header/Header";


const ProfilePage: FC = (): ReactElement => {
    return (
        <>  
            <Header />
            <Container>
                <div className={styles.profilePage}>
                    <p className={styles.statusText}>В разработке...</p>
                </div>
            </Container>
        </>
    );
};

export default ProfilePage;