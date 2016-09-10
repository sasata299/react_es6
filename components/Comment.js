import React from 'react'
import Marked from 'marked'

const Comment = (props) => {
  var rawMarkup = Marked(props.children.toString(), {sanitize: true});

  return(
    <div className='comment'>
      <h3 className='commentAuthor'>
        {props.author}
      </h3>
      <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
    </div>
  );

}

export default Comment;
