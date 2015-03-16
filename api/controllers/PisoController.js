/**
 * PisoController
 *
 * @description :: Server-side logic for managing pisoes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {



indexPiso : function(req,res){
		
			Piso.find().then(function(piso){

			return res.json({result:piso});

		});

	},

createPiso : function(req,res){
	var parameters = {};
	var array = req.params.all();
	
   Piso.create(array).then(function(piso){

			return res.redirect("/piso/indexPiso");

		});
 },

 	deletePiso : function(req,res){

		var idPiso = req.param("id", null);

		Piso.findOne({id:idPiso}).then(function(piso){

			piso.destroy(function(err){

				if(err){

					return res.send("Error deleting task");

				}else{

					return res.redirect("piso/indexPiso");

				}

			});

		}).catch(function(err){

			return res.status("Server Error").json({number:500});

		});

	},


show : function(req,res){


		var idPiso= req.param("id", null);
		
			Piso.findOne({id:idPiso}).then(function(piso){

		
			return res.json({result:piso});

		});

	},

	// <-- Update --> // 

update: function(req,res){

  Piso.findOne({ where: { id: req.param("id", null) }}).then(function(piso){

   //return res.json({status:user});
   if(req.param("numpiso", null))
    piso["numpiso"] = req.param("numpiso", null);


   if(req.param("cantpuestos", null))
    piso["cantpuestos"] = req.param("cantpuestos", null);

   if(req.param("cantdisp", null))
    piso["cantdisp"] = req.param("cantdisp", null);

   piso.save(function(err){

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

