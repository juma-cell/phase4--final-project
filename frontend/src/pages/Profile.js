import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import image1 from "../images/image1.png"

export default function Profile() 
{
  const {current_user} = useContext(AuthContext)

  return (
    <div>
    {
      current_user && current_user.email?
      <div>
            <a
  href="#"
  class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
>
  <span
    class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  ></span>

  <div class="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
        {current_user.email}
      </h3>

      <h3 class="mt-1 text-lg font-medium text-gray-600">{current_user.username}</h3>
    </div>

    <div class="hidden sm:block sm:shrink-0">
      <img
        alt="Paul Clapton"
        src= {image1}
        class="h-16 w-16 rounded-lg object-cover shadow-sm"
      />
    </div>
  </div>

  <div class="mt-4">
    
  </div>

  <dl class="mt-6 flex gap-4 sm:gap-6">
    <div class="flex flex-col-reverse">
      <dt class="text-sm font-medium text-gray-600">Created at</dt>
      <dd class="text-xs text-gray-500">Updated at</dd>
    </div>

    <div class="flex flex-col-reverse">
      <dt class="text-sm font-medium text-gray-600">{current_user.created_at}</dt>
      <dd class="text-xs text-gray-500">{current_user.updated_at}</dd>
    </div>
  </dl>
</a>
      </div>:
      <p className='text-red-900 text-center'>LOGIN TO VIEW THIS PAGE PLEASE</p>
      }
    </div>
  )
}
