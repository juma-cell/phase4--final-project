import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DiscussContext } from '../context/DiscussContext';

function Home() {
  const { discussion } = useContext(DiscussContext);
  const { id } = useParams();
  const SingleDiscuss = discussion && discussion.find((discussion) => discussion.id === id);
  console.log(SingleDiscuss);



  return (
    <div className='container mx-auto px-4'>
      {discussion && discussion.map((discuss) => (
        <article key={discuss.id} className="rounded-xl border-2 border-gray-100 bg-white mb-8">
          <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
            <div>
              <h3 className="font-medium sm:text-lg">
                <p>{discuss.title}</p>
              </h3>
              <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                <div className="flex items-center gap-1 text-gray-500"></div>
                <span className="hidden sm:block" aria-hidden="true">&middot;</span>
                <p className="hidden sm:block sm:text-xs sm:text-gray-500">Posted by {discuss.author}</p>
              </div>
            </div>
            <div className="flex justify-end">
              <strong className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white">
                <Link to={`/singlediscuss/${discuss.id}`} className="text-[10px] font-medium sm:text-xs">Read More</Link>
              </strong>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Home;
