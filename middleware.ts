import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  ignoredRoutes: ["/favicon.ico", "/sign-in", "/not-found"],
  publicRoutes: ["/", '/logo.svg', "/api/uploadthing"],

});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};