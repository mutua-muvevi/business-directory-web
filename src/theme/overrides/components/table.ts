// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { alpha } from "@mui/material/styles";
import { tableRowClasses } from "@mui/material/TableRow";
import { tableCellClasses } from "@mui/material/TableCell";
import { ThemeTypes } from "@/theme/types";

// ----------------------------------------------------------------------

export const table = (theme: ThemeTypes) => {
	return {
		MuiTableContainer: {
			styleOverrides: {
				root: {
					position: "relative",
				},
			},
		},
		MuiTableRow: {
			styleOverrides: {
				root: {
					[`&.${tableRowClasses.selected}`]: {
						backgroundColor: alpha(theme.palette.primary.dark.toString(), 0.04),
						"&:hover": {
							backgroundColor: alpha(theme.palette.primary.dark.toString(), 0.08),
						},
					},
					"&:last-of-type": {
						[`& .${tableCellClasses.root}`]: {
							borderColor: "transparent",
						},
					},
				},
			},
		},
		MuiTableCell: {
			styleOverrides: {
				root: {
					borderBottomStyle: "dashed",
				},
				head: {
					fontSize: 14,
					color: theme.palette.text.secondary,
					fontWeight: theme.typography.fontWeightSemiBold,
					backgroundColor: theme.palette.background.neutral,
				},
				stickyHeader: {
					backgroundColor: theme.palette.background.paper,
					backgroundImage: `linear-gradient(to bottom, ${theme.palette.background.neutral} 0%, ${theme.palette.background.neutral} 100%)`,
				},
				paddingCheckbox: {
					paddingLeft: theme.spacing(1),
				},
			},
		},
		MuiTablePagination: {
			styleOverrides: {
				root: {
					width: "100%",
				},
				toolbar: {
					height: 64,
				},
				actions: {
					marginRight: 8,
				},
				select: {
					paddingLeft: 8,
					"&:focus": {
						borderRadius: theme.shape.borderRadius,
					},
				},
				selectIcon: {
					right: 4,
					width: 16,
					height: 16,
					top: "calc(50% - 8px)",
				},
			},
		},
	};
};