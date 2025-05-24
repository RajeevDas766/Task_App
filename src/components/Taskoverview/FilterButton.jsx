import React from 'react'

const FilterButton = ({ label, selected, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg transition-colors ${
        selected
          ? 'bg-blue-600 text-white'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default FilterButton