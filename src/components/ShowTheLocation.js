import React, { Component } from 'react'
import PropTypes from "prop-types";
import { withRouter } from "react-router";

export class ShowTheLocation extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      };
    
      render() {
        const { match, location, history } = this.props;
    
        return <div>You are now at {location.pathname   }</div>;
      }
    }


export default withRouter(ShowTheLocation)