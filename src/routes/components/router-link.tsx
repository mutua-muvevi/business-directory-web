/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { forwardRef } from "react";

// ----------------------------------------------------------------------

const RouterLink = forwardRef(({ ...other } : any, ref) => (
	<Link ref={ref} {...other} />
));

RouterLink.displayName = "RouterLink";

export default RouterLink;
