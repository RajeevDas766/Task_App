declare module "@/constants/SocialData.json" {
  const value: {
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
  export default value;
}
