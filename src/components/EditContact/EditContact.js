import React, { Component } from "react";
import { connect } from "react-redux";

import { editSaveContact } from "../redux/actions";
import { withRouter } from "react-router-dom";
import { compose } from 'redux'

class EditContact extends Component {
  state = {
    name: "",
    lastName: "",
    phone: ""
  };

  componentDidMount() {
    // console.log(this.props.data[this.props.id]);
    const currentIndex = this.props.currentIndex;
    const data = this.props.data;

    this.setState({
      name: currentIndex !== -1 ? data[currentIndex].name : '',
      lastName: currentIndex !== -1 ? data[currentIndex].lastName : '',
      phone: currentIndex !== -1 ? data[currentIndex].phone : '',
    })
  }
  

  handleEditName = event => {
    const name = event.target.value
    this.setState({ name });
  };

  handleEditLastName = event => {
    const lastName = event.target.value
    this.setState({ lastName });
  };

  handleEditPhone = event => {
    const phone = event.target.value
    this.setState({ phone });
  };

  handleEditContact = () => {
    this.props.editSaveContact(this.props.data, this.state, this.props.currentIndex)
    this.props.history.push("/")
  };

  render() {
    // console.log(this.props.data)
    // if (!this.props.data[this.props.id]) return null;
    return (
      <div>
        <input
          onChange={this.handleEditName}
          value={this.state.name}
          type="text"
        />
        <input
          onChange={this.handleEditLastName}
          value={this.state.lastName}
          type="text"
        />
        <input
          onChange={this.handleEditPhone}
          value={this.state.phone}
          type="text"
        />
        <button onClick={this.handleEditContact}>Save</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state
};

const mapDispatchToProps = dispatch => {
  return {
    editSaveContact: (data, obj, index) => dispatch(editSaveContact(data, obj, index))
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
    )(EditContact);
