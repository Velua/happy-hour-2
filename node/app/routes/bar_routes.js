var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {



  app.get('/bars', (req, res) => {
    db.collection('bars').find({}).toArray(function(error, items) {
    if (error) {
      res.send('Error')
    } else {
    res.send(items);
    }
  });
  })

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
    const bar = { name: req.body.name, google_id: req.body.google_id };
    db.collection('bars').insert(bar, (err, result) => {
      if (err){
        res.send("There's an error, sorry mate.");
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  app.delete('/bars/:id', (req, res) => {
    const id = req.params.id
    const note = { '_id': new ObjectID(id) }
    db.collection('bars').remove(note, (err, item) => {
      if (err) {
        res.send("We got a problem.")
      } else {
        res.send(`Bar ${id} has successfully been deleted.`);
      }
    })
  })

};
