"use client";

import { usePathname } from "next/navigation";

// ----------------------------------------------------------------------

export const useActiveLink = (path: string, deep = true) => {
	const pathname = usePathname();

	const checkPath = path.startsWith("#");

	const currentPath = path === "/" ? "/" : `${path}/`;

	const normalActive = !checkPath && pathname === currentPath;

	const deepActive = !checkPath && pathname.includes(currentPath);

	return deep ? deepActive : normalActive;
};
