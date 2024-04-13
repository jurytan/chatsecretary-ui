import { LoaderFunction, redirect } from "@remix-run/node";
import { getAuth } from "@clerk/remix/ssr.server";
import { createClerkClient } from '@clerk/remix/api.server';
 
export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
 
  if (!userId) {
    return redirect("/sign-in?redirect_url=" + args.request.url);
  }
 
  const user = await createClerkClient({secretKey: process.env.CLERK_SECRET_KEY}).users.getUser(userId);
  return { serialisedUser: JSON.stringify(user) };
};