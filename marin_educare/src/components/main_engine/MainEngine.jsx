import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopicPage from './TopicPage';
import Try from './Try';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer';

const topics = [
  { id: "blockchain-tutorial", label: "Blockchain Tutorial", content: <Try /> },
  { id: "history-of-blockchain", label: "History of Blockchain", content: "Blockchain has an interesting history that began in 2008." },
  { id: "what-is-bitcoin", label: "What is Bitcoin?", content: "Bitcoin is the first cryptocurrency built on blockchain." },
  { id: "blockchain-version", label: "Blockchain Version", content: "Blockchain has different versions with unique features." },
  { id: "role-of-bitcoin-miners", label: "Role of Bitcoin Miners", content: "Miners validate transactions and add them to the blockchain." },
  { id: "blockchain-hash-functions", label: "Blockchain Hash Functions", content: "Hash functions ensure the security of blockchain data." },
];

function MainEngine() {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <Sidebar topics={topics} />

        {/* Main Content */}
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            {topics.map((topic, index) => (
              <Route
                key={topic.id}
                path={`${topic.id}`}
                element={<TopicPage topic={topic} nextTopic={topics[index + 1]} preTopic={topics[index - 1]}/>}
              />
            ))}
            <Route path="*" element={<h2>Page Not Found</h2>} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MainEngine;
