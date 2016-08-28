import React from 'react'
import CommentList from './CommentList'
import CommentFrom from './CommentFrom'

export default class CommentBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='commentBox'>
        <h2>Comments</h2>
        <CommentList data={this.props.data} />
        <CommentFrom />
      </div>
    );
  }
}

