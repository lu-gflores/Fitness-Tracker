const db = require("../models");

module.exports = function (app) {
    //get all workoutes
    app.get('/api/workouts', (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err)
            });
    });

    //create a new workout plan
    app.post("/api/workouts", ({body}, res) => {
        db.Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        })
    });

    //update previous workout plan
    app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate(
        {_id: req.params.id}, {$push: {exercises: req.body }}, (err, updateWorkout) => {
            if (err) res.status(500).json(err);
            res.json(updateWorkout);
        });
    });
    //logging multiple exercises

    //track exercise
}