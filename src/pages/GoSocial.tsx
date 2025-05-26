import Section from "../components/goSocials/Section";
import SocialData from "../constants/SocialData.json"
import { Topic } from "../components/goSocials/TopicCard"

interface SocialDataJson {
  topics: Topic[];
  popularTopics: Omit<Topic, 'icon'>[];
  businessPages: Omit<Topic, 'icon'>[];
}

export default function GoSocial() {
  const typedSocialData = SocialData as SocialDataJson;

  const transformTopic = (topic: Omit<Topic, 'icon'>, icon: Topic['icon']) => ({
    ...topic,
    icon
  });

  return (
    <div
      style={{
        padding: "16px",
        gap: "32px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Section title="My Topics" topics={typedSocialData.topics} cols={2} searchBar={true} />
      <Section title="Popular Topics" topics={typedSocialData.popularTopics.map(topic => transformTopic(topic, 'lightbulb'))} cols={3} />
      <Section title="Business Pages" topics={typedSocialData.businessPages.map(topic => transformTopic(topic, 'users'))} cols={3} />
    </div>
  );
}
