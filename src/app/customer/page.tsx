import Page from "@/components/page/page";
import { paths } from "@/routes/paths";
import { Typography } from "@mui/material";

const Customer = () => {
	const breadcrumbLinks = [{ name: "Customer", href: paths.customer.root }];

	return (
		<Page links={breadcrumbLinks}>
			<Typography variant="h3">Customer</Typography>
		</Page>
	);
};

export default Customer;
