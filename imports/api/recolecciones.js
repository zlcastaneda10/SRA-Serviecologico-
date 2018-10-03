import {Mongo} from 'meteor/mongo';

export const Recolecciones = new Mongo.Collection('recolecciones');

if (Meteor.isServer) {
    Meteor.publish('recolecciones', () => {
      return Recolecciones.find({});
    });
}

  Meteor.methods({
    'recolecciones.add':function(precoleccion){
        Recolecciones.insert(precoleccion);
    }
});