// Create a sanity body base interface
interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference"
    };
}

export interface HomeInfo extends SanityBody {
    _type: 'pageInfo';
    address: string;
    backgroundInfromation: string;
    email: string;
    name: string;
    profilePic: Image;
    role: string;
    socials: string[]
}

export interface Social extends SanityBody {
    _type: "socials";
    title: string;
    url: string
}

export interface Skill extends SanityBody {
    _type: "skill";
    logoTech: Image;
    technology: Image;
    progess: number;
    title: string;
}

export interface Experience extends SanityBody {
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: date;
    nature: string;
    role: string;
    dateEnded: date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Skill[]
}

export interface Technology extends SanityBody {
    _type: "technology";
    image: Image;
    progess: number;
    title: string;
}

export interface Project extends SanityBody {
    _type: "project";
    title: string;
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Technology[]
}