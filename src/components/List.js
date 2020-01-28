import React, { Component } from "react";
import { connect } from "react-redux";

import { changeStatus, deleteTask } from "../redux/actions";

class List extends Component {
  render() {
    return (
      <ul>
        {this.props.data.map((item, index) => {
          return (
            <li
              style={{ textDecoration: item.status ? "line-through" : "none" }}
              onClick={() => this.props.changeStatus(this.props.data, index)}
              key={index}
            >
              {item.text}
              <button
                onClick={event => {
                  event.stopPropagation();
                  this.props.deleteTask(this.props.data, index);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeStatus: (state, index) => {
      dispatch(changeStatus(state, index));
    },
    deleteTask: (state, index) => {
      dispatch(deleteTask(state, index));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
