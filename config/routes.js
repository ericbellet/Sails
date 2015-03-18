/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

 'POST /user/create' : 'UserController.create',
 'GET /user/index' : 'UserController.index',
 'DELETE /user/delete/:id' : 'UserController.delete',
'GET /user/show/:id' : 'UserController.show',
'PATCH /user/update/:id' : 'UserController.update',


'POST /piso/createPiso' : 'PisoController.createPiso',
'GET /piso/indexPiso' : 'PisoController.indexPiso',
'DELETE /piso/deletePiso/:id' : 'PisoController.deletePiso',
'GET /piso/show/:id' : 'PisoController.show',
'PATCH /piso/update/:id' : 'PisoController.update',

'POST /reserva/createreserva/:id' : 'ReservaController.createreserva',
'GET /reserva/indexreserva': 'ReservaController.indexreserva',
'DELETE /reserva/deletereserva/:id' : 'ReservaController.deletereserva',
'GET /reserva/show/:id' : 'ReservaController.show',
'PATCH /reserva/update/:id' : 'ReservaController.update'
  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  *  If a request to a URL doesn't match any of the custom routes above, it  *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
