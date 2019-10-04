module.exports = (app, col) => {
    app.get("/api", (req, res) => {
        col.findOne({test_id: 1}, function(err, document) {
            console.log(document)
            res.send(document);
          });
    });
 }