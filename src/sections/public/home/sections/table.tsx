// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { styled } from "@mui/material";

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
	border: "none",
	backgroundColor: theme.palette.background.neutral,
	width: "100%",
	borderRadius: "5",
	"& .MuiDataGrid-columnHeaders": {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
		fontSize: 16,
		py: 2,
		borderRadius: 0,
		"& .MuiDataGrid-columnHeader": {
			color: theme.palette.primary.contrastText,
			"&:focus, &:active": {
				color: theme.palette.primary.contrastText, // Apply color on focus and active states
			},
		},
	},
	"& .MuiDataGrid-virtualScrollerRenderZone": {
		"& .MuiDataGrid-row": {
			"&:nth-of-type(2n)": {
				backgroundColor: theme.palette.background.default,
			},
		},
	},
}));

const SearchTable = ({ data }) => {
	// Define columns dynamically, excluding ID and description, and in the desired order
	const columns: GridColDef[] = [
		{ field: "name", headerName: "Name", width: 150 },
		{ field: "email", headerName: "Email", width: 200 },
		{ field: "phone", headerName: "Phone", width: 150 },
		{
			field: "city",
			headerName: "City",
			width: 150,
			valueGetter: (params) => params.row.location?.city || "",
		},
		{
			field: "country",
			headerName: "Country",
			width: 150,
			valueGetter: (params) => params.row.location?.country || "",
		},
		{ field: "category", headerName: "Category", width: 150 },
		{ field: "priceRange", headerName: "Price Range", width: 150 },
		{
			field: "isVerified",
			headerName: "Verified",
			width: 100,
			valueGetter: (params) => (params.row.isVerified ? "Yes" : "No"),
		},
	];

	// Prepare rows
	const rows = data.map((item) => ({
		id: item._id, // `id` is required by DataGrid for unique row identification
		...item,
	}));

	const handleRowClick = (params) => {
		const filteredData = data.find((row) => row._id === params.row._id)
		// setSelectedRow(filteredData);
		console.log("P{ARAMS", params)
		console.log("Filtered data", filteredData)

		// TODO: call the function that fetches this particular business
		
	};

	return (
		<div style={{ height: "100%", width: "100%", borderRadius: "5px" }}>
			<StyledDataGrid
				rows={rows}
				columns={columns}
				disableSelectionOnClick
				getRowId={(row) => row._id}
				rowHeight={60}
				columnHeaderHeight={70}
				onRowClick={handleRowClick}
				pagination
			/>
		</div>
	);
};

export default SearchTable;
