import MainLayout from "@/layouts/public";
import React from "react";

interface PagesLayoutProps {
	children: React.ReactNode
}

const PagesLayout = ({ children } : PagesLayoutProps) => {
  return (
	<MainLayout>
		{children}
	</MainLayout>
  )
}

export default PagesLayout