import React from "react";
import Section from "../components/goSocials/Section";
import data from "../constants/SocialData.json";
import { Topic } from "../components/goSocials/TopicCard";

const GoSocial = () => {
  const { topics, popularTopics, businessPages } = data as {
    topics: Topic[];
    popularTopics: Topic[];
    businessPages: Topic[];
  };

  return (
    <div className="flex flex-col gap-8 p-4">
      <Section title="My Topics" topics={topics} cols={2} searchBar />
      <Section title="Popular Topics" topics={popularTopics} cols={3} />
      <Section title="Business Pages" topics={businessPages} cols={3} />
    </div>
  );
};

export default GoSocial;
