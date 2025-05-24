import Section from "../components/goSocials/Section";
import SocialData from "../constants/SocialData.json"

export default function GoSocial() {
  return (
    <div
      style={{
        padding: "16px",
        gap: "32px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Section title="My Topics" topics={SocialData.topics} cols={2} searchBar={true}  />
      <Section title="Popular Topics" topics={SocialData.popularTopics} cols={3}  />
      <Section title="Business Pages" topics={SocialData.businessPages} cols={3} />
    </div>
  );
}
