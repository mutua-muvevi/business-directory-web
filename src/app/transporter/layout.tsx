// import { AuthGuard } from "src/auth/guard";
import DashboardLayout from "@/layouts/transporter";

// ----------------------------------------------------------------------

interface DashboardLayoutProps {
	children: React.ReactNode;
}
const Layout = ({ children } : DashboardLayoutProps) => {
	return (
		// <AuthGuard>
			<DashboardLayout>{children}</DashboardLayout>
		// </AuthGuard>
	);
}

export default Layout
