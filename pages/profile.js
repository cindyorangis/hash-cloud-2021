import { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import '../configureAmplify'
import SignIn from '../components/SignIn'

const initialState = { email: '', password: '', authCode: '' }

export default function Profile() {
  const [uiState, setUiState] = useState(null)
  const [formState, setFormState] = useState(initialState)
  const [user, setUser] = useState(null)


  useEffect(() => {
    checkUser()
    async function checkUser() {
      try {
        const user = await Auth.currentAuthenticatedUser()
        setUser(user)
        setUiState('signedIn')
      } catch(err) {
        setUser(null)
        setUiState('signIn')
      }
    }
  }, [])

  function onChange(e) {
    setFormState({ 
      ...formState, 
      [e.target.name]: e.target.value 
    })
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
      {
        uiState === 'signedIn' && (
          <div>
            <p className="text-xl">Welcome, {user.attributes.email}</p>
            <button 
              className="text-white w-full mt-10 bg-pink-600 p-3 rounded"
              onClick={() => {
                Auth.signOut();
                setUiState('signIn');
                setUser(null)
              }}
            >
              Sign Out
            </button>
          </div>
        )
      }
    </div>
  )
}