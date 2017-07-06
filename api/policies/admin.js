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
  		if (req.session.user.role == 'admin') {
        console.log(req.session);
  			return next();		
  		}
  		else
  			return res.forbidden({msg:'You do not have sufficient privileges to access this resource.'});
  	}
  	else
  		return res.forbidden({msg:'Please login again to continue.'});
  }
  else
  	return res.forbidden({msg:'Please login again to continue.'});

  
};
