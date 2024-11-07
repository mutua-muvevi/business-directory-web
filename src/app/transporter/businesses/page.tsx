import Page from "@/components/page/page";
import { paths } from "@/routes/paths";
import { Typography } from "@mui/material";

const TransporterBusinesses = () => {
	const breadcrumbLinks = [
		{ name: "Home", href: paths.transporter.root },
		{ name: "Businesses", href: paths.transporter.businesses },
	];

	return (
		<Page links={breadcrumbLinks}>
			<Typography variant="h3">Transporter Business</Typography>
		</Page>
	);
};

export default TransporterBusinesses;
