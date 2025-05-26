import React, { useState, useMemo } from 'react';
import SearchBox from './SearchBox';
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
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTopics = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return topics.filter(
      (t) =>
        t.title.toLowerCase().includes(term) ||
        t.description.toLowerCase().includes(term)
    );
  }, [searchTerm, topics]);

  const colClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
  }[cols] || 'grid-cols-1';

  return (
    <section className="space-y-4">
      <h2 className="font-bold text-xl mb-2">{title}</h2>

      {searchBar && (
        <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      )}

<div className={`grid gap-4 ${colClass}`}>
        {filteredTopics.map((topic, index) => (
          <TopicCard topic={topic} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Section;
