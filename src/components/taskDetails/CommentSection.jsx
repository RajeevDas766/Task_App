import React from 'react'

const CommentSection = () => {
  return (
    <div>
        <h2 className="text-lg font-medium mb-4">Comments</h2>
        <textarea
        placeholder="Write your comment here..."
        className="w-full h-32 p-3 rounded-lg resize-none"
        />
        <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Post Comment
        </button>
    </div>
  )
}

export default CommentSection