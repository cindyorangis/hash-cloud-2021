import { Auth } from 'aws-amplify'
import Input from './Input'

export default function ConfirmSignUp({
  onChange, setUiState, confirmSignUp
}) {
  return (
    <div>
      <p className="text-3xl font-black text-center">Confirm your account</p>
      <div className="mt-10">
        <label className="text-sm">Confirmation Code</label>
        <Input onChange={onChange} name="authCode" />
      </div>
      <button 
        className="text-white w-full mt-6 bg-pink-600 p-3 rounded" 
        onClick={confirmSignUp}
      >
        Confirm Sign Up
      </button>
      
      <button
        className="text-sm mt-6 text-pink-600"
        onClick={() => setUiState('signIn')}  
      >
        Cancel
      </button>
    </div>
  )
}