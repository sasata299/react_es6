import React from 'react'

export default class Commnet extends React.Component {
  render() {
    return(
      <div className='comment'>
        <h3 className='commentAuthor'>
          {this.props.author}
        </h3>
        {this.props.children}
      </div>
    );
  }
}
