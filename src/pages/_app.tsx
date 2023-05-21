import { type AppType } from "next/app";
import { ClerkProvider, SignIn } from '@clerk/nextjs'
import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {


  return (
    <ClerkProvider>
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      <Component {...pageProps} />
    </ClerkProvider>
  )

};

export default api.withTRPC(MyApp);
