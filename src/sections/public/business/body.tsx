/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Iconify from "@/components/iconify";
import {
	Container,
	Grid,
	ImageList,
	ImageListItem,
	Stack,
	Typography,
	Avatar,
	Rating,
	Card,
	CardContent,
} from "@mui/material";
import Link from "next/link";

// Hardcoded reviews array
const reviews = [
	{
		name: "Alice Johnson",
		profilePic: "https://via.placeholder.com/150",
		rating: 4.5,
		reviewText:
			"Great service! The staff was friendly and the process was smooth. Highly recommend!",
	},
	{
		name: "Bob Smith",
		profilePic: "https://via.placeholder.com/150",
		rating: 5,
		reviewText: "Fantastic experience! Everything was perfect.",
	},
	{
		name: "Charlie Davis",
		profilePic: "https://via.placeholder.com/150",
		rating: 4,
		reviewText:
			"Good service overall, but the waiting time could be improved.",
	},
];

type BusinessBodyProps = {
	description: {
		paragraphs?: string[];
		list?: {
			title: string;
			items: string[];
		};
	};
	category: string;
	niche: string;
	isVerified: boolean;
	priceRange: string;
	location: {
		city: string;
		country: string;
		coordinates: number[];
	};
	socialMedia: {
		name: string;
		link: string;
	};
	photos: string[];
	thumbnail: string;
};

