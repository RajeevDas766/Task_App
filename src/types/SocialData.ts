export interface Topic {
  icon: 'lightbulb' | 'users' | 'hospital' | 'graduation-cap' | 'activity' | 'store' | 'sprout';
  title: string;
  description: string;
  members?: string[];
}

export interface SocialData {
  topics: Topic[];
  popularTopics: Omit<Topic, 'icon'>[];
  businessPages: Omit<Topic, 'icon'>[];
}

// Create a type for the JSON data
export type SocialDataJson = {
  topics: Array<{
    title: string;
    description: string;
    icon: 'lightbulb' | 'users' | 'hospital' | 'graduation-cap' | 'activity' | 'store' | 'sprout';
    members?: string[];
  }>;
  popularTopics: Array<{
    title: string;
    description: string;
  }>;
  businessPages: Array<{
    title: string;
    description: string;
  }>;
};
