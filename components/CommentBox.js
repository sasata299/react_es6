import React from 'react'
import { observer } from 'mobx-react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import request from 'superagent'

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  loadCommentsFromServer() {
    request
      .get(this.props.url)
      .end((err, res) => {
        if (err) {
          console.error(err);
        } else {
          this.setState({data: res.body});
        }
      });
  }

  handleCommentSubmit(comment) {
    var comments = this.state.data;
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});

    request
      .post(this.props.url)
      .send(comment)
      .end((err, res) => {
        if (err) {
          console.error(err);
        } else {
          this.setState({data: res.body});
        }
      });
  }

  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
  }

  render() {
    return(
      <div className='commentBox'>
        <h2>Comments</h2>
        <div>{this.props.data.timer}</div>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
      </div>
    );
  }
}

module.exports = observer(CommentBox);

