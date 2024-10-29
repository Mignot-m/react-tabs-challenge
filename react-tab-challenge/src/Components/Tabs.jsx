import React, { useState } from "react";
import "./Tabs.css";
// Define the Tabs component
const Tabs = () => {
  // Array of tab objects with id, tabTitle, title, and content
  const tabs = [
    {
      id: 1,
      tabTitle: "Tab 1",
      title: "Title 1",
      content:
        "In sint do non adipisicing incididunt excepteur sit. Voluptate esse aliqua pariatur dolor ex occaecat sunt eu. Pariatur ullamco id dolore sint proident sint nostrud nisi sit id est. Duis et excepteur cupidatat sint nisi dolore qui irure qui in id excepteur irure laboris. Pariatur mollit duis cupidatat nisi Lorem non et in dolor aliquip ea sint aute. Dolore aute duis laboris exercitation occaecat sunt. Enim veniam Lorem do ipsum aliqua qui eu ipsum consectetur ex dolore ea ipsum.",
    },
    {
      id: 2,
      tabTitle: "Tab 2",
      title: "Title 2",
      content:
        "Non aliquip fugiat velit ad officia Lorem tempor cillum incididunt elit proident mollit. Reprehenderit qui nisi ut occaecat minim velit deserunt occaecat quis magna mollit. Veniam proident consectetur sunt mollit est magna Lorem voluptate enim cupidatat consequat. Et pariatur aliquip commodo nisi deserunt exercitation enim officia voluptate in nisi. Eu ea esse qui est ea pariatur nostrud non elit irure. Ad exercitation Lorem exercitation ipsum eiusmod ea duis ad mollit veniam aliquip veniam. Lorem pariatur elit ea duis.",
    },
    {
      id: 3,
      tabTitle: "Tab 3",
      title: "Title 3",
      content:
        "Deserunt et elit elit ad dolor magna. Nisi amet consectetur Lorem eiusmod dolore adipisicing do reprehenderit. Voluptate consequat magna nostrud in officia labore. Minim excepteur consectetur quis nostrud nisi magna duis sunt sint qui. Fugiat ea reprehenderit eiusmod proident officia. Consequat labore qui velit Lorem consectetur incididunt ut nisi.",
    },
    {
      id: 4,
      tabTitle: "Tab 4",
      title: "Title 4",
      content:
        "Minim in dolor do fugiat laborum duis labore consectetur. Amet ut sint ipsum dolor ad nostrud commodo sunt veniam enim aliquip nulla sint ullamco. Do cupidatat et quis laborum esse est commodo. Commodo sunt consectetur do consequat minim occaecat id magna ullamco consequat irure.",
    },
  ];
  // State to keep track of the currently active tab.
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="container">
      <div className="tabs">
        {/* Map through tabs array to render tab titles */}
        {tabs.map((tab) => (
          <div
            key={tab.id}
            // Set activeTab state when a tab is clicked
            onClick={() => setActiveTab(tab.id)}
            // Apply 'active' class to the currently active tab
            className={`tab ${activeTab === tab.id ? "active" : ""}`}
          >
            {tab.tabTitle}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {/* Map through tabs array to render tab content */}
        {tabs.map((tab) => (
          <div key={tab.id}>
            {/* Display content of the active tab */}
            {activeTab === tab.id && (
              <div className="tab-pane active">
                <h2>{tab.title}</h2>
                <p>{tab.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
// Export the Tabs component
export default Tabs;
