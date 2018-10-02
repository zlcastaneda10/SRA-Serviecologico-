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

        var doc = Materiales.findOne({ material:pMaterial });
        Materiales.update(
            { _id: doc._id },
            {
                $set: { precio: price}
            }
            );
        
      }    
  
    }
  );
  