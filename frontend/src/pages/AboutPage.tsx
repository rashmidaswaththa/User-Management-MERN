import flowerImg from "../assets/img/flower.jpg";
import styles from "../styles/About.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const AboutPage = () => {
    return (
        <Container fluid className={styles.background} >
            <Row>
                <Col >
                    <div>
                        <p><h4>Welcome to our Flower Plant app, where the beauty of nature meets the convenience of technology.</h4>
                            <br></br>
                            <Image src={flowerImg} fluid className={styles.img}/>;
                            <br></br>
                            Our mission is to bring the joy of gardening and the allure of blooming flowers directly to your fingertips.
                            Whether you're a seasoned gardener or just starting to explore the world of plants, our app is designed to be your green companion. Discover a vast collection of exquisite flowers, learn essential gardening tips, and create your virtual garden oasis. We believe in fostering a deeper connection between people and nature, and our app is here to inspire, educate, and accompany you on your botanical journey. Join us in celebrating the vibrant colors, delicate fragrances, and endless possibilities that flowers bring to our lives. Happy planting!</p>
                    </div>
                </Col>
            </Row>
        </Container>

    );
}

export default AboutPage;