const resumeData = {
    firstName: 'Dev',
    lastName: 'Kumar',
    links: [
        { name: 'Linkedin', link: '#' },
        { name: 'Github', link: '#' },
        { name: 'Leetcode', link: '#' },
        { name: 'Portfolio', link: '#' }
    ],
    address: '525 N Tryon Street, NC 28117',
    phone: '+91-1234567890',
    email: 'example@gmail.com',
    themeColor: "#000000", // Changed to valid hex color
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
                'Designed, developed, and maintained full-stack applications using React and Node.js.',
                'Implemented responsive user interfaces with React, ensuring seamless user experiences across various devices and browsers.',
                'Maintained the React Native in-house organization application.',
                'Created RESTful APIs with Node.js and Express, facilitating data communication between the front-end and back-end systems.'
            ]
        },
        {
            id: 2,
            title: 'Frontend Developer',
            companyName: 'Google',
            city: 'Charlotte',
            state: 'NC',
            startDate: 'May 2019',
            endDate: 'Jan 2021',
            currentlyWorking: false,
            workSummary: [
                'Designed, developed, and maintained full-stack applications using React and Node.js.',
                'Implemented responsive user interfaces with React, ensuring seamless user experiences across various devices and browsers.',
                'Maintained the React Native in-house organization application.',
                'Created RESTful APIs with Node.js and Express, facilitating data communication between the front-end and back-end systems.'
            ]
        }
    ],
    education: [
        {
            id: 1,
            universityName: 'Western Illinois University',
            startDate: 'Aug 2018',
            endDate: 'Dec 2019',
            degree: 'Master',
            major: 'Computer Science',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
        },
        {
            id: 2,
            universityName: 'Western Illinois University',
            startDate: 'Aug 2018',
            endDate: 'Dec 2019', // Removed colon
            degree: 'Master',
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

export default resumeData; // Exporting the variable
