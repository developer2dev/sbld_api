/**
 * PatientsController
 *
 * @description :: Server-side logic for managing Patients
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
		find: function find(req, res) {
		

		find: function find(req, res) {

		Users.find({where: req.query, sort: 'name'}).exec(function(err,rlt){

			if(err) 
				return res.send(404,{msg:'There was a problem with your request.'});
			else
			{
				_.forEach(rlt, function(value) {
		            delete value.password;
		            delete value.api_key;
		            delete value.created;
		          });
				res.send(200,rlt);				
			}

		});
	}
	

		Users.find({where: {id: req.query}}).exec(function(err,rlt){

			if(err) 
				return res.send(404,{msg:'Some error occured: ' + err});
			else if(!rlt) 
				return res.send(404,{msg:'No user was found with the selected name.'});
			else if(rlt.length == 0) 
				return res.send(404,{msg:'No user was found with the selected name.'});
			else
			{
				//console.log(rlt);
				var u_id = 0;

				if (rlt instanceof Array)
					u_id = rlt[0].id
				else
					u_id = rlt.id

				// date object when created using new Date(datestring) method creates date in UTC whereas
				//when using date(year,month,date) constructor, creates it in local time zone
				//var d = new Date(req.query.created);

				var dt = req.query.created.split("-");
				var d = new Date(dt[0],dt[1]-1,dt[2]);
				var d1 = new Date(dt[0],dt[1]-1,dt[2]);
				d1.setDate(d.getDate() + 1);
				// console.log(d);
				// console.log(d1);

				Patients.find({where: {d_id: u_id, created: {'>=': d, '<': d1}}, sort: 'created'}).exec(function(err,rlt1){

					if(err) 
						return res.send(404,{msg:'No data found for the selected user.'});
					else
					{
						res.send(200,rlt1);				
					}

				});
			}

		});

	}
};

