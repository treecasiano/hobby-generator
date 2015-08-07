var hobbiesList = [
    'Consider crochet!',
    'Why not knit?',
    'Read books to children at the library.',
    'Learn to paint.',
    'Become a master gardener.',
    'You could learn to sew!',
    'Quilting: not just for old ladies.',
    'I know a guy who buys used dolls, removes their heads, and plants cacti in them. Do with this information what you will.',
    'Perhaps the ancient and elegant art of origami is your niche?',
    'If you are brave, you could commune with the fishies and try scuba diving.',
    'Take a cooking class.',
    'Grab a fancy pen and take up calligraphy. It looks pretty hard, but without other hobbies, it sounds like you have some free time.',
    'Got a good ear and a knack for telling stories? Why not try writing songs?',
    'Digital photography is affordable and can be done anywhere.',
    'Classical guitar has seduced many musicians. Perhaps you could be one of them.',
    'Jazz piano?',
    'Learn a new language. A monolingual brain is a boring brain.',
    'If you don\'t mind the calories, baking can be a lot of fun. It\'s the hobby you can eat!',
    'Zentangling. Seriously. Google it.',
    'Doting on orchids is a passion for some.',
    'Table top RPGs. Magic cards. Munchkin. The world is full of fun and intellectually engaging nerdery.',
    'Some people say mountain biking is fun. I don\'t believe them.',
    'Badminton. Even if you suck, it\'s a fun way to burn calories.',
    'Explore the great outdoors with geocaching or mountaineering.',
    'I would recommend camping, but I don\'t like to go without indoor plumbing or wifi for too long. Perhaps this is not the case with you.',
    'Volunteer for one of the hundreds of worthy causes. If you cannot think of anything, perhaps you are not really a good person, and you should work on that first.',
    'Competitive eating.',
    'Argentine Tango. Bhangra. Breakdancing. Clogging. Move your skeleton!',
    'Flugtag.',
    'Cosplay. Coloring. Cooking. Cryptography.',
    'Baton twirling. It is not too late to fulfill your sixth grade dream! (Didn\'t we all have batons in sixth grade?)',
    'Buy a home trepanning kit. Actually, don\'t do that. That is a very bad idea. Also, do not look it up on YouTube. You will thank me. Sorry I mentioned it.',
    'Archery.',
    'Mycology! Fun with fungus!',
    'Parkour. (Make sure you have good health insurance first.)',
    'Tai Chi.',
    'Running. I think people who run for fun are quite insane, but they are also quite thin.',
    'Gongoozling is a thing. I had to look it up, too.',
    'Herping. It\'s not what it sounds like.',
    'Wind surfing.',
    'Amateur geology. Safer than amateur surgery.'
];

    var tempHobbiesList = hobbiesList.slice(0);


function randomHobby () {
    var hobby = tempHobbiesList[Math.floor(Math.random()*tempHobbiesList.length)];
    index = tempHobbiesList.indexOf(hobby);
    if (index > -1) {
        tempHobbiesList.splice(index, 1);
        console.log(tempHobbiesList);
        console.log(tempHobbiesList.length);
    } else {
        tempHobbiesList = hobbiesList.slice();
        return "The Hobby Generator is out of ideas for now. Grab some yarn or a skateboard or a dance partner and get busy or CLICK TO RESTART.";
    }
    return hobby;
}

module.exports = randomHobby;
