

import Iconify from "@/components/iconify";
import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

interface BusinessProps {
	name: string;
	email: string;
	phone: string;
	logo: string;
	location: {
		city?: string;
		country?: string;
	},
	isVerified: boolean
}

const GradientBox = styled(Box)(({ theme }) => ({
	background: `linear-gradient(45deg, ${theme.palette.primary.main},  ${theme.palette.success.main}, ${theme.palette.warning.main}, ${theme.palette.error.main})`,
	color: theme.palette.primary.contrastText,
	padding: theme.spacing(4),
	textAlign: "center",
	height: "35vh",
}));

const BusinessBanner = ({ name, phone, email, logo, location, isVerified}: BusinessProps) => {
	console.log("logo", logo);

	const items = [
		{
			icon: <Iconify icon="rivet-icons:phone" width={20} />,
			value: phone,
		},
		{
			icon: <Iconify icon="ic:baseline-email" width={20} />,
			value: email,
		},
		{
			icon: <Iconify icon="subway:location-3" width={20} />,
			value: `${location.city}, ${location.country}`,
		},
	];

	return (
		<GradientBox>
			<Container maxWidth="xl" sx={{ height: 1 }}>
				<Stack
					direction="row"
					spacing={2}
					alignItems={"center"}
					justifyContent={"start"}
					sx={{ height: 1 }}
				>
					<Image
						src={logo}
						alt={`The logo for ${name}`}
						width={300}
						height={300}
					/>
					<Stack direction="column" spacing={2}>
						<Typography variant="h2" textAlign="left">{name}</Typography>

						<Stack direction="row" spacing={3}>
							{items.map((item, i) => (
								<Stack direction="row" spacing={2} key={i} alignItems="center">
									{item.icon}
									<Typography variant="body1">
										{item.value}
									</Typography>
								</Stack>
							))}
						</Stack>

						{
							isVerified && (
								<Stack direction="row" spacing={2} alignItems="center">
									<Iconify icon="ic:baseline-check-circle" width={20} />
									<Typography variant="body1">Verified</Typography>
								</Stack>
							)
						}
					</Stack>
				</Stack>
			</Container>
		</GradientBox>
	);
};

export default BusinessBanner;
