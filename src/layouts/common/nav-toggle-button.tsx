// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */


import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

import { useResponsive } from "@/hooks/use-responsive";

import { bgBlur } from "@/theme/css";

import Iconify from "@/components/iconify";
import { useSettingsContext } from "@/components/settings";

import { NAV } from "../config-layout";

// ----------------------------------------------------------------------

interface NavToggleButtonProps {
	sx?: object;
}

const NavToggleButton = ({ sx, ...other } : NavToggleButtonProps) => {
	const theme = useTheme();

	const settings = useSettingsContext();

	const lgUp = useResponsive("up", "lg");

	if (!lgUp) {
		return null;
	}

	return (
		<IconButton
			size="small"
			onClick={() =>
				settings.onUpdate(
					"themeLayout",
					settings.themeLayout === "vertical" ? "mini" : "vertical"
				)
			}
			style={{
				padding: 0.5,
				top: 32,
				position: "fixed",
				left: NAV.W_VERTICAL - 12,
				zIndex: theme.zIndex.appBar + 1,
				border: `solid 1px ${theme.palette.divider}`,
				...bgBlur({ opacity: 0.48, color: theme.palette.background.default }),
				"&:hover": {
					bgcolor: "background.default",
				},
				...sx,
			}}
			{...other}
		>
			<Iconify
				width={16}
				icon={
					settings.themeLayout === "vertical"
						? "eva:arrow-ios-back-fill"
						: "eva:arrow-ios-forward-fill"
				}
			/>
		</IconButton>
	);
}

export default NavToggleButton