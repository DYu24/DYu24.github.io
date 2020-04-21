import smartboxLogo from '../../resources/smart-box-logo.png';
import rudatingLogo from '../../resources/rudating.png';
import tapOfWarLogo from '../../resources/TapOfWarLogo.png';
import captionThisLogo from '../../resources/caption-this-logo.png';
import chefPicLogo from '../../resources/chefpic-logo.png';
import wikipediaLogo from '../../resources/wikipedia-logo.png';

const projects = [
    {
        img: smartboxLogo,
        title: 'SmartBox Delivery',
        url: 'https://github.com/DYu24/smart-box',
        devpost: 'https://devpost.com/software/smartbox-delivery',
        description: `An end-to-end system that allows independent couriers to easily and securely deliver your 
        packages in smart mailboxes. First place winner at UOttaHack3.`,
        technologies: [
            'JavaScript',
            'Python',
            'Node.Js',
            'React',
            'Arduino',
            'Google Cloud Platform',
            'Solace PubSub+',
        ],
    },
    {
        img: rudatingLogo,
        title: 'RUDating',
        url: 'https://github.com/DYu24/rudating',
        devpost: 'https://devpost.com/software/rudating',
        description: `A speed dating web application where users have 2 minutes to converse, after which 
        they can decide whether or not they'd like to exchange contact information to keep talking.`,
        technologies: [
            'Python',
            'JavaScript',
            'Flask',
            'React',
            'Google Cloud Platform',
        ],
    },
    {
        img: tapOfWarLogo,
        title: 'Tap of War',
        url: 'https://github.com/DYu24/tap-of-war',
        devpost: 'https://devpost.com/software/tap-of-war',
        description: `A tug-of-war inspired game where users on opposing teams continuously tap to 
        dominate Nanoleaf light panels with their team's color.`,
        technologies: ['JavaScript', 'Node.Js', 'React'],
    },
    {
        img: wikipediaLogo,
        title: 'Wikipedia Android App',
        url: 'https://github.com/DYu24/big-wiki-crew',
        description: `A fork of the Wikipedia Android app with additional features such as image search,
        categorical browsing, and note taking. Academic project.`,
        technologies: ['Java', 'Android'],
    },
    {
        img: captionThisLogo,
        title: 'CaptionThis',
        url: 'https://github.com/DYu24/CaptionThis',
        description: `A website that allows users to post their own pictures and let the community come up 
        with fun and interesting captions. Academic project.`,
        technologies: ['JavaScript', 'Node.Js', 'React'],
    },
    {
        img: chefPicLogo,
        title: 'ChefPic',
        url: 'https://github.com/DYu24/ChefPic',
        devpost: 'https://devpost.com/software/chefpic',
        description: `An Android application that allows a user to take a picture of an unknown dish and 
        returns the name and recipe for that dish.`,
        technologies: ['Java', 'Android', 'IBM Watson'],
    },
];

export default projects;