const BusinessBody: React.FC<BusinessBodyProps> = ({
	description,
	category,
	niche,
	isVerified,
	priceRange,
	location,
	socialMedia,
	photos,
	thumbnail,
}) => {
	const leftSideItems = [
		{
			icon: <Iconify icon="dashicons:category" width={20} />,
			value: category,
			label: "Category",
		},
		{
			icon: <Iconify icon="uim:briefcase" width={20} />,
			value: niche,
			label: "Niche",
		},
		{
			icon: <Iconify icon="solar:tag-price-bold-duotone" width={20} />,
			value: priceRange,
			label: "Price range",
		},
	];

	const sortedSocialMedia = Array.isArray(socialMedia)
		? socialMedia.map((social) => {
				switch (social.name) {
					case "facebook":
						social.icon = (
							<Iconify
								icon="eva:facebook-fill"
								width={20}
								sx={{ color: "#1877F2" }}
							/>
						);
						break;

					case "twitter":
						social.icon = (
							<Iconify
								icon="prime:twitter"
								width={20}
								sx={{ color: "#000000" }}
							/>
						);
						break;

					case "instagram":
						social.icon = (
							<Iconify
								icon="basil:instagram-solid"
								width={20}
								sx={{ color: "#d62976" }}
							/>
						);
						break;

					case "linkedin":
						social.icon = (
							<Iconify
								icon="eva:linkedin-fill"
								width={20}
								sx={{ color: "#0077B5" }}
							/>
						);
						break;

					default:
						break;
				}
				return social; // Make sure to return the modified social object
		  })
		: socialMedia;

	return (
		<Stack direction="column">
			<Container maxWidth="xl" sx={{ py: 5, mt: 3 }}>
				<Grid container spacing={4}>
					<Grid item xs={12} md={6} lg={7.5} xl={8}>
						{description && (
							<Stack direction="column" spacing={3}>
								{/* Description Section */}
								{description.paragraphs &&
									description.paragraphs.map(
										(paragraph, index) => (
											<Typography
												key={index}
												variant="body1"
												textAlign="justify"
												color="text.secondary"
											>
												{paragraph}
											</Typography>
										),
									)}

								{/* List Section */}
								{description.list && (
									<Stack direction="column" spacing={2}>
										{description.list.title && (
											<Typography variant="subtitle1">
												{description.list.title}
											</Typography>
										)}

										<Stack direction="column" spacing={1}>
											{description.list.items.map(
												(item, index) => (
													<Stack
														direction="row"
														spacing={2}
														key={index}
													>
														<Iconify
															icon="solar:check-read-linear"
															width={16}
														/>
														<Typography
															variant="body1"
															color="text.secondary"
														>
															{item}
														</Typography>
													</Stack>
												),
											)}
										</Stack>
									</Stack>
								)}

								{/* Photos Section */}
								{photos && photos.length > 0 && (
									<Stack direction="column" spacing={2}>
										<Typography variant="subtitle1">
											Business photos
										</Typography>

										<ImageList
											variant="masonry"
											cols={3} // Adjust for the number of columns in the masonry layout
											gap={8}
										>
											{photos.map((photo, index) => (
												<ImageListItem key={index}>
													<img
														src={`${photo}?w=248&fit=crop&auto=format`}
														srcSet={`${photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
														alt={`Photo ${
															index + 1
														}`}
														loading="lazy"
														style={{
															borderRadius: "5px",
														}}
													/>
												</ImageListItem>
											))}
										</ImageList>
									</Stack>
								)}

								{/* Reviews Section */}
								{reviews && reviews.length > 0 && (
									<Stack
										direction="column"
										spacing={2}
										mt={4}
									>
										<Typography variant="subtitle1">
											Reviews
										</Typography>

										{reviews.map((review, index) => (
											<Stack
												key={index}
												direction="row"
												spacing={2}
												alignItems="flex-start"
												sx={{
													p: 2,
													border: "1px solid",
													borderColor: "divider",
													borderRadius: "5px",
												}}
											>
												<Avatar
													src={review.profilePic}
													alt={review.name}
													sx={{
														width: 56,
														height: 56,
													}}
													variant="rounded"
												/>
												<Stack
													direction="column"
													spacing={0.5}
												>
													<Typography variant="subtitle2">
														{review.name}
													</Typography>
													<Rating
														value={review.rating}
														precision={0.5}
														readOnly
													/>
													<Typography
														variant="body2"
														color="text.secondary"
													>
														{review.reviewText}
													</Typography>
												</Stack>
											</Stack>
										))}
									</Stack>
								)}

								{/* Map Section
								<Box mt={4}>
									<Typography variant="subtitle1">
										Location
									</Typography>
									<LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
										<GoogleMap
											mapContainerStyle={containerStyle}
											center={markerPosition}
											zoom={13}
										>
											<Marker
												position={markerPosition}
												onClick={() =>
													setShowInfo(true)
												}
											/>
											{showInfo && (
												<InfoWindow
													position={markerPosition}
													onCloseClick={() =>
														setShowInfo(false)
													}
												>
													<div>
														{location.city},{" "}
														{location.country}
													</div>
												</InfoWindow>
											)}
										</GoogleMap>
									</LoadScript>
								</Box> */}

								<iframe
									src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31910.175176488086!2d36.895635399999996!3d-1.3122732000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1731854027110!5m2!1sen!2ske"
									loading="lazy"
									style={{
										width: "100%",
										height: "30vh",
										borderRadius: "5px",
										marginTop: "20px",
									}}
								/>
							</Stack>
						)}
					</Grid>
					<Grid item xs={12} md={6} lg={4.5} xl={4}>
						<Stack direction="column" spacing={3}>
							<Card sx={{ borderRadius: "5px" }}>
								<CardContent>
									<Stack direction="column" spacing={2}>
										<Typography variant="subtitle1">
											More details
										</Typography>

										{leftSideItems.map((el, i) => (
											<Stack
												key={i}
												direction="row"
												spacing={2}
												alignItems="flex-start"
											>
												{el.icon}

												<Stack
													direction="column"
													spacing={1}
												>
													<Typography
														variant="subtitle2"
														color="text.primary"
													>
														{el.label}
													</Typography>
													<Typography
														variant="body1"
														color="text.secondary"
													>
														{el.value}
													</Typography>
												</Stack>
											</Stack>
										))}
									</Stack>
								</CardContent>
							</Card>

							{sortedSocialMedia &&
								sortedSocialMedia.length > 0 && (
									<Card sx={{ borderRadius: "5px" }}>
										<CardContent>
											<Stack
												direction="column"
												spacing={2}
											>
												<Typography variant="subtitle1">
													Social Media
												</Typography>

												<Stack
													direction="row"
													spacing={2}
												>
													{sortedSocialMedia?.map(
														(el, i) => (
															<Link
																href={el.link}
																target="_blank"
																key={i}
																style={{
																	textDecoration:
																		"none",
																	color: "inherit",
																}}
															>
																{el.icon}
															</Link>
														),
													)}
												</Stack>
											</Stack>
										</CardContent>
									</Card>
								)}
						</Stack>
					</Grid>
				</Grid>
			</Container>
		</Stack>
	);
};

export default BusinessBody;
