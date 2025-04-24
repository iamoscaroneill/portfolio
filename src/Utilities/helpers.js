import resume from '../assets/documents/oscaroneillResume.pdf'
import { image, icons } from '../Utilities/images'

export const menuItems = [
    {
        title: 'Projects',
        link: '/projects'
    },
    {
        title: 'About Me',
        link: '/'
    },
    {
        title: 'Resume',
        link: 'https://docs.google.com/document/d/1c1BDl4lJi5I3eA3Q9-4j5lGomsrT8cTdQpWsTXqGDyQ/edit?usp=sharing'
    },
    {
        title: 'Contact',
        link: 'mailto:oeoneil1@asu.edu'
    },
    // {
    //     title: 'Blog',
    //     link: 'https://oscaroneill.tech/blog'
    // }
]

export const projects = [
    {
        title: 'Change The Game',
        memo: "Quiz that determines one's knowledge on Roc-A-Fella Records",
        image: image.changethegame,
        tech: [
            {
                language: 'React',
                icon: icons.react
            },
            {
                language: 'TypeScript',
                icon: icons.typescript
            }
        ],
        github: 'https://github.com/oscar-oneill/changethegame',
        website: 'https://change-the-game.netlify.app'
    },
    {
        title: 'NYC Property Data Search',
        memo: "Search for an address' property data",
        image: image.nycbuildings,
        tech: [
            {
                language: 'React',
                icon: icons.react
            },
            {
                language: 'Node',
                icon: icons.node
            },
            {
                language: 'Express',
                icon: icons.express
            },
            {
                language: 'Puppeteer',
                icon: icons.puppeteer
            }
        ],
        github: 'https://github.com/oscar-oneill/NYC-Lot-Search',
        website: 'https://nycbuildings.vercel.app'
    },
    {
        title: 'Splashgram',
        memo: 'An Instagram styled Unsplash viewer',
        image: image.splashgram,
        tech: [
            {
                language: 'React',
                icon: icons.react
            },
            {
                language: 'Unsplash.js',
                icon: icons.unsplash
            },
            {
                language: 'Node',
                icon: icons.node
            },
            {
                language: 'Express',
                icon: icons.express
            }
        ],
        github: 'https://github.com/oscar-oneill/splashgram',
        website: 'https://splashgram.netlify.app',
    },
    {
        title: 'Switch',
        memo: 'Get the best swap options when trading crypto',
        image: image.switchswap,
        tech: [
            {
                language: 'React',
                icon: icons.react
            },
            {
                language: 'TypeScript',
                icon: icons.typescript
            },
            {
                language: 'web3.js',
                icon: icons.web3
            },
        ],
        github: 'https://github.com/oscar-oneill/switchswap',
        website: 'https://switchswapcrypto.netlify.app/',
    },
    {
        title: 'yesterday.',
        memo: 'Listen to music and read lyrics in a beautiful interface',
        image: image.yesterday,
        tech: [
            {
                language: 'React',
                icon: icons.react
            }
        ],
        github: 'https://github.com/oscar-oneill/yesterday-redesign',
        website: 'https://yesterday.netlify.app',
    },
    {
        title: 'Retro Tetris',
        memo: 'Mintbean Hackathon Project for August 2021',
        image: image.tetris,
        tech: [
            {
                language: 'React',
                icon: icons.react
            },
        ],
        github: 'https://github.com/oscar-oneill/tetris',
        website: 'https://retrotetris.vercel.app',
    },
    // {
    //     title: "Oscar's Blog",
    //     memo: 'My Web Development Blog',
    //     image: image.blog,
    //     tech: [
    //         {
    //             language: 'React',
    //             icon: icons.react
    //         },
    //         {
    //             language: 'Node',
    //             icon: icons.node
    //         },
    //         {
    //             language: 'Express',
    //             icon: icons.express
    //         },
    //         {
    //             language: 'MongoDB',
    //             icon: icons.mongoDB
    //         }
    //     ],
    //     github: 'https://github.com/oscar-oneill/portfolio',
    //     website: 'https://oscaroneill.tech/blog',
    // },

]

export const skills = [
    {
        skill: 'HTML',
        icon: icons.html,
    },
    {
        skill: 'CSS',
        icon: icons.css,
    },
    {
        skill: 'JavaScript',
        icon: icons.javascript,
    },
    {
        skill: 'TypeScript',
        icon: icons.typescript,
    },
    {
        skill: 'React',
        icon: icons.react,
    },
    {
        skill: 'Node',
        icon: icons.node,
    },
    {
        skill: 'Express',
        icon: icons.express,
    },
    {
        skill: 'MongoDB',
        icon: icons.mongoDB,
    },
    {
        skill: 'MySQL',
        icon: icons.mysql,
    },
    {
        skill: 'PostgreSQL',
        icon: icons.postgreSQL,
    },
    {
        skill: 'Docker',
        icon: icons.docker,
    },
    {
        skill: 'Git',
        icon: icons.git,
    },
]

export const contacts = [
    {
        service: 'LinkedIn',
        url: 'https://www.linkedin.com/in/oscarone/',
        icon: icons.linkedin
    },
    {
        service: 'GitHub',
        url: 'https://github.com/oscar-oneill',
        icon: icons.github
    },
    {
        service: 'X',
        url: 'https://twitter.com/itsoscarlavista',
        icon: icons.twitter
    }

]