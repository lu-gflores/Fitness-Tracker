const monogoose = require("mongoose");
const Schema = monogoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                require: true,
            },
            name: {
                type: String,
                require: true,
                trim: true
            },
            duration: {
                type: Number,
                require: true,
                trim: true,
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            }
        }
    ]
});
const Workout = monogoose.model("Workout", WorkoutSchema);
module.exports = Workout;
