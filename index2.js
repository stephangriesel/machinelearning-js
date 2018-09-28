const brain = require('brain.js');
const data = require ('./data.json');

const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
    input: item.text,
    output: item.category
}));


network.train(trainingData, {
    iterations: 2000 // by default more iterations, add custom config option
});

// const output = network.run("i brushed the dog");
const output = network.run("do you walk dogs");


console.log(`Category: ${output}`);