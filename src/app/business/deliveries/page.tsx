import Page from "@/components/page/page";
import { paths } from "@/routes/paths";
import { Typography } from "@mui/material";

const BusinessDeliveries = () => {

	const breadcrumbLinks = [
		{ name: "Home", href: paths.business.root },
		{ name: "Deliveries", href: paths.business.deliveries },
	];

	return (
		<Page links={breadcrumbLinks}>
			<Typography variant="h3">Business Deliveries</Typography>
		</Page>
	);
};

export default BusinessDeliveries;