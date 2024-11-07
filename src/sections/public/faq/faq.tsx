"use client";

import { useScroll } from "framer-motion";

import ScrollProgress from "@/components/scroll-progress";
import MainLayout from "@/layouts/public";
import { Box } from "@mui/material";

const HomeFAQ = () => {
	const { scrollYProgress } = useScroll();

	return (
		<MainLayout>
			<ScrollProgress scrollYProgress={scrollYProgress} />

			<Box
				sx={{
					overflow: "hidden",
					position: "relative",
					bgcolor: "background.default",
					height: "100vh",
				}}
			>
				FAQ
			</Box>
		</MainLayout>
	);
};

export default HomeFAQ;
