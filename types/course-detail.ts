export type Speaker = {
  name: string;
  title?: string;
}

export type AgendaItem = {
  time: string;
  title: string;
  speaker?: string;
  topics?: string[];
}

export type Testimonial = {
  quote: string;
  author: string;
}

export type AccreditationBenefit = {
  text: string;
}

export type Accreditation = {
  title: string;
  logo: string;
  description: string;
  benefits: AccreditationBenefit[];
}

export type RelatedCourse = {
  title: string;
  link: string;
}

export type CourseData = {
  title: string;
  type: string;
  venue: string;
  registrationForm?: string;
  description: string | string[];
  overview?: string | string[];
  speakers?: Speaker[];
  outcomes: string[];
  agenda: AgendaItem[];
  testimonials?: Testimonial[];
  videoUrl?: string;
  accreditation?: Accreditation;
  relatedCourses?: RelatedCourse[];
}

export type Props = {
  course: CourseData;
  backLink?: string;
  backText?: string;
  headerImage?: string;
}