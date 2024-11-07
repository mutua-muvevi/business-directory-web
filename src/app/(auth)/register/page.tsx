/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as Yup from "yup";
import FormProvider, { RHFSelect, RHFTextField } from "@/components/hook-form";
import {
	Alert,
	Box,
	Divider,
	IconButton,
	InputAdornment,
	Stack,
	Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import Iconify from "@/components/iconify";
import { countries } from "@/assets/data";
import { registerUser } from "@/appwrite/init";

//------------------------------------------------------------

interface CustomError {
	message: string;
}

const RegisterSchema = Yup.object().shape({
	username: Yup.string().required("Username is required"),
	email: Yup.string()
		.email("Email must be a valid email address")
		.required("Email is required"),
	country: Yup.string().required("Country is required"),
	password: Yup.string().required("Password is required"),
	role: Yup.string()
		.oneOf(["admin", "user", ])
		.required("Role is required"),
});

const defaultValues = {
	username: "",
	email: "",
	password: "",
	role: "user" as const,
	country: "",
};

const Register = () => {
	const [errorMsg, setErrorMsg] = useState<CustomError | null>(null);
	const [showPassword, setShowPassword] = useState(false);

	const methods = useForm({
		defaultValues,
		resolver: yupResolver(RegisterSchema),
	});

	const {
		reset,
		handleSubmit,
		formState: { isSubmitting },
	} = methods;

	const onSubmit = handleSubmit(async (data) => {
		try {
			const { username, email, password, role, country } = data;

			await registerUser({username, email, password, role, country});
			
			reset();
		} catch (error : any) {
			setErrorMsg(error);
			console.log(error)
		}
	});

	return (
		<>
			{!!errorMsg && (
				<Alert severity="error" sx={{ my: 3 }}>
					{errorMsg?.message}
				</Alert>
			)}

			<FormProvider methods={methods} onSubmit={onSubmit}>
				<Stack direction="column" spacing={3}>
					<Box>
						<Typography variant="h4">Register</Typography>
						<Divider sx={{ mt: 1.5 }} />
					</Box>

					<RHFTextField
						name="username"
						label="Username"
						variant="outlined"
						placeholder="johndoe"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<Iconify
										icon="tabler:user-filled"
										width={18}
									/>
								</InputAdornment>
							),
						}}
					/>

					<RHFTextField
						name="email"
						label="Email"
						variant="outlined"
						placeholder="johndoe@me.com"
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

					{/* <RHFSelect
						name="role"
						label="Role"
						options={selectOptions}
						placeholder="Select role"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<Iconify
										icon="eos-icons:role-binding"
										width={18}
									/>
								</InputAdornment>
							),
						}}
						/> */}

					<RHFSelect
						name="country"
						label="Country"
						options={countries}
						placeholder="Select your country"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<Iconify
										icon="gis:world-map-alt-o"
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
									<Iconify icon="vaadin:lock" width={18} />
								</InputAdornment>
							),
							endAdornment: (
								<InputAdornment position="start">
									<IconButton
										onClick={() =>
											setShowPassword(!showPassword)
										}
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
						Register
					</LoadingButton>
				</Stack>
			</FormProvider>
		</>
	);
};

export default Register;
