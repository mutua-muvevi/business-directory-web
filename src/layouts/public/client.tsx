"use client";

import Box from "@mui/material/Box";
import { usePathname } from "next/navigation";
import Footer from "./footer";
import Header from "./header";

interface ClientSideLayoutProps {
	children: React.ReactNode;
}

export const PublicClientSideLayout = ({ children }: ClientSideLayoutProps) => {
	const pathname = usePathname();
	const homePage = pathname === "/";

	return (
		<Box sx={{ display: "flex", flexDirection: "column", height: 1 }}>
			<Header />

			<Box
				component="main"
				sx={{
					flexGrow: 1,
					...(!homePage && {
						pt: { xs: 8, md: 10 },
					}),
				}}
			>
				{children}
			</Box>

			<Footer />
		</Box>
	);
};
