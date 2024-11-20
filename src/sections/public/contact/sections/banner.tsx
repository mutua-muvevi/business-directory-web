import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const GradientBox = styled(Box)(({ theme }) => ({
	background: `linear-gradient(45deg, ${theme.palette.primary.main},  ${theme.palette.success.main}, ${theme.palette.warning.main}, ${theme.palette.error.main})`,
	color: theme.palette.primary.contrastText,
	padding: theme.spacing(4),
	textAlign: "center",
	height: "35vh",
}));

const ContactBanner = () => {
	return (
		<GradientBox>
			<Container maxWidth="xl" sx={{ height: 1 }}>
				<Stack
					direction="column"
					spacing={2}
					justifyContent="center"
					alignItems={"flex-start"}
					sx={{ height: 1 }}
				>
					<Typography variant="h2">
						Do you want your business listed?
					</Typography>

					<Typography variant="subtitle2">
						Contact us today and take the first step toward reaching
						more customers. Let’s work together to make your
						business visible to the right audience.
					</Typography>
				</Stack>
			</Container>
		</GradientBox>
	);
};

export default ContactBanner;
