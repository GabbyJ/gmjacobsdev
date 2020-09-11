const jobs = [
    {
        id: 1,
        date: "11/2019 - Present",
        position: "Digital Content Lead",
        company: "Wieck Media",
        description: [
            "Fixed bugs and added website features to production 80% quicker than average by streamlining the ticketing process",
            "Improved the design and function of custom pages by adding CSS/ JS customizations",
            "Achieved a 1-on-1 line of communication for all 6 Wordpress clients to provide assistance and maintenance 50% faster",
            "Created custom templates from stage to production 60% quicker by both streamlining the ticketing process and providing customization knowledge others lack"
        ],
        keywords: ["HTML", "CSS", "Debugging", "Design", "Team\xa0Management", "Wordpress", "Custom\xa0Email\xa0Templates", "Problem\xa0Solving"]
    },
    {
        id: 2,
        date: "6/2017 - 11/2019",
        position: "Content Management Specialist",
        company: "Wieck Media",
        description: [
            "1 of 4 employees responsible for updating 15+ websites with releases, social media, images, videos, and graphics",
            "Provide internal and external support with an average 30 min turn around for multiple major car, health, and news corporations, an airline, and others",
            "Informed thousands of people on important corporate news within 30 mins through custom email blasts for 10+ countries/divisions"
        ],
        keywords: ["HTML", "CSS", "Web\xa0Maintenance", "E-blasts", "Multimedia", "Photoshop", "Teamwork"]
    },
    {
        id: 3,
        date: "6/2015 - 12/2015",
        position: "Intern",
        company: "Shoutside Media",
        description: [
            "Built and maintained 3 Wordpress sites for lawyers and doctors",
            "Responsible for recording professional quality commercials and stock footage for 5 local companies",
            "Improved video editing techniques using Adobe Premiere and After Effects"
        ],
        keywords: ["HTML", "CSS", "Wordpress", "Video\xa0shooting/editing", "Photography", "Networking", "Multimedia", "Adobe\xa0Creative\xa0Suite"]
    },
    {
        id: 4,
        date: "07/2011 – 11/2016",
        position: "Customer Service",
        company: "Fast food, Retail, Amusement Park",
        description: [
            "Responsible for handling over $500 a day",
            "Successfully sold 3x more credit cards than the average salesperson",
            "Managed floor inventory and sanitary guidelines",
            "Ensure all safety measures stayed in place to prevent injury"
        ],
        keywords: ["Customer\xa0Service", "Money\xa0Management", "Sales", "Crisis\xa0Management"]
    }
];

const education = [
    {
        id: 1,
        date: "6/2019 – In Progress...",
        degree: "MERN Fullstack Certificate",
        school: "Udemy",
        description: "Self pace course focused on React, Node, Express, and MongoDB.",
        keywords: ["HTML", "CSS", "Bootstrap ", "Javascript (ES6)", "jQuery", "Node", "Express", "APIs", "EJS", "SQL", "MongoDB", "Mongoose", "Authentication/Security"],
        
    },
    {
        id: 2,
        date: "8/2012 - 1/2016",
        degree: "B.S. Graphic Communications and Multimedia",
        school: "California University of Pennsylvania",
        description: "Focused on Adobe Creative Suite for web, photography, video, design layout, and image manipulation. Learned printing techniques for various mediums.",
        keywords: ["HTML", "CSS", "Photoshop", "Dreamweaver", "Indesign", "Illustrator", "Adobe\xa0Premiere", "Design\xa0Layout", "Graphic\xa0Design", "Screen\xa0Printing", "Lithography", "Flexography"]
    },
    {
        id: 3,
        date: "8/2008 - 5/2012",
        degree: "High School Diploma",
        school: "Penn Hills Senior High School",
        keywords: ["Statistics", "Calculus", "Visual\xa0Basic\xa0Computer\xa0Programming"]
    },
    {
        id: 4,
        date: "8/2018 - Present",
        degree: "Responsive Web Design Certification",
        school: "FreeCodeCamp",
        description: "Self paced path to a Fullstack Developer. Used as supplement material for Udemy course.",
        keywords: ["HTML", "CSS", "Accessability", "ES6", "Bootstrap", "jQuery", "Sass", "React"]
    }
    
];

const services = [
    {
        id: 1,
        image: "fas fa-paint-brush",
        service:"Web Design",
        description: "I value simple content structure, clean design patterns, and thoughtful interactions.",
        subtitle1: "Things I enjoy designing:",
        subDescription1: "UX, UI, Web, Mobile, Apps, Logos",
        subtitle2: "Design Tools:",
        subDescription2: ["Adobe XD", "Figma", "Adobe Illustrator", "Pen & Paper", "Photoshop", "Webflow"]
    },
    {
        id: 2,
        image: "fas fa-code",
        service:"Web Development",
        description:"I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
        subtitle1: "Languages I speak:",
        subDescription1: "HTML, Bootstrap, CSS, Sass, Javascript, React",
        subtitle2: "Dev Tools:",
        subDescription2: ["Visual Studio Code", "Git/Github", "Terminal", "Codepen", "Wordpress"]
    },
    {
        id: 3,
        image: "fas fa-camera",
        service:"Photography",
        description:"I enjoy capturing moments that can be kept for a lifetime.",
        subtitle1: "Experiences I draw from:",
        subDescription1: "Traveling, Events, Ceremonies",
        subtitle2: "Photography Tools:",
        subDescription2: ["Photoshop", "Lightroom", "HD Camera"]
    }/*,
    {
        id: 4,
        image: "fas fa-camera",
        service:"Marketing",
        description:"I enjoy capturing moments that can be kept for a lifetime.",
        subtitle1: "How I spread the word:",
        subDescription1: "Accessibility, Analytics, Search Engine Optimization, Email Blasts",
        subtitle2: "Marketing Tools:",
        subDescription2: ["W3C", "Google Analytics", "Yoast SEO", "Mailchimp", " ", " "]
    }*/
];

