import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { showContact, deleteContact, editContact } from "../redux/actions";

class List extends Component {
  handleEdit = index => {
    this.props.history.push("/edit");
    this.props.editContact(index);
  };

  handleShowContact = index => {
    this.props.history.push("/show");
    this.props.showContact(index)
  }

  render() {
    // return null
    return (
      <ul>
        {this.props.data.map((item, index) => {
          return (
            <li key={index}>
              {item.name} {item.lastName} {item.phone}
              <button
                onClick={event => {
                  event.stopPropagation();
                  this.props.deleteContact(this.props.data, index);
                }}
              >
                Delete
              </button>
              <button
                onClick={event => {
                  event.stopPropagation();
                  this.handleEdit(index);
                }}
              >
                Edit
              </button>
              {/* <Link to=""> */}
              <button
                onClick={event => {
                  event.stopPropagation();
                  this.handleShowContact(index);
                }}
              >
                Show
              </button>
              {/* </Link> */}
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    state,
    data: state.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: (state, index) => {
      dispatch(deleteContact(state, index));
    },
    showContact: (state, index) => {
      dispatch(showContact(state, index));
    },
    editContact: index => {
      dispatch(editContact(index));
    }
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(List);
