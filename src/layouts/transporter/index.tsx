import { ClientSideLayout } from "./client"

interface DashboardDriverLayoutProps {
	children: React.ReactNode;
}

const DashboardDriverLayout = ({ children }: DashboardDriverLayoutProps) => {
	return (
		<>
			<ClientSideLayout>{children}</ClientSideLayout>
		</>
	);
};

export default DashboardDriverLayout;
