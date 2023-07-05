import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext'

function SignUp() {

  const { signup } = useContext(AuthContext);
  
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(username, email, password);
  };
  return (
  
  <section class="relative flex flex-wrap lg:h-screen lg:items-center">
    <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
      <div class="mx-auto max-w-lg text-center">
        <h1 class="text-2xl font-bold sm:text-3xl">Get Started Today</h1>
  
      </div>
  
      <form onSubmit={handleSubmit} class="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <div>
          <label for="email" class="sr-only">Email</label>
  
          <div class="relative">
            <input
              type="email" onChange={(e) => setEmail(e.target.value)}
              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter email"
            />
            
          </div>
        </div>

        <div>
          <label for="username" class="sr-only">Username</label>
  
          <div class="relative">
            <input
              type="text" value={username}  onChange={(e) => setUsername(e.target.value)}
              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter username"
            />
          </div>
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
  
          <div class="relative">
            <input
              type="password"  value={password}  onChange={(e) => setPassword(e.target.value)}
              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter password"
            />
  
          </div>
        </div>

  
        <div class="flex items-center justify-between">
  
        <button 
        type="submit"
         class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Sign Up
        </button>

        </div>
      </form>
    </div>
  
    <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
      <img
        alt="Welcome"
        src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        class="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  </section>
  )
}

export default SignUp