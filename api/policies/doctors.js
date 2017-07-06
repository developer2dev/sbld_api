/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {

  if (req.session) {
  	if (req.session.user) {
  		if (req.session.user.role == 'doctors') {
        //a researcher is only allowed access to their own data
        if (req.query.status) {
          
          if (req.query.doctors == req.session.user.name)
            return next();    
          else
            return res.forbidden({msg:'You do not have access to this data.'});    
        }
        else
           return next();    

  		}
      //admins are allowed all functions that researchers can perform
      else if (req.session.user.role == 'admin')
        return next(); 
  		else
  			return res.forbidden({msg:'You require researcher level privileges to make this change.'});
  	}
  	else
  		return res.forbidden({msg:'Please login again to continue.'});
  }
  else
  	return res.forbidden({msg:'Please login again to continue.'});

  
};
