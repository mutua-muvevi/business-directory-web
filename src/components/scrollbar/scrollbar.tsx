import React, { memo, forwardRef } from "react";

import { StyledScrollbar, StyledRootScrollbar } from "./styles";

interface ScrollbarProps {
	children: React.ReactNode;
	sx?: object;
}

const Scrollbar = forwardRef(
	({ children, sx, ...other }: ScrollbarProps, ref) => {
		return (
			<StyledRootScrollbar>
				<StyledScrollbar
					scrollableNodeProps={{
						ref,
					}}
					clickOnTrack={false}
					sx={sx}
					{...other}
				>
					{children}
				</StyledScrollbar>
			</StyledRootScrollbar>
		);
	}
);

Scrollbar.displayName = "Scrollbar";

export default memo(Scrollbar);
