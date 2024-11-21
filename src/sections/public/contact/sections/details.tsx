import Iconify from "@/components/iconify";
import { Box, Stack, Typography } from "@mui/material";

const contactInfo = [
	{
		name: "Phone",
		value: ["+254 705 432 198", "+254 705 432 198"],
		icon: <Iconify icon="solar:phone-bold-duotone"/>,
	},
	{
		name: "Email",
		value: ["contact@precisionlegal.com", "contact@precisionlegal.com"],
		icon: <Iconify icon="ic:twotone-email"/>,
	},
	{
		name: "Address",
		value: ["Kisumu, Kenya"],
		icon: <Iconify icon="duo-icons:location"/>,
	},
];

const ContactUsInfo = () => {
	return (
		<Stack spacing={2} direction="column">
			{contactInfo.map((item) => (
				<Stack
					key={item.name}
					direction="row"
					spacing={2}
					alignItems="flex-start"
				>
					<Box
						sx={{
							borderRadius: "50%",
							bgcolor: "primary.main",
							color:"primary.contrastText",
							width: 40,
							height: 40,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						{item.icon}
					</Box>

					<Stack spacing={1}>
						<Typography variant="h6">{item.name}</Typography>
						{item.value.map((value) => (
							<Typography key={value}>{value}</Typography>
						))}
					</Stack>
				</Stack>
			))}
		</Stack>
	);
};

export default ContactUsInfo;
