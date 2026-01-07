import { User } from "lucide-react";
import styles from "../styles/EditProfile.module.css";
export function ProfileHeader() {
    return (
        <div className={styles.avatarContainer}>
            <div className={styles.avatar}>
                <User size={52} color={"#fff"} />
            </div>
            <h1 className={styles.header}>Edit Profile</h1>
            <p
                className={styles.helperText}
                style={{ textAlign: "center", marginBottom: "1.5rem" }}
            >
                Update your personal information and budget settings
            </p>
        </div>
    )
}