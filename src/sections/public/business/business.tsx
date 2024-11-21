// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useScroll } from "framer-motion";

import ScrollProgress from "@/components/scroll-progress";
import MainLayout from "@/layouts/public";
import { Box } from "@mui/material";
import { businesses } from "../home/sections/info";
import BusinessBanner from "./banner";
import { SplashScreen } from "@/components/loading-screen";
import BusinessBody from "./body";

const BusinessView = ({ params }: { params: { businessId: string } }) => {
	const { scrollYProgress } = useScroll();
	console.log("params", params);

	const singleBusiness = businesses.find(
		(business) => business._id == params.businessId,
	);

	console.log(singleBusiness);

	return (
		<MainLayout>
			<ScrollProgress scrollYProgress={scrollYProgress} />
			<Box
				sx={{
					overflow: "hidden",
					position: "relative",
					bgcolor: "background.default",
					height: "auto",
				}}
			>
				{singleBusiness ? (
					<>
						<BusinessBanner
							name={singleBusiness?.name}
							phone={singleBusiness?.phone}
							logo={singleBusiness?.logo}
							email={singleBusiness?.email}
							location={singleBusiness?.location}
							isVerified={singleBusiness?.isVerified}
						/>
						<BusinessBody
							description={singleBusiness?.description}
							category={singleBusiness?.category}
							niche={singleBusiness?.niche}
							isVerified={singleBusiness?.isVerified}
							priceRange={singleBusiness?.priceRange}
							photos={singleBusiness?.photos}
							socialMedia={singleBusiness?.socialMedia}
							location={singleBusiness?.location}
							thumbnail={singleBusiness?.thumbnail}
						/>
					</>
				) : (
					<SplashScreen />
				)}
			</Box>
		</MainLayout>
	);
};

export default BusinessView;
