import React from 'react'
import ReactDOM from 'react-dom'
import CommentBox from './components/CommentBox'

var data = [
  {author: 'Pete Hunt', text: 'This is one comment'},
  {author: 'Jordan Walke', text: 'This is *another* comment'}
];

ReactDOM.render(
  <CommentBox data={data} />,
  document.getElementById('container')
);
