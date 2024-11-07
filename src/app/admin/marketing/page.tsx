import Page from "@/components/page/page";
import { paths } from "@/routes/paths";
import { Typography } from "@mui/material";

const Marketing = () => {
	const breadcrumbLinks = [
		{ name: "Admin", href: paths.admin.root },
		{ name: "Marketing", href: paths.admin.business },
	];

	return (
		<Page links={breadcrumbLinks}>
			<div style={{ height: "100vh" }}>
				<Typography variant="h1">Marketing Page</Typography>
			</div>
		</Page>
	);
};

export default Marketing;