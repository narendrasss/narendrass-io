module.exports = {
    title: 'Narendra Syahrasyad',
    description: "A collection of notes for various computer science, commerce, and math courses in UBC.",
    themeConfig: {
        nav: [
            {
                text: 'About',
                link: '/about/'
            },
            {
                text: 'Blog',
                items: [
                    {
                        text: 'Finance App',
                        link: '/blog/finance-app/'
                    }, 
                    {
                        text: 'Hacker Rank',
                        link: '/blog/hacker-rank/'
                    }
                ]
            },
            {
                text: 'UBC',
                items: [
                    {
                        text: 'CPSC',
                        items: [
                            { text: '317', link: '/cpsc/317/m01' },
                            { text: '320', link: '/cpsc/320/m01' },
                        ]
                    }
                ]
            },
            {
                text: 'Javascript',
                items: [
                    { 
                        text: 'The Hard Parts', 
                        link: '/javascript/the-hard-parts/m01' 
                    },
                    {
                        text: 'Deep Javascript Foundations',
                        link: '/javascript/deep-foundations/m01'
                    },
                    {
                        text: 'React',
                        link: '/javascript/react/m01'
                    }
                ]
            }
        ],
        sidebar: {
            '/blog/hacker-rank/': [
                {
                    title: 'Warm-up Challenges',
                    collapsable: false,
                    children: [
                        'm00/p01',
                        'm00/p02',
                        'm00/p03',
                        'm00/p04'
                    ]
                }
            ],
            '/cpsc/317/': [
                { title: 'CPSC 317', collapsable: false },
                'm01',
                'm02',
                'm03',
                'm04',
                { title: 'Assignments', collapsable: false },
                'a2'
            ],
            '/cpsc/320/': [
                { title: 'CPSC 320', collapsable: false },
                'm00',
                'm01',
                'm02',
                'm03',
                'm04',
                'm05',
                { title: 'Assignments', collapsable: false }
            ],
            '/javascript/the-hard-parts/': [
                { title: 'JS - The Hard Parts', collapsable: false },
                'm01',
                'm02',
                'm03',
                'm04'
            ],
            '/javascript/deep-foundations/': [
                { title: 'Deep Javascript Foundations', collapsable: false },
                'm01',
                'm02',
                'm03',
                'm04',
                'm05',
                'm06'
            ]
        }
    }
}