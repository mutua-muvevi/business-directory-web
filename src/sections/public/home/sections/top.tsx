// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Iconify from "@/components/iconify";
import {
	Stack,
	TextField,
	InputAdornment,
	Container,
	Button,
	Popover,
	Box,
	ButtonGroup,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import FilterForm from "./filter";



const HomeTop = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const [filters, setFilters] = useState({
		openNow: false,
		hasWebsite: false,
		verified: false,
	});

	const [searchQuery, setSearchQuery] = useState("");

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	// Handle search input changes
	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
	};

	// Send the search query and filters to the backend
	const handleSearchSubmit = async () => {
		const query = new URLSearchParams({
			search: searchQuery,
			openNow: String(filters.openNow),
			hasWebsite: String(filters.hasWebsite),
			verified: String(filters.verified),
		}).toString();

		try {
			console.log(query)
			// Assuming you have a proxy API setup in Next.js for backend calls
			const response = await axios.get(`/api/search?${query}`);
			console.log(response.data); // Handle the response (e.g., displaying results)
		} catch (error) {
			console.error("Error fetching search results:", error);
		}
	};

	return (
		<Stack>
			<Container maxWidth="xl">
				<Stack
					direction="row"
					justifyContent="center"
					alignItems="center"
					sx={{ mt: 10 }}
				>
					<TextField
						variant="outlined"
						placeholder="Enter the business name and press enter"
						size="medium"
						fullWidth
						value={searchQuery}
						onChange={handleSearchChange}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								handleSearchSubmit();
							}
						}}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<Iconify
										icon="eva:search-fill"
										sx={{ color: "text.disabled" }}
									/>
								</InputAdornment>
							),
						}}
					/>
					<ButtonGroup>
						<Button
							id="demo-customized-button"
							aria-controls={
								open ? "demo-customized-menu" : undefined
							}
							aria-haspopup="true"
							aria-expanded={open ? "true" : undefined}
							variant="contained"
							disableElevation
							onClick={handleClick}
							endIcon={
								<Iconify icon="eva:arrow-ios-downward-fill" />
							}
							size="large"
							color="warning"
							sx={{
								textTransform: "capitalize",
								borderRadius: 0.5,
								py: 3.4,
							}}
						>
							Filter
						</Button>
						<Button
							variant="contained"
							size="large"
							color="primary"
							startIcon={<Iconify icon="eva:search-fill" />}
							sx={{
								borderRadius: 0.5,
								py: 3.4,
							}}
							// onClick={handleSearchSubmit}
						>
							Search
						</Button>
					</ButtonGroup>
				</Stack>
			</Container>

			<Popover
				id="demo-customized-menu"
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
			>
				<Box sx={{ p: 2, width: 300 }}>
					
					
					
					<FilterForm handleSearchSubmit={handleSearchSubmit} setFilters={setFilters}/>

					
				</Box>
			</Popover>
		</Stack>
	);
};

export default HomeTop;
