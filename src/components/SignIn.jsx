import React from 'react'

const SignUp = ({handleSubmit , getPassword , getUserName}) => {
  return (
    <form className='p-4 rounded-lg flex flex-col gap-3 items-center justify-center' onSubmit={handleSubmit}>
        <div>
            <h1 className="2xl">Log In Form</h1>
        </div>
        
        <input type='email' placeholder='email'  className='border border-slate-500 rounded-lg p-2'  onChange={getUserName}/>
        <input type='password' placeholder='password' className='border border-slate-500 rounded-lg p-2' onChange={getPassword}/>
        <button type='submit' className='bg-green-500 text-white w-full p-2 rounded-lg'>Login</button>
    </form>
  )
}

export default SignUp