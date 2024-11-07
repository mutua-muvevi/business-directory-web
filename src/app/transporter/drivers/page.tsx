import Page from "@/components/page/page";
import { paths } from "@/routes/paths";
import { Typography } from "@mui/material";

const TransporterDrivers = () => {
	const breadcrumbLinks = [
		{ name: "Home", href: paths.transporter.root },
		{ name: "My Drivers", href: paths.transporter.drivers },
	];
	
	return (
		<Page links={breadcrumbLinks}>
			<Typography variant="h3">My drivers</Typography>
		</Page>
	);
};

export default TransporterDrivers;
