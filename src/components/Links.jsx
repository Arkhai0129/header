import React, { useState } from 'react';
import './style.css';

const Links = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleMouseEnter = (index) => {
        setActiveDropdown(index);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    const linksData = [
        {
            title: "Deals",
            submenu: []
        },
        {
            title: "Holiday & Christmas Cards",
            submenu: [
                {
                    category: "Holiday Cards",
                    items: [
                        "Holiday Cards",
                        "Christmas Cards",
                        "Hanukkah Cards",
                        "Kwanzaa Cards",
                        "Religious Cards",
                        "Thanksgiving Cards",
                        "New Year’s Cards"
                    ]
                },
                {
                    category: "Business",
                    items: [
                        "Business Holiday Cards",
                        "Business Christmas Cards",
                        "Business New Year’s Cards",
                        "Business Thank You Cards"
                    ]
                },
                {
                    category: "Occasions",
                    items: [
                        "Newlywed Holiday Cards",
                        "Holiday Birth Announcement",
                        "Holiday Moving Announcement",
                        "Pet Holiday Cards"
                    ]
                }
            ]
        },
        {
            title: "Calendars & Gifts",
            submenu: [
                {
                    category: "Gift Items",
                    items: ["Calendars", "Photo Books", "Mugs", "Custom Gifts"]
                }
            ]
        }
    ];

    return (
        <div className='links'>
            {linksData.map((link, index) => (
                <div
                    key={index}
                    className='link-container'
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className='link'>
                        <a 
                            href="#" 
                            aria-haspopup="true" 
                            aria-expanded={activeDropdown === index}
                        >
                            {link.title}
                        </a>
                    </div>
                </div>
            ))}

            {activeDropdown !== null && linksData[activeDropdown].submenu.length > 0 && (
                <div 
                    className={`dropdown ${activeDropdown !== null ? 'show' : ''}`} 
                    onMouseEnter={() => handleMouseEnter(activeDropdown)} 
                    onMouseLeave={handleMouseLeave}
                >
                    {linksData[activeDropdown].submenu.map((sub, subIndex) => (
                        <div key={subIndex} className='dropdown-category'>
                            <div className='dropdown-category-title'>{sub.category}</div>
                            {sub.items.map((item, itemIndex) => (
                                <a key={itemIndex} href="#" className='dropdown-item'>{item}</a>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Links;
