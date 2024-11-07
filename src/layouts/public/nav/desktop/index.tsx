// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */

import Stack from "@mui/material/Stack";

import NavList from "./nav-list";

// ----------------------------------------------------------------------

interface NavDesktopProps {
	data: any[];
}

const NavDesktop = ({ data }: NavDesktopProps) => {
	return (
		<Stack
			component="nav"
			direction="row"
			spacing={5}
			sx={{ mr: 2.5, height: 1 }}
		>
			{data.map((list) => (
				<NavList key={list.title} data={list} />
			))}
		</Stack>
	);
};

export default NavDesktop;
