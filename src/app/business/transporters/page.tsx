import Page from "@/components/page/page";
import { paths } from "@/routes/paths";
import { Typography, Grid, Card } from "@mui/material";

const BusinessTransporters = () => {
	const breadcrumbLinks = [
		{ name: "Business", href: paths.business.root },
		{ name: "Transporters", href: paths.business.transporters },
	];

	return (
		<Page links={breadcrumbLinks}>
			<Typography variant="h3">Business Transporters</Typography>

			<Grid container spacing={3}>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, i) => (
					<Grid item md={6} lg={4} xl={3} key={i}>
						<Card>
							el
						</Card>
					</Grid>
				))}
			</Grid>
		</Page>
	);
};

export default BusinessTransporters;
