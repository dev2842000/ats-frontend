const resumeData = {
    fullName: "Jon Doe",
    jobTitle:"Software Developer",
    links: [
        { name: 'Linkedin', link: '' , isChecked:false},
        { name: 'Github', link: '' , isChecked:false},
        { name: 'Leetcode', link: '' , isChecked:false},
        { name: 'Portfolio', link: '' , isChecked:false}
    ],
    phone: "+91-1111111111",
    email: "example@mail.com",
    themeColor: "#000000",
    summary: 'Experienced Software Developer with 2+ years of expertise in MERN stack, with strong logic-building skills. Proficient in GatsbyJS, NextJS, React-Native, and Python. Eager to leverage my skills to contribute to the growth of your company.',
    experience: [
        {
            id: 1,
            title: 'Full Stack Developer',
            companyName: 'Amazon',
            city: 'New York',
            state: 'NY',
            startDate: 'Jan 2021',
            endDate: '',
            currentlyWorking: true,
            workSummary: [
                'Utilized the MERN stack, Gatsby.js, Next.js, and React Native, resulting in a 20% increase in project efficiency.',
                'Ensured on-time delivery of 10+ projects by actively contributing to project management strategies, leading to a 15% reduction in project timelines.',
                'Collaborated cross-functionally to resolve 50+ complex technical challenges, fostering innovation and improving team efficiency by 30%.',
            ]
        },
        {
            id: 2,
            title: 'SDE',
            companyName: 'Google',
            city: 'New York',
            state: 'NY',
            startDate: 'Jan 2018',
            endDate: 'Jan 2021',
            currentlyWorking: false,
            workSummary: [
                'Utilized the MERN stack, Gatsby.js, Next.js, and React Native, resulting in a 20% increase in project efficiency.',
                'Ensured on-time delivery of 10+ projects by actively contributing to project management strategies, leading to a 15% reduction in project timelines.',
                'Collaborated cross-functionally to resolve 50+ complex technical challenges, fostering innovation and improving team efficiency by 30%.',
            ]
        },
    ],
    education: [
        {
            id: 1,
            universityName: 'Western Illinois University',
            startDate: 'Aug 2018',
            endDate: 'Dec 2019',
            degree: 'Master',
            completed: true,
            major: 'Computer Science',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
        },
        {
            id: 2,
            universityName: 'Western Illinois University',
            startDate: 'Aug 2018',
            endDate: 'Dec 2019', // Removed colon
            degree: 'Master',
            completed: false,
            major: 'Computer Science',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
        }
    ],
    skills: [
        { id: 1, name: 'Angular', rating: 80 },
        { id: 2, name: 'React', rating: 100 },
        { id: 3, name: 'MySql', rating: 80 },
        { id: 4, name: 'React Native', rating: 100 },
        { id: 5, name: 'Node.js', rating: 85 },
        { id: 6, name: 'JavaScript', rating: 90 },
        { id: 7, name: 'CSS', rating: 75 },
        { id: 8, name: 'HTML', rating: 95 },
        { id: 9, name: 'Express.js', rating: 80 },
        { id: 10, name: 'TypeScript', rating: 70 }
    ]
};

export default resumeData;
