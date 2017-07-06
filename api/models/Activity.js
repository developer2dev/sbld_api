

module.exports = {

  attributes: {

  			a_id: {
		type: 'integer',
		autoIncrement: true,
		primaryKey: true
	},
	
	p_fname: {
		type: 'string',
		size: 255,
		model: 'Patients',
		required: true
	},
	p_lname: {
		type: 'string',
		size: 64,
		model: 'Patients',
		required: true
	},
	d_fname: {
		type: 'string',
		size: 255,
		model: 'Doctors',
		required: true
	},
	d_lname: {
		type: 'string',
		size: 64,
		model: 'Doctors',
		required: true
	},
	date: {
		type: 'string',
		size: 64
	},
	time: {
		type: 'string',
		size: 64
	},
	status: {
		type:'string',
		enum: ['confirmed', 'waiting','cancel'],
		required: true
	}




	// id: {
	// 	type: 'integer',
	// 	autoIncrement: true,
	// 	primaryKey: true
	// },
	// //name of the table whose record has been modified
	// table_name: {
	// 	type: 'string'
	// },
	// //PK of the record that has been modified
	// record_id: {
	// 	type: 'integer'
	// },
	// //researchers would add a comment when they modify records
	// comment: {
	// 	type: 'string'
	// },
	// //user_id of the researcher who made the modification
	// modified_by: {
	// 	model: 'users',
	// 	required: true
	// },
	// modification_type: {
	// 	type: 'string',
	// 	enum: ['modified','deleted']
	// }
  }
};

