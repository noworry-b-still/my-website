import "./Timeline.css"; // Make sure to create this file with the CSS above

const Timeline = () => {
    const journeyData = [
        {
            year: "2025",
            achievements: [
                {
                    text: "Seeking full-time software engineering roles in the U.S.",
                    highlights: ["May"],
                    skills: [],
                },
                {
                    text: "CGPA: 3.75/4",
                    highlights: ["CGPA"],
                    skills: [],
                },
            ],
        },
        {
            year: "2024",
            achievements: [
                {
                    text: "Earned Redis Professional Certification.",
                    highlights: ["Redis Professional Certification"],
                    skills: [],
                },
                {
                    text: "Interned at Bose Professional, working on distributed systems.",
                    highlights: ["Bose Professional"],
                    skills: ["Go", "Elixir"],
                },
            ],
        },
        {
            year: "2023",
            achievements: [
                {
                    text: "Left Deloitte to pursue Master's in CS at Northeastern University, Boston.",
                    highlights: ["Deloitte", "Master's in CS"],
                    skills: [],
                },
            ],
        },
        {
            year: "2022",
            achievements: [
                {
                    text: "Completed 4-month Analyst Internship at Deloitte.",
                    highlights: ["4-month Analyst Internship", "Deloitte"],
                    skills: [],
                },
                {
                    text: "Graduated with 8.3/10 GPA from VNR VJIET.",
                    highlights: ["8.3/10 GPA", "VNR VJIET"],
                    skills: [],
                },
                {
                    text: "Joined Deloitte as a full-time Analyst, working with various technologies.",
                    highlights: ["Deloitte"],
                    skills: ["Python", "Java", "Relativity tools"],
                },
            ],
        },
        {
            year: "2021",
            achievements: [
                {
                    text: "Interned at Blaze Automations, worked on time forecasting for elderly care.",
                    highlights: ["Blaze Automations"],
                    skills: ["time forecasting"],
                },
                {
                    text: "Contributed to a published research paper, recognized by CEO.",
                    highlights: ["CEO"],
                    skills: ["published research paper"],
                },
                {
                    text: "Failed Amazon SWE final round but secured an Analyst internship + full-time role at Deloitte.",
                    highlights: ["Amazon SWE"],
                    skills: ["Analyst internship + full-time role"],
                },
            ],
        },
        {
            year: "2020",
            achievements: [
                {
                    text: "Interned remotely at MithyaLabs as a Software Engineer.",
                    highlights: ["MithyaLabs"],
                    skills: ["Software Engineer"],
                },
                {
                    text: "Explored Machine Learning and Data Science/Kaggle.",
                    highlights: [],
                    skills: ["Machine Learning", "Data Science/Kaggle"],
                },
                {
                    text: "Suffered from dengue, affecting semester performance.",
                    highlights: ["dengue"],
                    skills: [],
                },
            ],
        },
        {
            year: "2019",
            achievements: [
                {
                    text: "Won multiple entrepreneurship competitions, college hackathon, and Univ.ai hackathon.",
                    highlights: ["entrepreneurship competitions", "college hackathon", "Univ.ai hackathon"],
                    skills: [],
                },
                {
                    text: "Developed an AR-based indoor navigation app.",
                    highlights: [],
                    skills: ["AR-based indoor navigation app"],
                },
                {
                    text: "Built a RESTful backend for a food recipe app using Python and Django.",
                    highlights: [],
                    skills: ["RESTful backend", "Python", "Django"],
                },
            ],
        },
        {
            year: "2018",
            achievements: [
                {
                    text: "Secured 1869 rank among 300K+ students in Telangana EAMCET.",
                    highlights: ["1869 rank", "300K+ students", "Telangana EAMCET"],
                    skills: [],
                },
                {
                    text: "Earned a full merit scholarship for Bachelor's in CS at VNR VJIET.",
                    highlights: ["full merit scholarship"],
                    skills: ["Bachelor's in CS"],
                },
                {
                    text: "Played soccer and explored frontend development.",
                    highlights: [],
                    skills: ["soccer", "frontend development"],
                },
            ],
        },
    ];

    return (
        <div className="timeline-wrapper">
            <h2 className="journey-title">Journey So Far</h2>
            <div className="timeline-container">
                {journeyData.map((item, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-year">{item.year}</div>
                        <div className="timeline-content">
                            {item.achievements.map((achievement, achievementIndex) => (
                                <div className="achievement" key={achievementIndex}>
                                    {achievement.text.split(" ").map((word, wordIndex) => {
                                        // Check if the word is in highlights
                                        const isHighlight = achievement.highlights.some(
                                            (highlight) => word.includes(highlight)
                                        );
                                        // Check if the word is in skills
                                        const isSkill = achievement.skills.some((skill) =>
                                            word.includes(skill)
                                        );

                                        if (isHighlight) {
                                            return (
                                                <span className="highlight" key={wordIndex}>
                                                    {word}{" "}
                                                </span>
                                            );
                                        } else if (isSkill) {
                                            return (
                                                <span className="skill-tag" key={wordIndex}>
                                                    {word}{" "}
                                                </span>
                                            );
                                        } else {
                                            return <span key={wordIndex}>{word} </span>;
                                        }
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;