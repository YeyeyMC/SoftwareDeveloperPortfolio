export type Link = {
    id: number;
    name: string;
    url: string;
}

export type Tag = {
    id: number;
    name: string;
}

export type ProjectData = {
    id: number;
    title: string;
    img: string;
    description: string;
    year: string;
    category: "games" | "web" | "mobile";
    caseStudy: CaseStudyData;
    links?: Link[];
    tags?: Tag[];
}

export type CaseStudyData = {
    id: number;
    title: string;
    img: string;
    descriptions?: CaseStudyDescriptionData[];
    year: string;
    video?: string;
}

export type CaseStudyDescriptionData = {
    id: number;
    title: string;
    description?: string;
    decisions?: string;
}

export type EducationData = {
    id: number;
    title: string;
    img: string;
    school: string;
    duration: string;
    description: string;
    url?: string;
}

export type ProjectProps = {
    project: ProjectData;
}

export type EducationProps = {
    education: EducationData;
}

export type CaseStudyProps = {
    caseStudy: CaseStudyData;
    onClose: () => void;
}