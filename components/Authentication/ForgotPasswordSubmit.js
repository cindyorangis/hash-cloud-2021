import Input from './Input';

export default function ForgotPasswordSubmit({ onChange, forgotPasswordSubmit }) {
  return (
    <div>
      <p className="text-3xl font-black text-center">Confirm new password</p>
      <div className="mt-10">
        <label className="text-sm">Confirmation code</label>
        <Input onChange={onChange} name="authCode" />
      </div>

      <div className="mt-10">
        <label className="text-sm">New password</label>
        <Input type="password" onChange={onChange} name="password" />
      </div>
      <button
        className="text-white w-full mt-6 bg-indigo-600 p-3 rounded"
        onClick={forgotPasswordSubmit}
      >
        Submit new password
      </button>
    </div>
  );
}
