import {Mongo} from 'meteor/mongo';

export const Recolecciones = new Mongo.Collection('recolecciones');

if (Meteor.isServer) {
    Meteor.publish('recolecciones', () => {
      return Recolecciones.find({estado:'PENDIENTE'});
    });

    Meteor.publish('misRecolecciones', ()=>{
        return Recolecciones.find({recolector: Meteor.user().username});
    })
}

  Meteor.methods({
    'recolecciones.add':function(precoleccion){
        Recolecciones.insert(precoleccion);
    },
    'recolecciones.asignar':function(idRecoleccion){
        
        Recolecciones.update(
            { _id: idRecoleccion },
            {
                $set: {
                     recolector: Meteor.user().username,
                     estado: 'ASIGNADO'
                    }
            }
            );
    },
    'recolecciones.desasignar':function(idRecoleccion){
        
        Recolecciones.update(
            { _id: idRecoleccion },
            {
                $set: {
                     recolector: null,
                     estado: 'PENDIENTE'
                    }
            }
            );
    }
});