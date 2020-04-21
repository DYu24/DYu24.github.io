import dottLogo from '../../resources/dott-logo.png';
import sqmLogo from '../../resources/sqm-logo.png';
import caeLogo from '../../resources/cae-logo.png';

const jobs = [
    {
        company: 'Dott',
        position: 'Software Engineer Intern',
        period: 'May 2019 - August 2019',
        src: dottLogo,
        description: `Dott is a European micro-mobility ridesharing startup based in Amsterdam. 
        At the company, I worked as a backend engineer on the platform and was responsible for 
        developing and maintaining features for the core functionality of the business (e.g. 
        vehicle parts management, payments).`,
        url: 'https://ridedott.com/',
        technologies: ['TypeScript', 'Node.Js', 'Google Cloud Platform'],
    },
    {
        company: 'Square-Enix Montreal',
        position: 'Intern Programmer',
        period: 'May 2018 - August 2018',
        src: sqmLogo,
        description: `Square-Enix Montreal, a subsidiary of Square-Enix, is a mobile games studio
        that has developed critically acclaimed games such as Hitman Go and Lara Croft Go. As a 
        fullstack developer, I primarily worked on an internal web portal for game management and 
        metrics tracking, as well as secondary tooling for auto-generation of code and documentation.`,
        url: 'https://www.square-enix-montreal.com/',
        technologies: ['TypeScript', 'C#', 'Angular', 'ASP.NET'],
    },
    {
        company: 'CAE Inc.',
        position: 'Intern Developer',
        period: 'September 2017 - December 2017',
        src: caeLogo,
        description: `CAE specializes in the development of simulators for training in civil aviation,
         defence & security, and for healthcare. I was part of the platform team and developed an automated 
         solution to build and deploy customized OS images for simulator computers. This helped to drastically 
         decrease maintenance and deployment time of these images as the majority of manual work had been cut away.`,
        url: 'https://www.cae.com/',
        technologies: [
            'PowerShell',
            'Batch',
            'VBScript',
            'Microsoft Deployment Toolkit',
        ],
    },
];

export default jobs;
