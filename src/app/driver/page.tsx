import Page from "@/components/page/page";
import { paths } from "@/routes/paths";
import { Typography } from "@mui/material";

const Driver = () => {
	const breadcrumbLinks = [{ name: "Driver", href: paths.driver.root }];

	return (
		<Page links={breadcrumbLinks}>
			<Typography variant="h3">Driver</Typography>
		</Page>
	);
};

export default Driver;
