import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { DiscussContext } from '../context/DiscussContext';

function AddDiscuss() {
  const { current_user } = useContext(AuthContext);
  const { addDiscuss } = useContext(DiscussContext);

  const [discussion_title, setDiscussionTitle] = useState('');
  const [content, setContent] = useState('');
  const [topic, setTopic] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addDiscuss(discussion_title, content,  topic, current_user.id);
  };

  return (
    <div>
      {current_user && current_user ? (
        <>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="discussion_title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Discussion Title
            </label>
            <input
              type="text"
              id="discussion_title"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Discussion Title..."
              value={discussion_title}
              onChange={(e) => setDiscussionTitle(e.target.value)}
            />

            

            <label
              htmlFor="content"
              className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
            >
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

            <label
              htmlFor="channel_id"
              className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
            >
              Topic
            </label>
            <input
              type="text"
              id="channel_id"
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

export default AddDiscuss;
