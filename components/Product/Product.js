import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Product.module.css";

const Product = ({ category, description, id, image, price, title }) => {
	return (
		<Link href={`/products/${id}`} className={styles.Link}>
			<div className={styles.card}>
				<img alt={`img-${id}`} src={image} className={styles.img_container} />
				<div className={styles.product_details}>
					<h3>{title}</h3>
					<div className={styles.product_price}>
						<p>{price}</p>
						<p>{category}</p>
					</div>
					<p>{description}</p>
				</div>
			</div>
		</Link>
	);
};

export default Product;
