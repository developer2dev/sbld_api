/**
 * ActivityController
 *
 * @description :: Server-side logic for managing activities
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


create : function create(req, res){

	Activity.create({p_fname: 'req.session.p_fname',p_lname:'req.session.p_lname',d_fname:'req.query.d_fname',d_lname:'req.query.d_lname',date:'req.query.date',time:'req.query.time',status:'req.query.status'}).exec(function (err, res){
			if(err) 
				return res.send(404,{msg:'There was a problem with your request.'});
			
				else if(!req.session)
					return res.send(403,{msg:'please login again to continue.'});

				else if(!req.session==patients)
				return res.send(404,{msg:'you need to patient level priveledge'});

			else
				res.ok();

	})
}, 

find : function create(req, res){

	

		Activity.find({where: req.query, sort: 'name'}).exec(function(err,rlt){

			if(err) 
				return res.send(404,{msg:'There was a problem with your request.'});

			else if(!doctors)
				return res.send(402,{msg:'you need to doctors level priveledge to access the data'});
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




	// getdata: function getdata(req, res){

	// 	Users.find({where: {name: req.query.user}}).exec(function(err,rlt){

	// 		if(err) 
	// 			return res.send(404,{msg:'Some error occured: ' + err});
	// 		else if(!rlt) 
	// 			return res.send(404,{msg:'No user was found with the selected name.'});
	// 		else if(rlt.length == 0) 
	// 			return res.send(404,{msg:'No user was found with the selected name.'});
	// 		else
	// 		{
	// 			//console.log(rlt);
	// 			var u_id = 0;

	// 			if (rlt instanceof Array)
	// 				u_id = rlt[0].id
	// 			else
	// 				u_id = rlt.id

	// 			Activity.query('select ifnull(added_by,modified_by) as user, ifnull(a.date,b.date) as `date`, ifnull(added,0) as added, ifnull(modified,0) as modified ' + 
	// 					'from (SELECT count(*) as added, added_by, date_format(created,"%Y-%m-%d") as `date`  FROM data_lendit ' +
	// 					'group by added_by, date_format(created,"%Y-%m-%d") ) a ' +
	// 					'left join (SELECT count(*) as modified, modified_by, date_format(created,"%Y-%m-%d") as `date` FROM sbld.activity ' +
	// 					'where table_name = \'data_lendit\' group by modified_by, date_format(created,"%Y-%m-%d") ) b ' +
	// 					'on a.added_by = b.modified_by and a.date = b.date where ifnull(added_by,modified_by) = ? union ' +
	// 					'select ifnull(added_by,modified_by) as user, ifnull(a.date,b.date) as `date`, ifnull(added,0) as added, ifnull(modified,0) as modified ' +
	// 					'from (SELECT count(*) as added, added_by, date_format(created,"%Y-%m-%d") as `date`  FROM sbld.data_lendit ' +
	// 					'group by added_by, date_format(created,"%Y-%m-%d") ) a ' +
	// 					'right join (SELECT count(*) as modified, modified_by, date_format(created,"%Y-%m-%d") as `date` FROM activity ' +
	// 					'where table_name = \'data_lendit\' ' +
	// 					'group by modified_by, date_format(created,"%Y-%m-%d") ) b ' +
	// 					'on a.added_by = b.modified_by and a.date = b.date where ifnull(added_by,modified_by) = ? order by `date` desc', [u_id,u_id] ,function(err, rawResult) {
	// 			  if (err) 
	// 			  	{ 
	// 			  		return res.serverError(err); 
	// 			  	}

	// 	//		  sails.log(rawResult);
	// 			  return res.send(200,rawResult);

	// 			});
	// 		}

	// 	});

		
	// }
	
};

