"use client";

import * as Yup from "yup";
import FormProvider, { RHFTextField } from "@/components/hook-form";
import { Alert, Box, Divider, IconButton, InputAdornment, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import Iconify from "@/components/iconify";
import Link from "next/link";

const Login = () => {
	const [errorMsg, setErrorMsg] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const LoginSchema = Yup.object().shape({
		email: Yup.string()
			.required("Email is required")
			.email("Email must be a valid email address"),
		password: Yup.string().required("Password is required"),
	});

	const defaultValues = {
		email: "",
		password: "",
	};

	const methods = useForm({
		defaultValues,
		resolver: yupResolver(LoginSchema),
	});

	const {
		reset,
		handleSubmit,
		formState: { isSubmitting },
	} = methods;

	const onSubmit = handleSubmit((data) => {
		try {
			console.log(data);
			reset();
		} catch (error) {
			setErrorMsg(error as string);
		}
	});

	return (
		<Stack direction="column" spacing={3}>
			{!!errorMsg && (
				<Alert severity="error" sx={{ m: 3 }}>
					{errorMsg}
				</Alert>
			)}

			<FormProvider methods={methods} onSubmit={onSubmit}>
				<Stack direction="column" spacing={3}>
					<Box>
						<Typography variant="h4">Login</Typography>
						<Divider sx={{ mt: 1.5 }} />
					</Box>

					<RHFTextField
						name="email"
						label="Email"
						variant="outlined"
						placeholder="myemail@me.com"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<Iconify
										icon="ic:twotone-alternate-email"
										width={18}
									/>
								</InputAdornment>
							),
						}}
					/>

					<RHFTextField
						name="password"
						label="Password"
						variant="outlined"
						placeholder="●●●●●●●●●"
						type={showPassword ? "text" : "password"}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<Iconify
										icon="vaadin:lock"
										width={18}
									/>
								</InputAdornment>
							),
							endAdornment: (
								<InputAdornment position="start">
									<IconButton
										onClick={() => setShowPassword(!showPassword)}
										edge="end"
									>
										<Iconify
											icon={
												showPassword
													? "eva:eye-off-fill"
													: "eva:eye-fill"
											}
										/>
									</IconButton>
								</InputAdornment>
							),
						}}
					/>

					<LoadingButton
						variant="contained"
						loading={isSubmitting}
						type="submit"
						color="primary"
						sx={{ p: 1.5 }}
					>
						Login
					</LoadingButton>
				</Stack>
			</FormProvider>

			<Stack direction="row">
				<Typography variant="body2">Don&apos;t have an account?</Typography>

				<Link href="/register" style={{textDecoration: "none", color: "inherit" }}>
					<Typography
						variant="body2"
						component="span"
						sx={{ ml: 1, color: "primary.main", cursor: "pointer" }}
					>
						Register
					</Typography>
				</Link>
			</Stack>
		</Stack>
	);
};

export default Login;
