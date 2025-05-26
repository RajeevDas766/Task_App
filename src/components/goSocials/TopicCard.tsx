import React from 'react';
import { LucideProps } from 'lucide-react';
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

const iconMap: Record<Topic['icon'], React.ForwardRefExoticComponent<React.PropsWithoutRef<LucideProps> & React.RefAttributes<SVGSVGElement>>> = {
  lightbulb: Lightbulb,
  users: Users,
  hospital: Hospital,
  'graduation-cap': GraduationCap,
  activity: Activity,
  store: Store,
  sprout: Sprout
};

const TopicCard: React.FC<{ topic: Topic }> = ({ topic }) => {
  const Icon = iconMap[topic.icon] || Lightbulb;

  return (
    <div className="space-y-2">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="w-10 h-10 bg-blue-50 rounded-lg flex justify-center items-center mb-4">
          <Icon className="text-blue-600" size={20} />
        </div>
        <h3 className="font-semibold mb-2">{topic.title}</h3>
        <p className="text-gray-600">{topic.description}</p>
      </div>
      {topic.members && (
        <div className="flex flex-wrap gap-2 mt-2">
          {topic.members.map((member, index) => (
            <span key={index} className="text-blue-600 text-xs">{member}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopicCard;
