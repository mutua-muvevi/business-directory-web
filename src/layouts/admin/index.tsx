import { ClientSideLayout } from "./client"

interface DashboardAdminLayoutProps {
	children: React.ReactNode;
}

const DashboardAdminLayout = ({ children }: DashboardAdminLayoutProps) => {
	return (
		<>
			<ClientSideLayout>{children}</ClientSideLayout>
		</>
	);
};

export default DashboardAdminLayout;
