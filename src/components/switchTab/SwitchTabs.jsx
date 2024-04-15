import { useState } from "react";

import "./SwitchTabs.scss";

// eslint-disable-next-line react/prop-types
const SwitchTabs = ({ dataD, onTabChange }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [right, setLeft] = useState(0);
    const activeTab = (tab, index) => {
        setLeft(index * 100);
        setTimeout(() => {
            setSelectedTab(index);
        }, 300);
        onTabChange(tab, index);
    };

    return (
        <div className="switchingTabs">
            <div className="tabItems">
                {dataD?.map((tab, index) => (
                    <span
                        key={index}
                        className={`tabItem ${
                            selectedTab === index ? "active" : ""
                        }`}
                        onClick={() => activeTab(tab, index)}
                    >
                        {tab}
                    </span>
                ))}
                <span className="movingBg" style={{ right }} />
            </div>
        </div>
    );
};

export default SwitchTabs;
