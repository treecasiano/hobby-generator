var hobbiesList = [
    'Consider crochet!',
    'Why not knit?',
    'Read books to children at the library.',
    'Even grown men enjoy model trains.',
    'I hear painting with water colors is fun.',
    'You could learn to sew!',
    'Perhaps the ancient and elegant art of oragami is up your alley?',
    'If you are brave, you could commune with the fishies and try scuba diving.',
    'Take a cooking class.',
    'Grab a fancy pen and take up the art of calligraphy.',
    'Got a good ear and a knack for telling stories? Why not try writing songs?',
    'Digital photography is affordable and can be done anywhere.',
    'Classical guitar has seduced many musicians. Perhaps you could be one of them.',
    'Jazz piano?',
    'If you don\'t mind the calories, baking can be a lot of fun. It\'s the hobby you can eat!',
    'Zentangling. Seriously. Google it.',
    'Doting on orchids can be rewarding.',
    'Some people say mountain biking is fun. I don\'t believe them.',
    'Badminton. It\'s almost like a sport, and even if you suck, you can burn calories.',
    'Explore the great outdoors with geocaching.'
];

function randomHobby () {
    var hobby = hobbiesList[Math.floor(Math.random()*hobbiesList.length)];
    console.log(hobby)
    return hobby;
}

module.exports = randomHobby;