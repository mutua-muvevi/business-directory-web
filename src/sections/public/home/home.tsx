"use client";

import { useScroll } from "framer-motion";

import ScrollProgress from "@/components/scroll-progress";
import MainLayout from "@/layouts/public";
import { Box } from "@mui/material";
import HomepageMain from "./sections/main";
import HomeTop from "./sections/top";


const HomeView = () => {
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
				<HomeTop/>
				<HomepageMain/>
			</Box>
		</MainLayout>
	);
};

export default HomeView;
