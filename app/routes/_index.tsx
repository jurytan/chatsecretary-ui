// import type { MetaFunction } from "@remix-run/node";

// export const meta: MetaFunction = () => {
//   return [
//     { title: "New Remix App" },
//     { name: "description", content: "Welcome to Remix!" },
//   ];
// };

// export default function Index() {
//   return (
//     <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
//       <h1>Welcome to Remix</h1>
//       <ul>
//         <li>
//           <a
//             target="_blank"
//             href="https://remix.run/tutorials/blog"
//             rel="noreferrer"
//           >
//             15m Quickstart Blog Tutorial
//           </a>
//         </li>
//         <li>
//           <a
//             target="_blank"
//             href="https://remix.run/tutorials/jokes"
//             rel="noreferrer"
//           >
//             Deep Dive Jokes App Tutorial
//           </a>
//         </li>
//         <li>
//           <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
//             Remix Docs
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// }


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