"use client";

import Iconify from "@/components/iconify";
import { InputAdornment, TextField } from "@mui/material";

const Search = () => {
	return (
		<div>
			<TextField
				fullWidth
				variant="filled"
				placeholder="Search..."
				size="small"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<Iconify icon="eva:search-fill" sx={{ color: "text.disabled" }} />
						</InputAdornment>
					),
				}}
			/>
		</div>
	)
}

export default Search