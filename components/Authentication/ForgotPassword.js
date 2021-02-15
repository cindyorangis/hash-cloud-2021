import Input from './Input';

export default function ForgotPassword({ onChange, setUiState, forgotPassword }) {
  return (
    <div>
      <p className="text-3xl font-black text-center">Forgot Password? Start here.</p>
      <div className="mt-10">
        <label className="text-sm">Email</label>
        <Input onChange={onChange} name="email" />
      </div>
      <button className="text-white w-full mt-6 bg-indigo-600 p-3 rounded" onClick={forgotPassword}>
        Reset password
      </button>

      <button className="text-sm mt-6 text-indigo-600" onClick={() => setUiState('signIn')}>
        Cancel
      </button>
    </div>
  );
}
