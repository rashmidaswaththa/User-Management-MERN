import flowerImg from "../assets/img/rose.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image';
import { User } from "../models/user";
import LoggedOutView from "../components/LogOutPage";
import styles from "../styles/Profile.module.css";

const Home = () => {

    return (
        <>
            <Container fluid className={styles.profileCol}>
                <Row>
                    <Col >
                        <Figure>
                            <Figure.Caption>
                                <p className={styles.paragraph}>
                                    <span className={styles.username}>Welcome to Rose Garden..</span>
                                    <br></br><br></br>
                                    <Image src={flowerImg} fluid className={styles.img} />
                                    <br></br><br></br>
                                    <p>Our mission is to bring the joy of gardening and the allure of blooming flowers directly to your fingertips.
                                        Whether you're a seasoned gardener or just starting to explore the world of plants, our app is designed to be your green companion. Discover a vast collection of exquisite flowers, learn essential gardening tips, and create your virtual garden oasis. We believe in fostering a deeper connection between people and nature, and our app is here to inspire, educate, and accompany you on your botanical journey. Join us in celebrating the vibrant colors, delicate fragrances,
                                        and endless possibilities that flowers bring to our lives. Happy planting!</p>
                                </p>
                            </Figure.Caption>
                        </Figure>
                    </Col>
                </Row>
            </Container >
        </>
    );
}

export default Home;