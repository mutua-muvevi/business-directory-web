import { ClientSideLayout } from "./client"; // Import client-side component

interface DashboardBusinessLayoutProps {
	children: React.ReactNode;
}

const DashboardBusinessLayout = ({ children }: DashboardBusinessLayoutProps) => {
	return (
		<>
			<ClientSideLayout>{children}</ClientSideLayout>
		</>
	);
};

export default DashboardBusinessLayout;
