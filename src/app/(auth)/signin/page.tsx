import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { OAuthSignIn } from "../_components/oauth-signin";

export default function SignInPage() {
  return (
    <div className="w-full max-w-lg">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Sign in</CardTitle>
          <CardDescription>
            Choose your preferred sign in method
          </CardDescription>
        </CardHeader>
        <CardContent>
          <OAuthSignIn />
        </CardContent>
      </Card>
    </div>
  );
}
