import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Segment} from "semantic-ui-react";
import {Redirect} from "react-router-dom";

export default (ChildComponent) => {

    class RequireAuth extends Component {
        render(){
           switch(this.props.auth){
               case false:
                   return <Redirect to='/'/>;
               case null:
                   return <Segment>Loading...</Segment>;
               default:
                   return <ChildComponent {...this.props}/>
           }
        }
    }
    function mapStateToProps({auth}) {
        return {auth}
    }


   return  connect(mapStateToProps)(RequireAuth)
}
