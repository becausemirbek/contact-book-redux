import React, { Component } from 'react';

import AddContact from '../AddContact/AddContact';
import List from '../List/List'

class MainComponent extends Component {
  render() {
    return (
      <div>
        <AddContact />
        <List />
      </div>
    );
  }
}

export default MainComponent;