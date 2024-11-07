import Page from "@/components/page/page";
import { paths } from "@/routes/paths";
import { Typography } from "@mui/material";

const Finance = () => {
	const breadcrumbLinks = [
		{ name: "Admin", href: paths.admin.root },
		{ name: "Finance", href: paths.admin.business },
	];

	return (
		<Page links={breadcrumbLinks}>
			<div style={{ height: "100vh" }}>
				<Typography variant="h1">Finance Page</Typography>
			</div>
		</Page>
	);
};

export default Finance;