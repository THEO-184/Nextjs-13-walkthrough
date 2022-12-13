import Link from "next/link";
import React from "react";
import styles from "../styles/utils.module.css";

const NotFound = () => {
	return (
		<div className={styles.container}>
			<div className={styles.flex_container}>
				<p style={{ paddingRight: "1rem" }}>Page Not Found</p>
				<Link href={"/"}>Go Back</Link>
			</div>
		</div>
	);
};

export default NotFound;
