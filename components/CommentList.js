import React from 'react'
import Comment from './Comment'

export default class CommentList extends React.Component {
  render() {
    return(
      <div className='commentList'>
        <Comment author='Pete Hunt'>This is one comment.</Comment>
        <Comment author='Jorden Walke'>This is *anothor* comment.</Comment>
      </div>
    );
  }
}
