import React from 'react'
import {  Edit } from "lucide-react";

const CriteriaCard = ({index,criterion}) => {
  return (
     <div key={index} className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
            <input type="checkbox" className="w-5 h-5 rounded" />
            <span>{criterion}</span>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
            <Edit size={16} />
        </button>
    </div>
  )
}

export default CriteriaCard