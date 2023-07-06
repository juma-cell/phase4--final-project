import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import  Swal from "sweetalert2"
import { useNavigate } from "react-router-dom";


function SingleDiscuss() {
  const nav = useNavigate();
  const [onChange, setonChange] = useState(true);
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);
  const [replies, setReplies] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [SingleDiscussion, setSingleDiscussion] = useState([]);
  const { id } = useParams()

  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
  };

  const handleDownvote = () => {
    setDownvotes(downvotes + 1);
  };

  const handleAddComment = () => {
    // Check if the new comment is not empty
    if (newComment.trim() !== '') {
      const comment = {
        author: "User",
        content: newComment,
      };

      setReplies([...replies, comment]);
      setNewComment('');
    }
  };

  const addReply = (reply_content) => {
    fetch(`/discussions/${id}/replies`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        reply_content:reply_content
   
      }),
    })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      if (response.error) {
      
        Swal.fire(
            'Error',
            response.error,
            'error'
        );
    } else if (response.success) {
        Swal.fire(
            'Success',
            response.success,
            'success'
        );
        setonChange(!onChange);
    } else {
      nav("/");

        Swal.fire(
            'Success',
            response.success,
            'success'
        );
    }
      });
  };

  useEffect(() => {
    fetch(`/discussions/${id}`)
      .then((res) => res.json())
      .then((SingleDiscussion) => {
        setSingleDiscussion(SingleDiscussion)
       
      })
  }, [])


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">{SingleDiscussion && SingleDiscussion.discussion_title}</h3>
          <p className="text-gray-700 mb-4">Question content goes here...</p>
          <div className="flex items-center text-gray-500 text-sm">
            <span className="mr-4">Posted by <p>John</p></span>
            <span>{upvotes} points</span>
          </div>
          <div className="flex mt-4">
            <button onClick={handleUpvote} className="mr-2 bg-gray-200 px-4 py-1 rounded-full">
              <svg className="w-5 h-5 text-gray-600 hover:text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 10h8l-4-8H6v8z" />
              </svg>
            </button>
            <button onClick={handleDownvote} className="bg-gray-200 px-4 py-1 rounded-full">
              <svg className="w-5 h-5 text-gray-600 hover:text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14 10H6l4 8h4v-8z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-4">
          <h4 className="text-lg font-bold mb-4">replies</h4>

          { SingleDiscussion.replies && SingleDiscussion.replies.length === 0 ? (
            <p>No replies yet.</p>
          ) : (
                  SingleDiscussion.replies && SingleDiscussion.replies.map((reply) => (
              <div key={reply.id} className="flex mb-4">
                <div className="flex-shrink-0 mr-4">
                  <img
                    className="h-8 w-8 rounded-full object-cover"
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="User Avatar"
                  />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700">{reply.user_id}</div>
                  <p className="text-gray-700">{reply.reply_content}</p>
                  
                </div>
              </div>
            ))
          )}
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-4">
          <h4 className="text-lg font-bold mb-4">Add Reply</h4>
          <div className="flex mb-4">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="mr-2 px-4 py-1 rounded-full border"
              placeholder="Enter your comment..."
            />
            <button onClick={handleAddComment} className="bg-gray-200 px-4 py-1 rounded-full">
              Add Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleDiscuss;
