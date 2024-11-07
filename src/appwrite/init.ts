/* eslint-disable @typescript-eslint/no-explicit-any */
import { Account, Avatars, Client, Databases, ID } from "appwrite";
import { registerTypes, signinTypes } from "./types";

export const appwriteConfig = {
	endpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "",
	project: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "",

	databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "",
	userCollectionId: process.env.NEXT_PUBLIC_APPWRITE_USER_COLLECTION_ID || "",

	storageId: process.env.NEXT_PUBLIC_APPWRITE_STORAGE_ID || "",
};

const client = new Client();

client
	.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "")
	.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "");

export const account = new Account(client);
export const databases = new Databases(client);
export const avatars = new Avatars(client);

// register user
export const registerUser = async ({
	username,
	email,
	password,
	role,
	country,
}: registerTypes) => {
	try {
		const newAccount = await account.create(
			ID.unique(),
			email,
			password,
			username,
		);

		if (!newAccount) throw new Error("User not created");
		console.log("newAccount", newAccount);

		const avatarUrl = avatars.getInitials(username);

		// Generate document ID and check it
		const documentId = ID.unique();
		console.log("Generated Document ID:", documentId);

		const newUser = await databases.createDocument(
			appwriteConfig.databaseId,
			appwriteConfig.userCollectionId,
			ID.unique(),
			{
				accountId: newAccount.$id,
				avatar: avatarUrl,
				email,
				username,
				role,
				country,
			},
		);

		const session = await signIn({ email, password });
		console.log("Sign-in Session:", session);

		return newUser;
	} catch (error: any) {
		console.error("Database Error:", error);
		throw error;
	}
};

// Sign In
export const signIn = async ({ email, password }: signinTypes) => {
	try {
		console.log("Sign-in Parameters:", { email, password });

		const session = await account.createEmailPasswordSession(
			email,
			password,
		);
		console.log("Session Created:", session);
		return session;
	} catch (error: any) {
		console.error("Sign-in Error:", error.message);
		throw error;
	}
};
