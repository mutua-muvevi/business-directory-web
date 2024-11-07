import Button from "@mui/material/Button";

import { RouterLink } from "@/routes/components";

import { PATH_AFTER_LOGIN } from "@/config-global";

// ----------------------------------------------------------------------

interface LoginButtonProps {
	sx?: object;
}

const LoginButton = ({ sx }: LoginButtonProps) => {
	return (
		<Button
			component={RouterLink}
			href={PATH_AFTER_LOGIN}
			variant="outlined"
			sx={{ mr: 1, ...sx }}
		>
			Login
		</Button>
	);
};

export default LoginButton;
