import { Container } from "react-bootstrap";
import LoggedOutView from "../components/LogOutPage";
import { User } from "../models/user";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import profileImg from "../assets/img/profile.png";
import styles from "../styles/Profile.module.css";

//get current login user details
interface ProfileProps {
    loggedInUser: User | null,
}

const Profile = ({ loggedInUser }: ProfileProps) => {
    return (
        <Container className={styles.notesPage}>
            <>
                {loggedInUser
                    ? <Container fluid className={styles.profileCol}>
                        <Row>
                            <Col >
                                <Figure className={styles.profileFigure}>
                                    <Figure.Image
                                        width={171}
                                        height={180}
                                        alt="image"
                                        src={profileImg}
                                        fluid
                                        text-center
                                    />
                                    <Figure.Caption>
                                        <p className={styles.paragraph}>
                                            <span className={styles.usernameLabel}>Username : </span>
                                            <span className={styles.username}>{loggedInUser.username}</span>
                                        </p>
                                        <p className={styles.paragraph}>
                                            <span className={styles.usernameLabel}>Email :</span>
                                            <span className={styles.username}>{loggedInUser.email} </span>
                                        </p>
                                    </Figure.Caption>
                                </Figure>
                            </Col>
                        </Row>
                    </Container>
                    // Handle the case where profileUser is undefined
                    : <LoggedOutView />
                }
            </>
        </Container>
    );
}

export default Profile;