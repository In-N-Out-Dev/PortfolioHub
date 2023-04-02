const SKILLS_DATA: SkillData[] = [
  {
    category: 'Category 1',
    skills: [
      { skill: 'React', highlight: true },
      { skill: 'Redux', highlight: true },
      { skill: 'Node.js', highlight: false },
      { skill: 'Next.js', highlight: false },
      { skill: 'Recoil', highlight: false },
      { skill: 'Zustand', highlight: false },
    ],
  },
  {
    category: 'Category 2',
    skills: [
      { skill: 'React', highlight: true },
      { skill: 'Redux', highlight: true },
      { skill: 'Highlight 1', highlight: true },
      { skill: 'Highlight 2', highlight: true },
      { skill: 'Node.js', highlight: false },
      { skill: 'Next.js', highlight: false },
      { skill: 'Recoil', highlight: false },
      { skill: 'Zustand', highlight: false },
    ],
  },
];

export interface Skill {
  skill: string;
  highlight: boolean;
}

export interface SkillData {
  category: string;
  skills: Skill[];
}

export default SKILLS_DATA;
