// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */

import Iconify from "@/components/iconify";
import {
	Card,
	CardActionArea,
	CardContent,
	Stack,
	Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BusinessProps {
	name: string;
}

const BusinessCards = ({ business }: BusinessProps) => {
	return (
		<Card sx={{ height: "100%" }}>
			<CardActionArea>
				<Link href={`/business/${business._id}`} style={{textDecoration: "none", color: "inherit" }}>
					<CardContent>
						<Stack direction="column" spacing={2}>
							<Stack
								direction="column"
								justifyContent={"space-between"}
								spacing={2}
								alignItems={"flex-start"}
							>
								<Image
									src={business.logo}
									alt={business.name}
									width={50}
									height={50}
									style={{
										borderRadius: "5px",
									}}
								/>

								<Stack direction="column">
									<Typography
										variant="subtitle1"
										sx={{ fontWeight: "bold" }}
									>
										{business.name}
									</Typography>

									<Typography
										variant="body2"
										color="text.secondary"
									>
										{business.category}
									</Typography>
								</Stack>

								<Stack
									direction="row"
									spacing={3}
									alignItems={"center"}
								>
									<Stack
										direction="row"
										spacing={1}
										alignItems={"center"}
									>
										<Iconify
											icon="duo-icons:location"
											width={16}
										/>

										<Typography variant="body2">
											{business?.location?.city},{" "}
											{business?.location?.country}
										</Typography>
									</Stack>
									{business.isVerified && (
										<Stack
											direction="row"
											spacing={1}
											alignItems={"center"}
										>
											<Iconify
												icon="material-symbols:verified"
												width={16}
											/>
											<Typography variant="body2">
												verified
											</Typography>
										</Stack>
									)}
								</Stack>
								<Stack
									direction="row"
									spacing={1}
									alignItems={"center"}
								>
									<Iconify
										icon="solar:tag-price-bold-duotone"
										width={16}
									/>
									<Typography variant="body2">
										Price range : {business.priceRange}
									</Typography>
								</Stack>

								<Stack
									direction="row"
									spacing={1}
									alignItems={"center"}
								>
									<Iconify icon="ic:baseline-email" width={16} />
									<Typography variant="body2">
										{business.email}
									</Typography>
								</Stack>
								<Stack
									direction="row"
									spacing={1}
									alignItems={"center"}
								>
									<Iconify
										icon="lets-icons:phone-duotone"
										width={16}
									/>
									<Typography variant="body2">
										{business.phone}
									</Typography>
								</Stack>
							</Stack>
						</Stack>
					</CardContent>
				</Link>
			</CardActionArea>
		</Card>
	);
};

export default BusinessCards;
