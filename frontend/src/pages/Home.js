import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DiscussContext } from '../context/DiscussContext';

function Home() {
  const { discussion } = useContext(DiscussContext);
  const { id } = useParams();
  const SingleDiscuss = discussion && discussion.find((discussion) => discussion.id === id);
  console.log(SingleDiscuss);



  return (
  <>
      {discussion && discussion.map((discuss) => (
        <article key={discuss.id} className="rounded-xl border-2 border-gray-100 bg-white mb-8">
           <Link to={`/singlediscuss/${discuss.id}`} className="container mx-auto px-4 text-[10px] font-medium sm:text-xs"> 
          <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
            <div>
              <h3 className="font-medium sm:text-lg">
                <h1>{discuss.discussion_title}</h1>
              </h3>

               <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                <div className="flex items-center gap-1 text-gray-500"></div>
                <span className="hidden sm:block" aria-hidden="true">&middot;</span>
                <p className="hidden sm:block sm:text-xs sm:text-gray-500"> {discuss.content}</p>
              </div>
              <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                <div className="flex items-center gap-1 text-gray-500"></div>
                <span className="hidden sm:block" aria-hidden="true">&middot;</span>
                <p className= "hidden sm:block sm:text-xs sm:text-gray-500">Posted by user {discuss.user_id}</p>
              </div>
            </div>
            <div className="flex justify-end">
              
          </div>
          </div>
          </Link>
        </article>
      ))}
   </>
  );
}

export default Home;
