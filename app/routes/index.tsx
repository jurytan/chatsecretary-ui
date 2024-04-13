import { UserButton } from "@clerk/remix";
import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunction, redirect } from "@remix-run/node";
 

export const loader: LoaderFunction = async (args) => {
    // Use getAuth to retrieve user data
    const { userId, sessionId, getToken } = await getAuth(args);
   
    // If there is no userId, then redirect to sign-in route
    if (!userId) {
      return redirect("/sign-in?redirect_url=" + args.request.url);
    }
   
    // Use the userId to fetch data from your database
    // const posts = await mockGetPosts(userId);
   
    return {};
  };
 
export default function Index() {
  return (
    <div>
        <h1>Index route</h1>
        <p>You are signed in!</p>
        <UserButton afterSignOutUrl="/"/>
    </div>
  );
}