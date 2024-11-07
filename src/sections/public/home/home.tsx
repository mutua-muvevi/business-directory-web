"use client";

import { useScroll } from "framer-motion";

import ScrollProgress from "@/components/scroll-progress";
// import MainLayout from "@/layouts/public";
import { Box, Button, ButtonGroup, Stack, TextField, Typography } from "@mui/material";
import Iconify from "@/components/iconify";

const HomeView = () => {
	const { scrollYProgress } = useScroll();

	return (
		<div>
			<ScrollProgress scrollYProgress={scrollYProgress} />

			<Box
				sx={{
					overflow: "hidden",
					position: "relative",
					bgcolor: "background.default",
					height: "100vh",
					display: "flex",
				}}
			>
				<Stack
					spacing={2}
					justifyContent={"center"}
					alignItems={"center"}
					sx={{ width: 1, height: 1 }}
				>
					<Typography variant="h1">Search</Typography>

					<Stack direction="row">
						<TextField
							name="search"
							placeholder="Business name ..."
							variant="filled"
						/>
						<ButtonGroup variant="contained">
							<Button color="primary">
								<Iconify icon="iconamoon:search-duotone" />
							</Button>
							<Button color="secondary">
								<Iconify icon="ph:funnel-duotone" />
							</Button>
						</ButtonGroup>
					</Stack>
				</Stack>
			</Box>
		</div>
	);
};

export default HomeView;
