import React, { useState } from 'react'
import { account } from '../appwrite/config'
import SignUp from '../components/SignIn'

const LoginRegister = () => {

    const [userName, setuserName] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(false)
    const [error, setError] = useState('')

    const getPassword =(e)=>{
        setPassword(e.target.value)
    }
    const getUserName =(e)=>{  
        setuserName(e.target.value)
     }

     //submit function
     const handleSubmit = (e) =>{
        e.preventDefault()
        console.log({
            userName : userName,
            password : password
        })
        if(userName === '' || password === ''){
            setError('Enter all login credentials')
            return
        }
        try {

            account.createSession(userName, password).then(() => {
                setIsLogin(true)
            }).catch((error) => {
                setError('Invalid Credentials')
            })
            
        } catch (error) {
            console.log(error)
            
        }
     }

  return (
    <div className='min-w-1/2 w-auto bg-slate-200 p-5 rounded-lg flex flex-col items-center justify-center'>
        {
            isLogin? <div>
                User Logged In
            </div> :
            
            <div>
                <SignUp handleSubmit={handleSubmit} getUserName={getUserName} getPassword={getPassword} />
            </div>
        }
    </div>
  )
}

export default LoginRegister