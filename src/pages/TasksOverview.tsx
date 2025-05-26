import React, { useState } from 'react';
import CategoryItem from '../components/Taskoverview/CategoryItem';
import TaskItem from '../components/taskDetails/TaskItem';
import FilterButton from '../components/Taskoverview/FilterButton';
import OverviewData from "../constants/OverviewData.json"

const TasksOverview: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTasks = OverviewData.tasks.filter((task: any) => {
    return selectedCategory === 'All' || task.category === selectedCategory;
  });

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Overview</h1>

      <div className="category-container grid grid-cols-1 md:grid-cols-3 gap-6">
        {OverviewData.categories.map((category: any, key: number) => (
          <CategoryItem key={key} category={category} />
        ))}
      </div>

      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-semibold">Filter Tasks</h2>
          <div className="flex space-x-2">
            {['All', 'Academics', 'Career', 'Well Being'].map((label: string, key: number) => (
              <FilterButton 
                label={label} 
                key={key} 
                selected={selectedCategory === label}
                onClick={() => setSelectedCategory(label)}
              />
            ))}
          </div>
        </div>

        <h2 className="text-xl font-semibold">Your Tasks</h2>
        <div className="space-y-4">
          {filteredTasks.length === 0 ? (
            <p className="text-gray-500 text-center">No tasks found in this category</p>
          ) : (
            filteredTasks.map((taskitem: any, key: number) => (
              <TaskItem task={taskitem} key={key} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TasksOverview;
