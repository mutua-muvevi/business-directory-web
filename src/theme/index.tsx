// eslint-disable-next-line @typescript-eslint/ban-ts-comment
"use client";

import React, { useMemo } from "react";
import merge from "lodash/merge";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

import { useLocales } from "@/locales";

import { useSettingsContext } from "@/components/settings";

// system
import { palette } from "./palette";
import { shadows } from "./shadows";
import { typography } from "./typography";
// options
import RTL from "./options/right-to-left";
import { customShadows } from "./custom-shadows";
import { componentsOverrides } from "./overrides";
import { createPresets } from "./options/presets";
import { createContrast } from "./options/contrast";
import NextAppDirEmotionCacheProvider from "./next-emotion-cache";

// ----------------------------------------------------------------------

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const { currentLang } = useLocales();

	const settings = useSettingsContext();

	const presets = createPresets(settings.themeColorPresets);

	const contrast = createContrast(settings.themeContrast, settings.themeMode);

	const memoizedValue : object = useMemo(
		() => ({
			palette: {
				...palette(settings.themeMode),
				...presets.palette,
				...contrast.palette,
			},
			customShadows: {
				...customShadows(settings.themeMode),
				...presets.customShadows,
			},
			direction: settings.themeDirection,
			shadows: shadows(settings.themeMode) as string[],
			shape: { borderRadius: 8 },
			typography,
		}),
		[settings.themeMode, settings.themeDirection, presets.palette, presets.customShadows, contrast.palette],
	);

	const theme = createTheme(memoizedValue);


	theme.components = merge(componentsOverrides(theme), contrast.components);

	const themeWithLocale = useMemo(() => createTheme(theme, currentLang.systemValue), [currentLang.systemValue, theme]);

	return (
		<NextAppDirEmotionCacheProvider options={{ key: "css" }}>
			<MuiThemeProvider theme={themeWithLocale}>
				<RTL themeDirection={settings.themeDirection}>
					<CssBaseline />
					{children}
				</RTL>
			</MuiThemeProvider>
		</NextAppDirEmotionCacheProvider>
	);
}

export default ThemeProvider