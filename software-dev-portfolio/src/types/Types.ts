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
    description: string;
    year: string;
    video?: string;
}

export type ProjectProps = {
    project: ProjectData;
}

export type CaseStudyProps = {
    caseStudy: CaseStudyData;
    onClose: () => void;
}