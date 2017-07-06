var uuid = require('node-uuid');
var crypto= require("crypto");

module.exports = {

  attributes: {

	id: {
		type: 'integer',
		autoIncrement: true,
		primaryKey: true
	},
	api_key: {
		type: 'string',
		size: 64,
		defaultsTo: function() {
			return uuid.v4();
		}
	},
	
	password: {
		type: 'string',
		size: 64,
		required: true
	},
	email: {
		type: 'string',
		size: 64,
		required: true,
		unique: true
	},
	role: {
		type: 'string',
		enum: ['admin', 'doctors', 'patient'],
		required: true
	},
	status: {
		type:'string',
		enum: ['active', 'inactive'],
		required: true
	}
  },

  // Lifecycle Callbacks
  beforeCreate: function (values, cb) {

	var p = crypto.createHash("sha1");
	p.update(values.password);
	var pass = p.digest('hex');

    values.password = pass;
	//calling cb() with an argument returns an error. Useful for canceling the entire operation if some criteria fails.
	cb();
    
  }
};

