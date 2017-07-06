
module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions (admin access is required for everything.
  Individual policies for each controller are  defined below                                                                  *
  *                                                                          *
  ***************************************************************************/

  // '*': 'admin',

  /***************************************************************************
  *                                                                          *
  * Here's an example of mapping some policies to run before a controller    *
  * and its actions                                                          *
  *                                                                          *
  ***************************************************************************/
	UserController: {

    //all function with their policy value set to true are available publicly
		login : true,
    logout : true,
create: true
    //examples to apply policy
		// nurture	: 'isRabbitMother',
		// feed : ['isNiceToAnimals', 'hasRabbitFood']
	},
ActivityController: {

  create : true,

 update : ['doctors',
      function (req, res, next) {
        if (!req.body.status)     
        _.set(req.body,'status',req.session.user.id);
        next();
      }
    ]
},
DoctorsController: {

  create : true,
  
 update : ['doctors',
      function (req, res, next) {
        if (!req.body.status)     
        _.set(req.body,'status',req.session.user.id);
        next();
      }
    ]
}




















  // Data_lenditController: {
  //   find: 'doctors',
  //   create : ['doctors',
  //     function (req, res, next) {
  //       if (req.body instanceof Array)
  //       {
  //         _.forEach(req.body, function(value) {
  //           if (!value.added_by)
  //             _.set(value,'added_by',req.session.user.id);
  //         });          
  //       }
  //       else
  //       {

  //         if (!req.body.added_by)
  //           _.set(req.body,'added_by',req.session.user.id);  

  //         //console.log(req.body);
  //       }
  //       next();
  //     }
  //   ],
   
  }
};
