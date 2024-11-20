import {
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	InputLabel,
	MenuItem,
	Select,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import React, { useState } from "react";

type SearchSubmitHandler = () => void;

const categories = ["tech", "logistics", "hotel and restaurants", "retail"];

const FilterForm = ({
	handleSearchSubmit,
}: {
	handleSearchSubmit: SearchSubmitHandler;
}) => {
	const [filters, setFilters] = useState({
		openNow: false,
		hasWebsite: false,
		isVerified: false,
		location: "",
		category: "",
		priceRange: "",
		reviews: "",
	});

	// Handle filter state changes
	const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFilters({
			...filters,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<Stack direction="column" spacing={2}>
			<Typography variant="h6" gutterBottom>
				Filters
			</Typography>
			<FormControlLabel
				control={
					<Checkbox
						checked={filters.openNow}
						onChange={handleFilterChange}
						name="openNow"
					/>
				}
				label="Open Now"
			/>
			<FormControlLabel
				control={
					<Checkbox
						checked={filters.hasWebsite}
						onChange={handleFilterChange}
						name="hasWebsite"
					/>
				}
				label="Has Website?"
			/>
			<FormControlLabel
				control={
					<Checkbox
						checked={filters.isVerified}
						onChange={handleFilterChange}
						name="isVerified"
					/>
				}
				label="Verified Businesses"
			/>
			<TextField
				variant="outlined"
				size="small"
				value={filters.location}
				placeholder="Filter by location"
				fullWidth
			/>

			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Category</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={filters.category}
					label="Categories"
					size="small"
					sx={{
						display: "flex",
								alignItems:"center"
					}}
					// onChange={handleChange}
				>
					{categories.map((category) => (
						<MenuItem
							key={category}
							value={category}
							sx={{
								textTransform: "capitalize",
								borderRadius: 0.5,
							}}
							dense
						>
							{category}
						</MenuItem>
					))}
				</Select>
			</FormControl>

			<Button
				variant="contained"
				sx={{ mt: 2, textTransform: "capitalize" }}
				onClick={handleSearchSubmit}
			>
				Apply Filters
			</Button>
		</Stack>
	);
};

export default FilterForm;
