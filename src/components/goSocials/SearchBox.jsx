import React from 'react'

const SearchBox = ({searchTerm,setSearchTerm}) => {

  return (
     <div style={{ position: "relative" }}>
      <input
        type="text"
        placeholder="Search by topic or keyword"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Search topics"
        style={{
          width: "100%",
          padding: "12px 40px 12px 12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          right: "12px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "20px",
          height: "20px",
          color: "#999",
          pointerEvents: "none",
        }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  )
}

export default SearchBox