const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

const workoutSeed = [{
        day: new Date(new Date().setDate(new Date().getDate() - 9)),
        exercises: [{
            type: 'resistance',
            name: 'KROC ROWS',
            duration: 25,
            weight: 90,
            reps: 10,
            sets: 4,
        }, ],
    },
    {
        day: new Date(new Date().setDate(new Date().getDate() - 8)),
        exercises: [{
            type: 'resistance',
            name: 'RACK-PULLS',
            duration: 15,
            weight: 240,
            reps: 10,
            sets: 4,
        }, ],
    },
    {
        day: new Date(new Date().setDate(new Date().getDate() - 7)),
        exercises: [{
            type: 'resistance',
            name: 'OVERHEAD PRESS',
            duration: 20,
            weight: 80,
            reps: 10,
            sets: 4,
        }, ],
    },
    {
        day: new Date(new Date().setDate(new Date().getDate() - 6)),
        exercises: [{
            type: 'cardio',
            name: 'RUNNING',
            duration: 45,
            distance: 6,
        }, ],
    },
    {
        day: new Date(new Date().setDate(new Date().getDate() - 5)),
        exercises: [{
            type: 'resistance',
            name: 'BENCH PRESS',
            duration: 25,
            weight: 200,
            reps: 10,
            sets: 3,
        }, ],
    },
    {
        day: new Date(new Date().setDate(new Date().getDate() - 4)),
        exercises: [{
            type: 'resistance',
            name: 'BEHIND THE NECK PRESS',
            duration: 20,
            weight: 100,
            reps: 10,
            sets: 3,
        }, ],
    },
    {
        day: new Date(new Date().setDate(new Date().getDate() - 3)),
        exercises: [{
            type: 'resistance',
            name: 'FACE-PULLS',
            duration: 30,
            weight: 120,
            reps: 10,
            sets: 3,
        }, ],
    },
    {
        day: new Date(new Date().setDate(new Date().getDate() - 2)),
        exercises: [{
            type: 'resistance',
            name: 'ARNOLD PRESS',
            duration: 25,
            weight: 75,
            reps: 10,
            sets: 4,
        }, ],
    },
    {
        day: new Date(new Date().setDate(new Date().getDate() - 1)),
        exercises: [{
            type: 'resistance',
            name: 'DUMBBELL PRESS',
            duration: 20,
            weight: 255,
            reps: 10,
            sets: 3,
        }, ],
    },
];

db.Workout.deleteMany({})
    .then(() => db.Workout.collection.insertMany(workoutSeed))
    .then((data) => {
        console.log(data.result.n + ' records inserted!');
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });