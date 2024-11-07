import Page from "@/components/page/page";
import { paths } from "@/routes/paths";
import { Typography } from "@mui/material";

const Transporter = () => {
	const breadcrumbLinks = [{ name: "Home", href: paths.transporter.root }];

	return (
		<Page links={breadcrumbLinks}>
			<Typography variant="h3">Transporter Home</Typography>
		</Page>
	);
};

export default Transporter;
