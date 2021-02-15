import { Auth } from 'aws-amplify';
import Input from './Input';

export default function SignUp({ onChange, setUiState, signUp }) {
  return (
    <div>
      <p className="text-3xl font-black text-center">Sign up for an account</p>
      <div className="mt-10">
        <label className="text-sm">Email</label>
        <Input onChange={onChange} name="email" />
      </div>
      <div className="mt-4">
        <label className="text-sm">Password</label>
        <Input onChange={onChange} name="password" type="password" />
      </div>
      <button className="text-white w-full mt-6 bg-indigo-600 p-3 rounded" onClick={signUp}>
        Sign Up
      </button>

      <p className="mt-12 text-sm font-light">
        Have an account? &nbsp;
        <span
          className="cursor-pointer text-indigo-600"
          onClick={() => setUiState('signIn')}
          role="button"
        >
          Sign Up
        </span>
      </p>
    </div>
  );
}
