import { Auth } from "aws-amplify";
import SocialSignIn from './SocialSignIn'
import Input from './Input'

export default function SignIn({
  onChange, setUiState
}) {
  return (
    <div>
      <p className="text-3xl font-black text-center">Sign in to your account</p>
      <SocialSignIn />
    </div>
  )
}