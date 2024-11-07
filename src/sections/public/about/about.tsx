import { Box, Typography } from "@mui/material";
import { ClientScrollProgress } from "../client-logic/scroll";

const HomeAboutSection = () => {
	return (
		<>
			<ClientScrollProgress />

			<Box
				sx={{
					overflow: "hidden",
					position: "relative",
					bgcolor: "background.default",
				}}
			>
				<Typography variant="h3" color="primary">
					About
				</Typography>
			</Box>
		</>
	);
};

export default HomeAboutSection;
