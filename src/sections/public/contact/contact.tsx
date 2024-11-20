"use client";

import { useScroll } from "framer-motion";

import ScrollProgress from "@/components/scroll-progress";
import MainLayout from "@/layouts/public";
import { Box, Container, Grid } from "@mui/material";
import ContactBanner from "./sections/banner";
import ContactUsInfo from "./sections/details";
import ContactUsForm from "./sections/form";

const ContactView = () => {
	const { scrollYProgress } = useScroll();

	return (
		<MainLayout>
			<ScrollProgress scrollYProgress={scrollYProgress} />

			<Box
				sx={{
					overflow: "hidden",
					position: "relative",
					bgcolor: "background.default",
				}}
			>
				<ContactBanner />

				<Container maxWidth="xl" sx={{py:5}}>
					<Grid container spacing={2}>
						<Grid item xs={12} md={6} lg={5} sx={{ mb: { xs: 5, md: 0 } }}>
							<ContactUsInfo />
						</Grid>

						<Grid item xs={12} md={6} lg={7} sx={{ mb: { xs: 5, md: 0 } }}>
							<ContactUsForm />
						</Grid>
					</Grid>
				</Container>
			</Box>
		</MainLayout>
	);
};

export default ContactView;
