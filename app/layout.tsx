import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	weight: ["400", "700"],
	style: ["normal"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Astra",
	description:
		"Your ultimate trading partner, seamlessly integrated with Dexscreener!",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<link rel="icon" href="/logo.png" sizes="any" />
				{children}
			</body>
		</html>
	);
}
