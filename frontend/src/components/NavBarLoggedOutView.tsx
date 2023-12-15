import { Button } from "react-bootstrap";
import styles from "../styles/Navbar.module.css";

interface NavBarLoggedOutViewProps {
    onSignUpClicked: () => void,
    onLoginClicked: () => void,
}

const NavBarLoggedOutView = ({ onSignUpClicked, onLoginClicked }: NavBarLoggedOutViewProps) => {
    return (
        <>
        <div className={styles.signupbtn}><Button onClick={onSignUpClicked}>Sign Up</Button></div>
        <div ><Button onClick={onLoginClicked}>Log In</Button></div>   
            
        </>
    );
}

export default NavBarLoggedOutView;