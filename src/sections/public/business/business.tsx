import { Box, Typography } from "@mui/material";
import { ClientScrollProgress } from "../client-logic/scroll";

const HomeBusinessSection = () => {
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
					Business
				</Typography>
			</Box>
		</>
	);
};

export default HomeBusinessSection;
