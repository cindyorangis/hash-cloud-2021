import { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import '../configureAmplify'
import SignIn from '../components/SignIn'

const initialState = { email: '', password: '', authCode: '' }

export default function Profile() {
  const [uiState, setUiState] = useState(null)
  const [formState, setFormState] = useState(initialState)

  useEffect(() => {
    checkUser()
    async function checkUser() {
      const user = await Auth.currentAuthenticatedUser()
      console.log({ user })
    }
  }, [])

  function onChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  return (
    <div>
      {
        uiState === 'signIn' && (
          <SignIn 
            onChange={onChange} 
            setUiState={setUiState}
          />
        )
      }
    </div>
  )
}