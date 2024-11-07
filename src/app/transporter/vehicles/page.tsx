import Page from "@/components/page/page";
import { paths } from "@/routes/paths";
import { Typography } from "@mui/material";

const TransporterVehicles = () => {
	const breadcrumbLinks = [
		{ name: "Home", href: paths.transporter.root },
		{ name: "My Vehicles", href: paths.transporter.drivers },
	];
	
	return (
		<Page links={breadcrumbLinks}>
			<Typography variant="h3">My vehicles</Typography>
		</Page>
	);
};

export default TransporterVehicles;
