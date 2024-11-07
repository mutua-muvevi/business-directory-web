import Page from "@/components/page/page";
import { paths } from "@/routes/paths";
import { Typography } from "@mui/material";

const TransporterShipments = () => {
	const breadcrumbLinks = [
		{ name: "Home", href: paths.transporter.root },
		{ name: "My Shipment", href: paths.transporter.shipment },
	];
	
	return (
		<Page links={breadcrumbLinks}>
			<Typography variant="h3">Transporter Shipments</Typography>
		</Page>
	);
};

export default TransporterShipments;
