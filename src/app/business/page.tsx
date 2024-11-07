import Page from "@/components/page/page";
import { Typography } from "@mui/material";
import { paths } from "@/routes/paths";

const BusinessHome = () => {
	const breadcrumbLinks = [
		{ name: "Business", href: paths.business.root },
	];

	return (
		<Page links={breadcrumbLinks}>
			<Typography variant="h3">Welcome to the Business Home Page</Typography>
		</Page>
	);
};

export default BusinessHome;
