import React from 'react'
import { GraduationCap, Briefcase, Heart } from 'lucide-react';
import { Link } from 'react-router-dom'

interface Category {
  icon: 'graduation-cap' | 'briefcase' | 'heart'
  title: string
  tasksCount: number
}

const CategoryItem: React.FC<{ category: Category }> = ({ category }) => {
  const iconMap = {
    'graduation-cap': <GraduationCap className="text-blue-600" />,
    'briefcase': <Briefcase className="text-blue-600" />,
    'heart': <Heart className="text-blue-600" />
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
        {iconMap[category.icon]}
      </div>
      <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
      <p className="text-gray-600 mb-4">{category.tasksCount} tasks created</p>
      <div className="flex space-x-4">
        <Link
          to={`/category/${category.title.toLowerCase()}`}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          View
        </Link>
        <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg">
          Add Task
        </button>
      </div>
    </div>
  )
}

export default CategoryItem