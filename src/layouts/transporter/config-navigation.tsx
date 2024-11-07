import { useMemo } from "react";
import { paths } from "@/routes/paths";
import  { useTranslate } from "@/locales"

import Iconify from "@/components/iconify";


export const useNavData = () => {

	const { t } = useTranslate();

	const data = useMemo(
		() => [
			{
				subheader: "",
				items: [
					{
						title: t("navigation.side.transporter.home"),
						path: paths.transporter.root,
						icon: <Iconify icon="lets-icons:home-duotone" />
					},
					{
						title: t("navigation.side.transporter.vehicles"),
						path: paths.transporter.vehicles,
						icon: <Iconify icon="mdi:train-car" />
					},
					{
						title: t("navigation.side.transporter.shipment"),
						path: paths.transporter.shipment,
						icon: <Iconify icon="mdi:truck-check" />
					},
					{
						title: t("navigation.side.transporter.drivers"),
						path: paths.transporter.drivers,
						icon: <Iconify icon="healthicons:truck-driver" />
					},
					{
						title: t("navigation.side.transporter.businesses"),
						path: paths.transporter.businesses,
						icon: <Iconify icon="maki:commercial" />
					},
				]
			}
			// eslint-disable-next-line
		], [t]
	)

	return data
}