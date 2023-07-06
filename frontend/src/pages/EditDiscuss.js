import React, { useContext, useState } from 'react';
import { DiscussContext } from '../context/DiscussContext';
import { AuthContext } from '../context/AuthContext';
import { useParams } from 'react-router-dom';

function EditDiscuss({id}) {
  const { current_user } = useContext(AuthContext);
  const { editDiscuss } = useContext(DiscussContext);

  const [discussionTitle, setDiscussionTitle] = useState('');
  const [content, setContent] = useState('');
  const [topic, setTopic] = useState('');
//   const { id } = useParams();

  const handleEdit = (id) => {
    editDiscuss(discussionTitle, topic, content, id);
  };

  return (
    <div>
      {current_user && current_user ? (
        <>
          <form onSubmit={() => handleEdit(id)}>
            <label htmlFor="discussionTitle" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Discussion Title
            </label>
            <input
              type="text"
              id="discussionTitle"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Discussion Title..."
              value={discussionTitle}
              onChange={(e) => setDiscussionTitle(e.target.value)}
            />

            <label htmlFor="content" className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">
              Content
            </label>
            <textarea
              id="content"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Content..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>

            <label htmlFor="topic" className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">
              Topic
            </label>
            <input
              type="text"
              id="topic"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Topic..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />

            <button
              type="submit"
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              style={{ marginTop: '10px' }}
            >
              Submit
            </button>
          </form>
        </>
      ) : (
        <div className="text-center">
          <h1>You need to login to access this page</h1>
        </div>
      )}
    </div>
  );
}

export default EditDiscuss;