import { Typography } from "@mui/material";
import { paths } from "@/routes/paths";
import Page from "@/components/page/page";

const BusinessProduct = () => {

	const breadcrumbLinks = [
		{ name: "Home", href: paths.business.root },
		{ name: "Products", href: paths.business.products },
	];
	
	return (
		<Page links={breadcrumbLinks}>
			<Typography variant="h3">Business Product</Typography>
		</Page>
	);
};

export default BusinessProduct;
