// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */

import Box from "@mui/material/Box";

// ----------------------------------------------------------------------

type Props = {
	sx?: object;
	[key: string]: any;
};

const HeaderShadow = ({ sx, ...other }: Props) => {
	return (
		<Box
			sx={{
				left: 0,
				right: 0,
				bottom: 0,
				m: "auto",
				height: 24,
				zIndex: -1,
				opacity: 0.48,
				borderRadius: "50%",
				position: "absolute",
				width: `calc(100% - 48px)`,
				boxShadow: (theme) => theme.customShadows.z8,
				...sx,
			}}
			{...other}
		/>
	);
};

export default HeaderShadow;
