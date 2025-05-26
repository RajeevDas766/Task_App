import React from 'react'

interface Topic {
  members: string[];
}

const TopicMembers = ({ topic }: { topic: Topic }) => {
  return (
    <div
        style={{
            color: "#2563eb",
            fontSize: "12px",
            display: "flex",
            gap: "8px",
            marginTop: "4px",
            paddingLeft: "8px",
        }}
        >
        {topic.members.map((m, idx) => (
            <span key={idx}>{m}</span>
        ))}
    </div>
  )
}

export default TopicMembers