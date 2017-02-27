const noteRoutes = require('./note_routes');
const barRoutes = require('./bar_routes');

module.exports = function(app, db) {
  noteRoutes(app, db);
  barRoutes(app, db);
};
