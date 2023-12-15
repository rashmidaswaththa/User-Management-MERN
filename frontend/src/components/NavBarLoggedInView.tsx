import { Button, Nav, Navbar } from "react-bootstrap";
import { User } from "../models/user";
import * as NotesApi from "../network/userAPI";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

interface NavBarLoggedInViewProps {
    user: User,
    onLogoutSuccessful: () => void,
}

const NavBarLoggedInView = ({ user, onLogoutSuccessful }: NavBarLoggedInViewProps) => {

    async function logout() {
        try {
            await NotesApi.logout();
            onLogoutSuccessful();
        } catch (error) {
            console.error(error);
            alert(error);
        }
    }

    return (
        <>
            <Navbar.Text className="me-2">
                <div className={styles.navtext}>Hello {user.username}</div>
            </Navbar.Text>
            <Nav.Link as={Link} to="/profile">
                <div className={styles.proftext}>My Profile</div>
            </Nav.Link>
            <div className={styles.logoutbtn}><Button onClick={logout}>Log out</Button></div>

        </>
    );
}

export default NavBarLoggedInView;