import Page from "@/components/page/page";
import { paths } from "@/routes/paths";
import { Typography } from "@mui/material";

const Business = () => {
	const breadcrumbLinks = [
		{ name: "Admin", href: paths.admin.root },
		{ name: "Business", href: paths.admin.business },
	];

	return (
		<Page links={breadcrumbLinks}>
			<div style={{ height: "100vh" }}>
				<Typography variant="h1">Business Page</Typography>
			</div>
		</Page>
	);
};

export default Business;