/**
 * ReservaController
 *
 * @description :: Server-side logic for managing reservas
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	

indexreserva : function(req,res){
		
			Reserva.find().then(function(reserva){

			return res.json({result:reserva});

		});

	},

createreserva : function(req,res){

	var idUser = req.param("id", null);

	var parameters = {};
	var array = req.params.all();

	Reserva.findOne({owner:idUser}).then(function(reserva){
		if(reserva){


		}else{
			parameters["FECHAINI"] = array["FECHAINI"];
			parameters["numpiso"] = array["numpiso"];
			parameters["owner"] = idUser;
			
   			Reserva.create(parameters).then(function(reserva){

			return res.redirect("/reserva/indexreserva");
				});
		}

		});
 },

 // <-- Delete --> //

	deletereserva : function(req,res){

		var idReserva = req.param("id", null);

		Reserva.findOne({id:idReserva}).then(function(reserva){

			reserva.destroy(function(err){

				if(err){

					return res.send("Error deleting task");

				}else{

					return res.redirect("reserva/indexreserva");

				}

			});

		}).catch(function(err){

			return res.status("Server Error").json({number:500});

		});

	},


show : function(req,res){


		var idRes= req.param("id", null);
		
			Reserva.findOne({id:idRes}).then(function(reserva){

		
			return res.json({result:reserva});

		});

	},

	// <-- Update --> // 

update: function(req,res){

  Reserva.findOne({ where: { id: req.param("id", null) }}).then(function(reserva){

   //return res.json({status:user});
   if(req.param("FECHAINI", null))
    reserva["FECHAINI"] = req.param("FECHAINI", null);


   if(req.param("FECHAFIN", null))
    reserva["FECHAFIN"] = req.param("FECHAFIN", null);

   if(req.param("IDUSER", null))
    reserva["IDUSER"] = req.param("IDUSER", null);

if(req.param("NUMPISO", null))
    reserva["NUMPISO"] = req.param("NUMPISO", null);

   reserva.save(function(err){

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