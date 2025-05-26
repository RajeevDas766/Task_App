
import React, { useState } from 'react'
import SearchBox from "./SearchBox"
import TopicMembers from './TopicMembers';
import TopicCard from './TopicCard';

interface Topic {
  icon: 'lightbulb' | 'users' | 'hospital' | 'graduation-cap' | 'activity' | 'store' | 'sprout';
  title: string;
  description: string;
  members?: string[];
}

interface SectionProps {
  searchBar?: boolean;
  topics: Topic[];
  title: string;
  cols: number;
}

const Section: React.FC<SectionProps> = ({ searchBar = false, topics, title, cols }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredTopics = topics.filter(
    (t) =>
      t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  
  return (
    <section className='space-y-4'>
      <h2 style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "16px" }}>
        {title}
      </h2>

      {searchBar&& <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: "16px",
        }}
      >
        {filteredTopics.map((topic, i) => (
          <div key={i}>
            <TopicCard topic={topic} key={i} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Section