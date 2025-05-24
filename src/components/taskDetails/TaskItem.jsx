import React from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, Briefcase, Heart } from 'lucide-react';

const TaskItem = ({task}) => {
  const iconMap = {
  'graduation-cap': <GraduationCap className="text-blue-600" />,
  'briefcase': <Briefcase className="text-blue-600" />,
  'heart': <Heart className="text-blue-600" />
};
  return (
    <Link
              to={`/task/${task.id}`}
              className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  {iconMap[task.icon]}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{task.title}</h3>
                  <p className="text-gray-600">
                    Due: {task.due} | {task.category}
                  </p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </Link>
  )
}

export default TaskItem