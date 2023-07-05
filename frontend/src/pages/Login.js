import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import image3 from "../images/image3.png"
import { AuthContext } from '../context/AuthContext'

function Login() {
  const {login} = useContext(AuthContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const  handleSubmit = (e) =>{
      e.preventDefault()
      console.log(email+ "  "+password)
     
      login(email, password)


  }


  return (
   

<section class="relative flex flex-wrap lg:h-screen lg:items-center">
  <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div class="mx-auto max-w-lg text-center">
      <h1 class="text-2xl font-bold sm:text-3xl">Welcome Back!</h1>
    </div>

    <form onSubmit={handleSubmit} class="mx-auto mb-0 mt-8 max-w-md space-y-4">
      <div>
        <label for="email" class="sr-only">Email</label>

        <div class="relative">
        <input type="text" value={email} onChange={(e)=> setEmail(e.target.value) } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="email" required />

          <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
            
          </span>
        </div>
      </div>

      <div>
        <label for="password" class="sr-only">Password</label>

        <div class="relative">
        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value) } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="password" required />


    
        </div>
      </div>

      <div class="flex items-center justify-between">
        <p class="text-sm text-gray-500">
          No account?
          <Link to='/signup' class="underline" href="">Sign up</Link>
        </p>

        <button 
        type="submit"
         class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Login
        </button>

      </div>
    </form>
  </div>

  <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt="Welcome"
      src={image3}
      class="absolute inset-0 h-full w-full object-cover"
    />
  </div>
</section>
  )
}

export default Login