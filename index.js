import React from 'react'
import ReactDOM from 'react-dom'
import { observable } from 'mobx'
import CommentBox from './components/CommentBox'

const appState = observable({
  timer: 0
});

ReactDOM.render(
  <CommentBox url="comments.json" pollInterval={2000} data={appState} />,
  document.getElementById('container')
);

setInterval(() => {
  appState.timer += 1;
}, 1000);
