import {Mongo} from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Materiales = new Mongo.Collection('materiales');

if (Meteor.isServer) {
    Meteor.publish('materiales', () => {
      return Materiales.find({});
    });
  }

  Meteor.methods(
    {
      'materiales.update': function(pMaterial, price) {

        var doc = Materiales.findOne({ material:pMaterial }); // No es necesario esto, el update se puede hacer dierectamente usando pMaterial, ya que solo es un elemento
        Materiales.update(
            { _id: doc._id },
            {
                $set: { precio: price}
            }
            );
        
      }    
  
    }
  );
  
