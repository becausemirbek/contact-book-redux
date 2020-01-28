import React, { Component } from 'react';
import { connect } from 'react-redux'

import { createTask } from '../redux/actions'

class AddTodo extends Component {
  state = {
    inputVal: ''
  }

  handleInput = event => {
    this.setState({
      inputVal: event.target.value
    })
  }

  handleClick = () => {
    this.props.dispatch(
      createTask(this.props.data, this.state.inputVal)
    )
    this.setState({ inputVal: '' })
  }

  render() {
    return (
      <div>
        <input 
          onChange={this.handleInput}
          value={this.state.inputVal}
          type="text" 
          />
        <button onClick={this.handleClick}>AddTodo</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(AddTodo);
