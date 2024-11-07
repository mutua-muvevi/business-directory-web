import { PublicClientSideLayout } from "./client";

interface MainLayoutProps {
	children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
	return <PublicClientSideLayout>{children}</PublicClientSideLayout>;
};

export default MainLayout;
