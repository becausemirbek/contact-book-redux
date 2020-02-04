import React, { Component } from "react";
import { connect } from "react-redux";


class ShowContact extends Component {
  state = {
    data: this.props.data[this.props.currentIndex]
  };

  render() {
    // console.log(this.props.data[this.props.id]);
    if (!this.props.data[this.props.currentIndex]) return null;

    return (
      <div>
        {this.props.data[this.props.currentIndex].name} {this.props.data[this.props.currentIndex].lastName} {this.props.data[this.props.currentIndex].phone}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    currentIndex: state.currentIndex
  };
};

export default connect(mapStateToProps)(ShowContact);
