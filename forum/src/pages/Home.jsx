import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='container mx-auto px-4'>
    <article class="rounded-xl border-2 border-gray-100 bg-white mb-8">
  <div class="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
    <a href="#" class="block shrink-0">
      <img
        alt="Speaker"
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        class="h-14 w-14 rounded-lg object-cover"
      />
    </a>

    <div>
      <h3 class="font-medium sm:text-lg ">
        <a href="#" class="hover:underline">
          Question about Livewire Rendering and Alpine JS
        </a>
      </h3>

      <p class="line-clamp-2 text-sm text-gray-700">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
        accusantium temporibus iure delectus ut totam natus nesciunt ex?
        Ducimus, enim.
      </p>

      <div class="mt-2 sm:flex sm:items-center sm:gap-2">
        <div class="flex items-center gap-1 text-gray-500">

          
        </div>

        <span class="hidden sm:block" aria-hidden="true">&middot;</span>

        <p class="hidden sm:block sm:text-xs sm:text-gray-500">
          Posted by
          <a href="#" class="font-medium underline hover:text-gray-700">
            John
          </a>
        </p>
      </div>
    </div>
  </div>

  <div class="flex justify-end">
    <strong
      class="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>

      <Link to ='/singletopic' class="text-[10px] font-medium sm:text-xs">Read More</Link>
    </strong>
  </div>
</article>


<article class="rounded-xl border-2 border-gray-100 bg-white">
  <div class="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
    <a href="#" class="block shrink-0">
      <img
        alt="Speaker"
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        class="h-14 w-14 rounded-lg object-cover"
      />
    </a>

    <div>
      <h3 class="font-medium sm:text-lg">
        <a href="#" class="hover:underline">
          Question about Livewire Rendering and Alpine JS
        </a>
      </h3>

      <p class="line-clamp-2 text-sm text-gray-700">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
        accusantium temporibus iure delectus ut totam natus nesciunt ex?
        Ducimus, enim.
      </p>

      <div class="mt-2 sm:flex sm:items-center sm:gap-2">
        <div class="flex items-center gap-1 text-gray-500">

          
        </div>

        <span class="hidden sm:block" aria-hidden="true">&middot;</span>

        <p class="hidden sm:block sm:text-xs sm:text-gray-500">
          Posted by
          <a href="#" class="font-medium underline hover:text-gray-700">
            John
          </a>
        </p>
      </div>
    </div>
  </div>

  <div class="flex justify-end">
    <strong
      class="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>

      <Link to ='/singletopic' class="text-[10px] font-medium sm:text-xs">Read More</Link>
    </strong>
  </div>
</article>
</div>






  )
}

export default Home