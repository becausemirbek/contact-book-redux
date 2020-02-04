import React, { Component } from 'react';
import { connect } from 'react-redux'

import { createContact } from '../redux/actions'

class AddContact extends Component {
  state = {
    inputName: '',
    inputLastName: '',
    inputPhone: ''
  }

  handleFirstNameInput = event => {
    this.setState({
      inputName: event.target.value
    })
  }

  handleLastNameInput = event => {
    this.setState({
      inputLastName: event.target.value
    })
  }

  handlePhoneInput = event => {
    this.setState({
      inputPhone: event.target.value
    })
  }

  handleClick = () => {
    const name = this.state.inputName;
    const lastName = this.state.inputLastName;
    const phone = this.state.inputPhone
    if (!name || !lastName || !phone) return;
    this.props.dispatch(
      createContact(this.props.data, name, lastName, phone)
    )
    this.setState({ inputName: '', inputLastName: '', inputPhone: '' })
  }

  render() {
    return (
      <div>
        <input 
          onChange={this.handleFirstNameInput}
          value={this.state.inputName}
          type="text"
          placeholder="Введите Имя"
        />
        <input 
          onChange={this.handleLastNameInput}
          value={this.state.inputLastName}
          type="text"
          placeholder="Введите Фамилию"
        />
        <input 
          onChange={this.handlePhoneInput}
          value={this.state.inputPhone}
          type="number"
          placeholder="Введите Номер"
        />
        <button onClick={this.handleClick}>AddContact</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(AddContact);