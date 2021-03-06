/**
 * GeneralSettings.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id : {
      type:'integer',
      unique:true,
        primaryKey: true,
      defaultsTo:1
    },

    areInscriptionsOpened : {
      type:'boolean',
      defaultsTo:false,
      required:true
    },

    billNumberMonth : {
      type: 'integer',
      defaultsTo:1,
      required:true
    },

    inscriptionDeadline : {
      type: 'datetime',
      defaultsTo: function() {return new Date();}
    }

  }
};

