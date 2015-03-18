/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {


index : function(req,res){
		
			User.find().then(function(user){

			return res.json(user);

		});

	},

create : function(req,res){
	var parameters = {};
	var array = req.params.all();
	
   User.create(array).then(function(user){

			return res.redirect("/user/index");

		});
 },

 // <-- Delete --> //

	delete : function(req,res){

		var idUser = req.param("id", null);

		User.findOne({id:idUser}).then(function(user){

			user.destroy(function(err){

				if(err){

					return res.send("Error deleting task");

				}else{

					return res.redirect("user/index");

				}

			});

		}).catch(function(err){

			return res.status("Server Error").json({number:500});

		});

	},


show : function(req,res){


		var idUser = req.param("id", null);
		
			User.findOne({id:idUser}).then(function(user){

		
			return res.json({result:user});

		});

	},

	// <-- Update --> // 

update: function(req,res){

  User.findOne({ where: { id: req.param("id", null) }}).then(function(user){

   //return res.json({status:user});
   if(req.param("username", null))
    user["username"] = req.param("username", null);


   if(req.param("email", null))
    user["email"] = req.param("email", null);

   if(req.param("password", null))
    user["password"] = req.param("password", null);

   user.save(function(err){

    if(err){

     return res.json({status: 501});

    }else{

     return res.status("User Updated").json({status:200});

    }

   });

  }).catch(function(err){

   return res.status("Server Error").json({status:404});

  });
 },
	
};

