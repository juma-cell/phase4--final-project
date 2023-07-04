import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='container mx-auto px-4'>
    <article class="rounded-xl border-2 border-gray-100 bg-white mb-8">
  <div class="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
    <a href="#" class="block shrink-0">
     
    </a>
    <div>
      <h3 class="font-medium sm:text-lg ">
        <a href="#" class="hover:underline">
          What it takes to be A millionaire
        </a>
      </h3>
      <div class="mt-2 sm:flex sm:items-center sm:gap-2">
        <div class="flex items-center gap-1 text-gray-500">

        </div>

        <span class="hidden sm:block" aria-hidden="true">&middot;</span>

        <p class="hidden sm:block sm:text-xs sm:text-gray-500">
          Posted by Juma
        </p>
      </div>
    </div>
  </div>
  <div class="flex justify-end">
    <strong
      class="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white"
    >
  
      <Link to ='/singletopic' class="text-[10px] font-medium sm:text-xs">Read More</Link>
    </strong>
  </div>
</article>

<article class="rounded-xl border-2 border-gray-100 bg-white">
  <div class="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
    <a href="#" class="block shrink-0">
      
    </a>

    <div>
      <h3 class="font-medium sm:text-lg">
        <a href="#" class="hover:underline">
          Who is the greatest football player?
        </a>
      </h3>


      <div class="mt-2 sm:flex sm:items-center sm:gap-2">
        <div class="flex items-center gap-1 text-gray-500">

          
        </div>

        <span class="hidden sm:block" aria-hidden="true">&middot;</span>

        <p class="hidden sm:block sm:text-xs sm:text-gray-500">
          Posted by  Kush
  
        </p>
      </div>
    </div>
  </div>

  <div class="flex justify-end">
    <strong
      class="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white"
    >
     
      <Link to ='/singletopic' class="text-[10px] font-medium sm:text-xs">Read More</Link>
    </strong>
  </div>
</article>
</div>

  )
}

export default Home