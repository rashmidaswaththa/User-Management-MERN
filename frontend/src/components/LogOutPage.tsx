import styles from "../styles/Profile.module.css";
const LoggedOutView = () => {
    return (
        <div>
            <p className={styles.paragraph}>
                <span className={styles.username}> Login Again to see your order details ...</span>
            </p>  
        </div>
    );
}

export default LoggedOutView;