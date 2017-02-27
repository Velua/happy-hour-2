var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

  app.get('/bars/:id', (req, res) => {
    const id = req.params.id;
    const bar = { '_id': new ObjectID(id) };
    db.collection('bars').findOne(bar, (err, item) => {
      if (err) {
        res.send('Error');
      }
      else {
        res.send(item);
      }
    });
  });

  app.post('/bars', (req, res) => {
    const bar = { name: req.body.name };
    db.collection('bars').insert(bar, (err, result) => {
      if (err){
        res.send("There's an error, sorry mate.");
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};
