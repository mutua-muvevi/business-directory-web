// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect, useCallback } from "react";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import { usePathname } from "@/routes/hooks";

import Logo from "@/components/logo";
// import SvgColor from "@/components/svg-color";
import Scrollbar from "@/components/scrollbar";

import NavList from "./nav-list";
import Iconify from "@/components/iconify";

// ----------------------------------------------------------------------

interface NavMobileProps {
	data: any[];
}

const NavMobile = ({ data }: NavMobileProps) => {
	const pathname = usePathname();

	const [openMenu, setOpenMenu] = useState(false);

	useEffect(() => {
		if (openMenu) {
			handleCloseMenu();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	const handleOpenMenu = useCallback(() => {
		setOpenMenu(true);
	}, []);

	const handleCloseMenu = useCallback(() => {
		setOpenMenu(false);
	}, []);

	return (
		<>
			<IconButton onClick={handleOpenMenu} sx={{ ml: 1 }}>
				<Iconify icon="mingcute:menu-fill" />
			</IconButton>

			<Drawer
				open={openMenu}
				onClose={handleCloseMenu}
				PaperProps={{
					sx: {
						pb: 5,
						width: 260,
					},
				}}
			>
				<Scrollbar>
					<Logo sx={{ mx: 2.5, my: 3 }} />

					{data.map((list) => (
						<NavList key={list.title} data={list} />
					))}
				</Scrollbar>
			</Drawer>
		</>
	);
};

export default NavMobile;
