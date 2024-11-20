// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
	Box,
	Card,
	Container,
	Grid,
	Pagination,
	Stack,
	Tab,
	Tabs,
} from "@mui/material";
import React, { useState } from "react";
import { businesses } from "./info";
import BusinessCards from "./cards";
import { useResponsive } from "@/hooks/use-responsive";
import TabPanel from "@/components/tabpannel";
import SearchTable from "./table";

const tabProps = (index: number) => {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	};
};

const HomepageMain = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const isMdLower = useResponsive("down", "md");

	return (
		<Box sx={{ mt: 5, height: "90vh" }}>
			<Container maxWidth="xl">
				<Grid container spacing={2}>
					{/* Left Side: Grid with Cards */}
					<Grid
						item
						xs={12}
						md={6}
						lg={5}
						xl={5}
						sx={{
							height: "100%",
							padding: 0,
							// overflow: "hidden",
						}}
					>
						<Card
							sx={{
								height: isMdLower ? "auto" : "80vh",
								width: "100%",
								// position: isMdLower ? "relative" : "absolute",
							}}
						>
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31910.175176488086!2d36.895635399999996!3d-1.3122732000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1731854027110!5m2!1sen!2ske"
								loading="lazy"
								style={{ width: "100%", height: "100%" }}
							/>
						</Card>
					</Grid>

					{/* Right Side: Map */}
					<Grid
						item
						xs={12}
						md={6} // Adjusting grid size for medium and large screens
						lg={7}
						xl={7}
						sx={{ height: "100%" }}
					>
						<Stack
							direction="column"
							justifyContent="space-between"
						>
							<Stack
								sx={{
									height: isMdLower ? "90vh" : "80vh",
								}}
							>
								<Tabs
									orientation="horizontal"
									variant="scrollable"
									value={value}
									onChange={handleChange}
									aria-label="Vertical tabs example"
									sx={{
										borderRight: 0,
									}}
								>
									<Tab label="Cards" {...tabProps(0)} />
									<Tab label="Table" {...tabProps(1)} />
								</Tabs>

								<TabPanel value={value} index={0}>
									<Stack direction="column" spacing={2}>
										<Grid container spacing={2}>
											{businesses.map((business) => (
												<Grid
													item
													xs={12}
													sm={6} // Two cards per row on small screens
													md={6} // Three cards per row on medium and larger screens
													xl={4}
													key={business._id}
												>
													<BusinessCards
														business={business}
													/>
												</Grid>
											))}
										</Grid>
									</Stack>
								</TabPanel>

								<TabPanel value={value} index={1}>
									<SearchTable data={businesses}/>
								</TabPanel>

								<Pagination
									count={10}
									color="primary"
									variant="rounded"
									shape="rounded"
									sx={{ pt: 2, position: "relative" }}
								/>
							</Stack>
						</Stack>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default HomepageMain;
