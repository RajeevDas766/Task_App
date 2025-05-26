import React from 'react'
import {
  Lightbulb,
  Users,
  Hospital,
  GraduationCap,
  Activity,
  Store,
  Sprout
} from 'lucide-react';

export interface Topic {
  icon: 'lightbulb' | 'users' | 'hospital' | 'graduation-cap' | 'activity' | 'store' | 'sprout';
  title: string;
  description: string;
  members?: string[];
}

const TopicCard = ({ topic }: { topic: Topic }) => {
  const iconMap = {
    lightbulb: <Lightbulb />,
    users: <Users />,
    hospital: <Hospital />,
    "graduation-cap": <GraduationCap />,
    activity: <Activity />,
    store: <Store />,
    sprout: <Sprout />
  };
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="w-10 h-10 bg-blue-50 rounded-lg flex justify-center items-center mb-4 text-blue-600">
          {iconMap[topic.icon]}
        </div>
        <h3 className="font-semibold mb-2">{topic.title}</h3>
        <p className="text-gray-600">{topic.description}</p>
      </div>
      {topic.members && (
        <div className="text-blue-600 text-xs flex gap-2 mt-1 pl-2">
          {topic.members.map((m, idx) => (
            <span key={idx}>{m}</span>
          ))}
        </div>
      )}
    </>

  )
}

export default TopicCard