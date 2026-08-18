import { Atom, BarChart3, BookOpen, Brain, Calculator, Code2, FlaskConical, HeartPulse, PenLine, type LucideIcon } from 'lucide-react';

export interface Subject { slug: string; title: string; topicCount: number; icon: LucideIcon; accent: string; }
export const subjects: Subject[] = [
  { slug: 'anatomy-physiology', title: 'Anatomy & Physiology', topicCount: 42, icon: HeartPulse, accent: 'coral' },
  { slug: 'psychology', title: 'Psychology', topicCount: 38, icon: Brain, accent: 'lilac' },
  { slug: 'math-statistics', title: 'Math & Statistics', topicCount: 55, icon: Calculator, accent: 'gold' },
  { slug: 'academic-writing', title: 'Academic Writing', topicCount: 31, icon: PenLine, accent: 'teal' },
  { slug: 'biology', title: 'Biology', topicCount: 46, icon: Atom, accent: 'green' },
  { slug: 'chemistry', title: 'Chemistry', topicCount: 40, icon: FlaskConical, accent: 'blue' },
  { slug: 'computer-science', title: 'Computer Science', topicCount: 35, icon: Code2, accent: 'purple' },
  { slug: 'business-finance', title: 'Business & Finance', topicCount: 28, icon: BarChart3, accent: 'orange' },
];

/** Bucket A taxonomy is intentionally separate from the curated homepage grid. */
export const bucketSubjects = [
  { slug: 'anatomy-physiology', title: 'Anatomy & Physiology' }, { slug: 'biology', title: 'Biology' },
  { slug: 'cell-biology', title: 'Cell Biology' }, { slug: 'general-chemistry', title: 'General Chemistry' },
  { slug: 'organic-chemistry', title: 'Organic Chemistry' }, { slug: 'biochemistry', title: 'Biochemistry' },
  { slug: 'microbiology', title: 'Microbiology' }, { slug: 'genetics', title: 'Genetics' }, { slug: 'physics', title: 'Physics' },
  { slug: 'psychology', title: 'Psychology' }, { slug: 'nutrition', title: 'Nutrition' }, { slug: 'public-health', title: 'Public Health' },
  { slug: 'statistics', title: 'Statistics & Evidence-Based Practice' }, { slug: 'medical-terminology', title: 'Medical Terminology' },
  { slug: 'healthcare-communication', title: 'Healthcare Communication' }, { slug: 'ethics-professionalism', title: 'Ethics & Professionalism' },
  { slug: 'patient-safety', title: 'Patient Safety & Infection Prevention' },
] as const;

export const steps = [
  ['01', 'Pick a topic', 'Choose what is confusing you.'],
  ['02', 'Learn the college version', 'Clear explanations and real vocabulary.'],
  ['03', 'Try Eli-10', 'A simple explanation that makes it click.'],
] as const;

export const trustCards = [
  { icon: BookOpen, title: 'Open educational references', text: 'Sources and licensing details are clear on every topic.' },
  { icon: PenLine, title: 'Original, student-friendly lessons', text: 'Built around the way college students actually study.' },
  { icon: HeartPulse, title: 'Reviewed and updated', text: 'Space for a transparent last-reviewed date on every lesson.' },
];

export const quiz = { id: 'hypothesis', question: 'Which statement best describes a hypothesis?', answers: [
  'A. A proven fact that will never change.', 'B. An educated guess that can be tested.', 'C. A summary of past research.'
], correct: 1, explanation: 'A hypothesis is a testable prediction—not a conclusion.' };
