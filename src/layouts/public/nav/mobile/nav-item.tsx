// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */

import { forwardRef } from "react";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { alpha, styled } from "@mui/material/styles";
import ListItemButton from "@mui/material/ListItemButton";

import { RouterLink } from "@/routes/components";

import Iconify from "@/components/iconify";

// ----------------------------------------------------------------------

const StyledNavItem = styled(ListItemButton, {
	shouldForwardProp: (prop) => prop !== "active",
})(({ open, active, theme }) => {
	const opened = open && !active;

	return {
		...theme.typography.body2,
		color: theme.palette.text.secondary,
		fontWeight: theme.typography.fontWeightMedium,
		height: 48,
		...(active && {
			color: theme.palette.primary.main,
			fontWeight: theme.typography.fontWeightSemiBold,
			backgroundColor: alpha(theme.palette.primary.main, 0.08),
			"&:hover": {
				backgroundColor: alpha(theme.palette.primary.main, 0.16),
			},
		}),
		...(opened && {
			backgroundColor: theme.palette.action.hover,
		}),
	};
});

// ----------------------------------------------------------------------

interface NavItemProps {
	title: string;
	path: string;
	icon?: React.ReactElement;
	open?: boolean;
	active?: boolean;
	hasChild?: boolean;
	externalLink?: boolean;
	subItem?: boolean;
	[key: string]: any;
}

export const NavItem = forwardRef(
	(
		{
			title,
			path,
			icon,
			open,
			active,
			hasChild,
			externalLink,
			...other
		}: NavItemProps,
		ref
	) => {
		const renderContent = (
			<StyledNavItem ref={ref} open={open} active={active} {...other}>
				<Box component="span" sx={{ mr: 2, display: "inline-flex" }}>
					{icon}
				</Box>

				<Box component="span" sx={{ flexGrow: 1 }}>
					{title}
				</Box>

				{hasChild && (
					<Iconify
						width={16}
						icon={
							open
								? "eva:arrow-ios-downward-fill"
								: "eva:arrow-ios-forward-fill"
						}
					/>
				)}
			</StyledNavItem>
		);

		if (hasChild) {
			return renderContent;
		}

		if (externalLink)
			return (
				<Link
					href={path}
					target="_blank"
					rel="noopener"
					color="inherit"
					underline="none"
				>
					{renderContent}
				</Link>
			);

		return (
			<Link component={RouterLink} href={path} color="inherit" underline="none">
				{renderContent}
			</Link>
		);
	}
);

NavItem.displayName = "NavItem";

