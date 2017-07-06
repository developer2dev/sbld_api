/**
 * Doctors.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  		d_id: {
		type: 'integer',
		autoIncrement: true,
		primaryKey: true
	},
	
	d_fname: {
		type: 'string',
		size: 255,
		required: true
	},
	d_lname: {
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
	experience: {
		type: 'string',
		size: 64

	},
	speciality: {
		type: 'string',
		size: 64
	},
	about:{
		type: 'string',
		size: 300


	},
	bio: {
		type: 'string',
		size: 300 
	},
	image: {
		type: 'string',
		size: 300 
	}

  }
};

