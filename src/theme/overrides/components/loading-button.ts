import { ThemeTypes } from "@/theme/types";
import { loadingButtonClasses } from "@mui/lab/LoadingButton";

// ----------------------------------------------------------------------

export const loadingButton = (theme : ThemeTypes) => {
	return {
		MuiLoadingButton: {
			styleOverrides: {
				root: ({ ownerState }: { ownerState: { variant: string; size: string } }) => ({
					borderRadius: theme.shape.borderRadius / 2,
					...(ownerState.variant === "soft" && {
						[`& .${loadingButtonClasses.loadingIndicatorStart}`]: {
							left: 10,
						},
						[`& .${loadingButtonClasses.loadingIndicatorEnd}`]: {
							right: 14,
						},
						...(ownerState.size === "small" && {
							[`& .${loadingButtonClasses.loadingIndicatorStart}`]: {
								left: 10,
							},
							[`& .${loadingButtonClasses.loadingIndicatorEnd}`]: {
								right: 10,
							},
						}),
					}),
				}),
			},
		},
	};
};
