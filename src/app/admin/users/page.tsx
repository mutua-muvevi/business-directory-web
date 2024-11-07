import Page from "@/components/page/page";
import { paths } from "@/routes/paths";
import { Typography } from "@mui/material";

const Users = () => {
	const breadcrumbLinks = [
		{ name: "Admin", href: paths.admin.root },
		{ name: "Users", href: paths.admin.users },
	];

	return (
		<Page links={breadcrumbLinks}>
			<div style={{ height: "100vh" }}>
				<Typography variant="h1">Users Page</Typography>
			</div>
		</Page>
	);
};

export default Users;
