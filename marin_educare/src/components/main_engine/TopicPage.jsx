import React from 'react';
import { useNavigate } from 'react-router-dom';

function TopicPage({ topic, nextTopic, preTopic }) {
  const navigate = useNavigate();

  const handleNext = () => {
    if (nextTopic) {
      navigate(`/main_engine/${nextTopic.id}`);
    }
  };
  const handlePre = () => {
    if (preTopic) {
      navigate(`/main_engine/${preTopic.id}`);
    }
  };

  return (
    <div style={{marginTop: "4rem"}}>
      <h3>{topic.label}</h3>
      <p>{topic.content}</p>
      {preTopic && (
          <button
            onClick={handlePre}
            className="btn btn-primary mx-5"
          >
            ← {preTopic.label}
          </button>
        )}
      {nextTopic && (
        <button
          onClick={handleNext}
          className="btn btn-primary"
        >
          Next → {nextTopic.label}
        </button>
      )}
    </div>
  );
}

export default TopicPage;
