/**
 * Patients.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

  	p_id: {
		type: 'integer',
		autoIncrement: true,
		primaryKey: true
	},
	
	p_fname: {
		type: 'string',
		size: 255,
		required: true
	},
	p_lname: {
		type: 'string',
		size: 64,
		required: true
	},
	contact: {
		type: 'string',
		size: 64,
		required: true,
		unique: true
	},
	address: {
		type: 'string',
		size: 64
	},
	desease: {
		type: 'string',
		size: 64

	},
	description: {
		type: 'string',
		size: 300


	}
  }
};

