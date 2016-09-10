import React from 'react'
import Comment from './Comment'

const CommentList = ({ data }) => {
  var commentNodes = data.map((comment)=> {
    return(
      <Comment key={`${comment.author}-${comment.text}`} author={comment.author}>{comment.text}</Comment>
    );
  });

  return(
    <div className='commentList'>{commentNodes}</div>
  );
}

export default CommentList;
