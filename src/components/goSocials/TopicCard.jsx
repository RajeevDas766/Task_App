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
const TopicCard = ({topic}) => {
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
    <div
              style={{
                background: "white",
                padding: "16px",
                borderRadius: "8px",
                boxShadow: "0 0 5px #ccc",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background: "#ebf4ff",
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "16px",
                  color: "#2563eb",
                }}
              >
                {iconMap[topic.icon]}
              </div>
              <h3 style={{ fontWeight: "600", marginBottom: "8px" }}>{topic.title}</h3>
              <p style={{ color: "#555" }}>{topic.description}</p>
    </div>
    {topic.members && (
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
    )}
    </>

  )
}

export default TopicCard