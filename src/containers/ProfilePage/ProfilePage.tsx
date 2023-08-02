import { FC, ReactElement } from "react";
import styles from "./ProfilePage.module.css";
import { Container } from "../../components/UI/Container/Container";


const ProfilePage: FC = (): ReactElement => {
    return (
        <Container>
            <div className={styles.profilePage}>
                <h1>ProfilePage</h1>
            </div>
        </Container>
    );
};

export default ProfilePage;