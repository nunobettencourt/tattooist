import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

/* import components */


class Home extends Component {
    componentWillMount() {
      /* initial data load
        this.props.yourImportedAction();
      */
    }

  render() {

    return (
        <div className="Home">
          Hello world
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    /* key: state.yourDataStructure */
  }
}

export default connect(mapStateToProps, actions)(Home);