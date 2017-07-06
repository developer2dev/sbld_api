var crypto= require("crypto");

module.exports = {

	login: function login(req, res){

		if (!req.body.email)
			return res.send(404,{msg:'Email is required.'});
		else if (!req.body.password)
			return res.send(404,{msg:'Password is required.'});
		else {

			Users.findOne({email:req.body.email, status:"active"}).exec(function (err, found){
console.log(req.session);
				if(err)
				{
					return res.send(404,{msg:'There is a problem with your email address.Please contact us to resolve the status of your credentials.'});
				}

				if(!found)
				{
					return res.send(404,{msg:'There is a problem with your email address. Please contact us to resolve the status of your credentials.'});
				}

				var	c=crypto.createHash("sha1");
			  	c.update(req.body.password);
			  	var t=	c.digest('hex');
			  	var temp=(t==found.password);

			  	if (temp)
			  	{
			  		delete found.password;
			  		delete found.api_key;
			  		delete found.status;
			  		

				  	sails.sess=req.session.user=found;

				  	return res.send(200,{msg:'Login successful.',role: found.role, name: found.name});
			  	}
			  	else
			  	{
			  		return res.send(404,{msg:'Wrong password.'});
			  	}
			});
		}
	},

	logout: function logout (req,res) {

		req.session.destroy();
		return res.send(200,{msg:'Logged out successfully.'});

	},

	resetpass: function resetpass(req,res) {

		var uname = req.body.email;
		
	  	var p = crypto.createHash("sha1");
	  	p.update(req.body.password);
	  	var pass = p.digest('hex');

		Users.findOne({email:uname}).exec(function(err,rlt){

			if(err) return res.send(404);
			
			Users.update({email:uname},{password:pass

			}).exec(function(err,rlt1) {
				if(err) return res.send(404);
				else{
					
					return res.send(200)
				}
			});
				

		});
	},

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
	
}

