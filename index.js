import React from 'react'
import ReactDOM from 'react-dom'

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='commentBox'>
        <h2>Comments</h2>
        <CommentList />
        <CommentFrom />
      </div>
    );
  }
}

class CommentList extends React.Component {
  render() {
    return(
      <div className='commentList'>
        Hello world! I am a CommentList.
      </div>
    );
  }
}

class CommentFrom extends React.Component {
  render() {
    return(
      <div className='commentFrom'>
        Hello world! I am a CommentFrom.
      </div>
    );
  }
}

ReactDOM.render(
  <CommentBox />,
  document.getElementById('container')
);
