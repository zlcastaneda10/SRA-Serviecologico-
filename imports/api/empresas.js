import {Mongo} from 'meteor/mongo';

export const Empresas = new Mongo.Collection('empresas');

if (Meteor.isServer) {
    Meteor.publish('empresas', () => {
      return Empresas.find({});
    });
}

Meteor.methods({
    'empresas.add':function(pempresa){
        Empresas.insert(pempresa);
    }
});