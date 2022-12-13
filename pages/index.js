import Head from "next/head";
import Product from "../components/Product/Product";

export default function Home({ products }) {
	console.log({ products });
	return (
		<>
			<Head>
				<title>Store App</title>
			</Head>
			<div
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
				}}
			>
				{products.map((product) => {
					return (
						<Product
							id={product.id}
							image={product.image}
							title={product.title}
							category={product.category}
							description={product.description}
							price={product.price}
							key={product.id}
						/>
					);
				})}
			</div>
		</>
	);
}

export async function getStaticProps() {
	const response = await fetch("https://fakestoreapi.com/products");
	const products = await response.json();
	return {
		props: {
			products,
		},
	};
}
