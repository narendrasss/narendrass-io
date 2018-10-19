module.exports = {
    title: 'BUCS Notes',
    description: "A collection of notes for various computer science, commerce, and math courses in UBC.",
    themeConfig: {
        nav: [
            {
                text: 'CPSC',
                items: [
                    { text: '317', link: '/cpsc/317/m01' },
                    { text: '320', link: '/cpsc/320/m00' },
                ]
            },
        ],
        sidebar: {
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
            ]
        }
    },
    markdown: {
        lineNumbers: true
    }
}