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
						title: t("navigation.side.driver.home"),
						path: paths.driver.root,
						icon: <Iconify icon="lets-icons:home-duotone" />
					},
					{
						title: t("navigation.side.driver.routes"),
						path: paths.driver.routes,
						icon: <Iconify icon="gis:route" />
					},
				]
			}
			// eslint-disable-next-line
		], [t]
	)

	return data
}