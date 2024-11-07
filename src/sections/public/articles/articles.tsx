import { Box, Divider, Stack, Typography } from "@mui/material";
import { ClientScrollProgress } from "../client-logic/scroll";

const HomeArticlessSection = () => {
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
				<Stack direction="column">
					<Box>
						<Typography variant="h4">Blogs</Typography>
						<Divider />
					</Box>

					<Box>
						<Typography variant="h4">News</Typography>
						<Divider />
					</Box>
				</Stack>
			</Box>
		</>
	);
};

export default HomeArticlessSection;
