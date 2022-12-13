import Link from "next/link";
import Head from "next/head";
import React from "react";
import Product from "../../components/Product/Product";

const SingleProduct = ({ product }) => {
	return (
		<>
			<Head>
				<title>{product.title}</title>
			</Head>
			<Link href={"/"}>Go back</Link>
			<Product
				id={product.id}
				image={product.image}
				title={product.title}
				category={product.category}
				description={product.description}
				price={product.price}
				key={product.id}
			/>
		</>
	);
};

export async function getStaticPaths() {
	const response = await fetch("https://fakestoreapi.com/products");
	const products = await response.json();
	const paths = products.map((product) => ({
		params: {
			id: `${product.id}`,
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const response = await fetch(
		`https://fakestoreapi.com/products/${params.id}`
	);
	const product = await response.json();

	return {
		props: {
			product,
		},
	};
}

export default SingleProduct;
