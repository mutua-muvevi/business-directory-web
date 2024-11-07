import { Typography } from "@mui/material";
import Page from "@/components/page/page";
import { paths } from "@/routes/paths";

const BusinessCustomers = () => {
	const breadcrumbLinks = [
		{ name: "Home", href: paths.business.root },
		{ name: "Customers", href: paths.business.transporters },
	];

	return (
		<Page links={breadcrumbLinks}>
			<Typography variant="h3">Business Customers</Typography>
		</Page>
	);
};

export default BusinessCustomers;
