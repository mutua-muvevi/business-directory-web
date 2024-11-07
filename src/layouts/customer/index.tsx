import { ClientSideLayout } from "./client"

interface DashboardCustomerLayoutProps {
	children: React.ReactNode;
}

const DashboardCustomerLayout = ({ children }: DashboardCustomerLayoutProps) => {
	return (
		<>
			<ClientSideLayout>{children}</ClientSideLayout>
		</>
	);
};

export default DashboardCustomerLayout;
