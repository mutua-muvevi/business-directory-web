import { alpha } from "@mui/material/styles";
import { ratingClasses } from "@mui/material/Rating";
import { svgIconClasses } from "@mui/material/SvgIcon";
import { ThemeTypes } from "@/theme/types";

// ----------------------------------------------------------------------

export const rating = (theme: ThemeTypes) => {
	return {
		MuiRating: {
			styleOverrides: {
				root: {
					[`&.${ratingClasses.disabled}`]: {
						opacity: 0.48,
					},
				},
				iconEmpty: {
					color: alpha(theme.palette.grey[500].toString(), 0.48),
				},
				sizeSmall: {
					[`& .${svgIconClasses.root}`]: {
						width: 20,
						height: 20,
					},
				},
				sizeMedium: {
					[`& .${svgIconClasses.root}`]: {
						width: 24,
						height: 24,
					},
				},
				sizeLarge: {
					[`& .${svgIconClasses.root}`]: {
						width: 28,
						height: 28,
					},
				},
			},
		},
	};
};