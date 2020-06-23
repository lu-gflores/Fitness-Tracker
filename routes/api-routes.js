const db = require("../models");

module.exports = function (app) {
    //get all workoutes
    app.get('/api/workout', (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err)
            });
    });

    //create a new workout plan


    //update previous workout plan

    //logging multiple exercises

    //track exercise
}