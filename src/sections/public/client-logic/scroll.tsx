"use client";

import { useScroll } from "framer-motion";
import ScrollProgress from "@/components/scroll-progress"; // Import the server-side component

export const ClientScrollProgress = () => {
	const { scrollYProgress } = useScroll();

	return <ScrollProgress scrollYProgress={scrollYProgress} />;
};
