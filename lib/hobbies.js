var hobbiesList = [
    'Consider crochet!',
    'Why not knit?',
    'Read books to children at the library.',
    'Paint miniatures.',
    'Become a master gardener.',
    'Quilting: not just for old ladies.',
    'I know a guy who buys used dolls, removes their heads, and plants cacti in them. Do with this information what you will.',
    'Perhaps the ancient and elegant art of origami is your niche?',
    'If you are brave, scuba dive, sky dive, or start a synchronized swimming team.',
    'Make Indian food. (And invite me over.)',
    'Grab a fancy pen and take up calligraphy. It looks pretty hard, but without other hobbies, it sounds like you have some free time.',
    'Write songs.',
    'Digital photography is affordable and can be done anywhere.',
    'Give classical guitar concerts to your cats.',
    'Read books on historical linguistics. Learn Icelandic folk songs on the mandolin. Translate Tarkan\'s music from Turkish to English. (If any of these sound appealing, contact me. We could be besties.)',
    'Study a new language. Or invent one! A monolingual brain is a boring brain.',
    'Zentangling. Seriously. Google it.',
    'Table top RPGs. Magic cards. Munchkin. The world is full of fun and intellectually engaging nerdery.',
    'Some people say mountain biking is fun. I don\'t believe them.',
    'Badminton. It\'s more hardcore than it sounds.',
    'Go geocaching, mountaineering, orienteering.',
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
    'Amateur geology. Safer than amateur surgery.'
];

var tempHobbiesList = hobbiesList.slice(0);


function randomHobby () {
    var hobby = tempHobbiesList[Math.floor(Math.random()*tempHobbiesList.length)];
    var index = tempHobbiesList.indexOf(hobby);
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
