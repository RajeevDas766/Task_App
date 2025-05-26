import React from "react";
import Section from "../components/goSocials/Section";
import data from "../constants/SocialData.json";
import { Topic } from "../components/goSocials/TopicCard";

const GoSocial = () => {
  const { topics, popularTopics, businessPages } = data as {
    topics: Topic[];
    popularTopics: Omit<Topic, "icon">[];
    businessPages: Omit<Topic, "icon">[];
  };

  const addIcon = (list: Omit<Topic, "icon">[], icon: Topic["icon"]) =>
    list.map(item => ({ ...item, icon }));

  return (
    <div className="flex flex-col gap-8 p-4">
      <Section title="My Topics" topics={topics} cols={2} searchBar />
      <Section title="Popular Topics" topics={addIcon(popularTopics, "lightbulb")} cols={3} />
      <Section title="Business Pages" topics={addIcon(businessPages, "users")} cols={3} />
    </div>
  );
};

export default GoSocial;