const portfolio = [
    {
        id: 1,
        image: "./images/portfolio-images/island-resort-mockup.jpg",
        // https://i.ibb.co/xSjbz3B/Nobody-is-better-at-motherhood-than-you-2.jpg
        title: "Resort Rooms Website",
        description: "Find the perfect room to stay in during your relaxing island resort vacation!",
        tech: ["React\xa0(Hooks)", "CSS\xa0(Flexbox,\xa0Grid)", "Javascript", "Headless CMS"],
        github: "https://github.com/GabbyJ/island-resorts-cms",
        codepen: "",
        link: "https://island-resort-cms.netlify.app"
    },
    {
        id: 2,
        image: "./images/portfolio-images/blackjack-mockup.jpg",
        // "https://i.ibb.co/GdGbqrm/zora.jpg"
        title: "Blackjack",
        description: "You against the dealer. Get as close to 21 as you can.",
        tech: ["HTML", "CSS\xa0(Flexbox)", "Javascript"],
        github: "https://github.com/GabbyJ/Blackjack",
        codepen: "",
        link: "https://gabbyj.github.io/Blackjack/"
    },
    {
        id: 3,
        image: "./images/portfolio-images/office-mockup.jpg",
        // https://i.ibb.co/j6TQw5f/office.jpg
        title: "Random Quote Generator",
        description: "Random quote generator created using characters from The Office and their famous quotes.",
        tech: ["HTML", "CSS\xa0", "Javascript"],
        github: "https://github.com/GabbyJ/Office-Quote-Generator",
        codepen: "",
        link: "http://htmlpreview.github.io/?https://github.com/GabbyJ/Office-Quote-Generator/blob/master/index.html"
    },
    {
        id: 4,
        image: "./images/portfolio-images/hangman-mockup.jpg",
        // https://i.ibb.co/W3v7t0D/hangman.jpg
        title: "Hangman",
        description: "Name your hangman and try keeping them alive by guessing the word.",
        tech: ["Python"],
        github: "https://github.com/GabbyJ/Python",
        codepen: "",
        link: "https://trinket.io/python/1dbf3ceef6?outputOnly=true"
    },
    {
        id: 5,
        image: "./images/portfolio-images/nextchapter-mockup.jpg",
        // https://i.ibb.co/PZNRRGd/saxes.jpg
        title: "Travel Website",
        description: "Search by destinations or activities to find your perfect trip! Organized group or solo trips with easy payment. Book Now!",
        tech: ["Wordpress", "HTML", "CSS\xa0"],
        github: "https://github.com/GabbyJ/nextchaptertravel",
        codepen: "",
        link: "https://nextchaptertravel.com"
    },
    {
        id: 6,
        image: "./images/portfolio-images/tindog-mockup.jpg",
        // https://i.ibb.co/sHbCGRX/tindog.jpg
        title: "App Landing Page",
        description: "Is your dog lonely? Help them find a friend with TinDog.",
        tech: ["HTML", "CSS\xa0", "Bootstrap"],
        github: "https://github.com/GabbyJ/TinDog",
        codepen: "",
        link: "https://gabbyj.github.io/TinDog/"
    },
];

const pricing = [
    {
        id: 1,
        package: "Basic",
        disclaimer: "Starting at",
        price: "$2300",
        description: "Up to 5 pages",
        items: ["2 Mockups", "Web Audit", "Design", "Development", "10 Stock Images", "1hr Maintenance Tutorial"],
        link: ""
    },
    {
        id: 2,
        package: "Standard",
        disclaimer: "Starting at",
        price: "$2600",
        description: "Up to 10 pages",
        items: ["Basic Services", "+ Backups", "+ Analytics", "+ Search Engine Optimization", "+ 20 Stock Images", "+ 2 hr Maintenance Tutorial"],
        link: ""
    },
    {
        id: 3,
        package: "Premium",
        disclaimer: "Starting at",
        price: "$3300",
        description: "Up to 20 pages",
        items: ["Standard Services", "+ Custom Emails", "+ 30 Stock Images", "+ 1 Hour Support", "+ 3 hr Maintenance Tutorial"],
        link: ""
    },
    {
        id: 4,
        package: "Custom",
        price: "Get Quote",
        description: "Pick and Choose from all services",
        items: [""],
        link: ""
    },
]




export { jobs, education, services, portfolio, pricing };