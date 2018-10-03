import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import {withTracker} from 'meteor/react-meteor-data';

class TestUser extends Component {

    updateProfile(){
        Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.nombre": "yogi"}});
    }


  render() {
    return (
      <div>
          <h1>
          
          {this.props.user ? console.log(this.props.user.profile.rol): console.log("No hay sesion")}

          {console.log(this.props.user)}

          </h1>
        
    
      </div>
    )
  }
}

TestUser.propTypes = {
    user: PropTypes.object
  };
  
  export default withTracker(() => {  
    return {
      user: Meteor.user()
    };
  })(TestUser);
