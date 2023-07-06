import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { DiscussContext } from '../context/DiscussContext'

export default function ApproveDiscuss() {
  const { current_user } = useContext(AuthContext)
  const { discusses, approveDiscuss } = useContext(DiscussContext)

  return (
    <div>
      {current_user && current_user.is_admin ? (
        <div>
          <h1>Approve Discuss</h1>
          <div className="">
            {discusses &&
              discusses.map((discuss) => (
                !discuss.is_approved && (
                  <div key={discuss.id} className="bg-gray-300">
                    <div className='border flex mb-5'>
                      <img class="h-[20vh] max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
                      <div className='p-3'>
                        <h4 className='font-bold text-2xl'>{discuss.title}</h4>
                        <p>Posted by {discuss.user.username}</p>
                        <button onClick={() => approveDiscuss(discuss.id)} className='bg-green-600 rounded-lg px-3 py-1 text-white'>Approve</button>
                      </div>
                    </div>
                  </div>
                )
              ))
            }
          </div>
        </div>
      ) : (
        <p className='text-red-900 text-center'>Only admins can use this page</p>
      )}
    </div>
  )
}

