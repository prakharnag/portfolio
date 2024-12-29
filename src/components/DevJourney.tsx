import React, { useState } from "react";

const DevJourney = () => {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");

  const workExperience = [
    {
      year: "Aug 2023 - Dec 2024",
      title: "Graduate Teaching Assistant",
      company: "Illinois Institute of Technology",
      details: [
        "Mentored junior engineers, reducing source code errors by 50%.",
        "Improved system scalability by 50% through code reviews and debugging.",
        "Enhanced query efficiency by 30% by integrating REST and AWS.",
        "Leveraged LLM models for data modeling and analytics.",
      ],
    },
    {
      year: "Jun 2020 - Dec 2022",
      title: "Software Engineer",
      company: "LTIMindtree",
      details: [
        "Led a team of 6 for ARIS application and Microsoft server upgrades.",
        "Reduced system downtime by 50% using CI/CD best practices.",
        "Boosted system functionality by 20% through QA solutions.",
        "Partnered with robotics for job scheduling automation, increasing search efficiency by 80%.",
      ],
    },
    {
      year: "Jun 2019 - Jul 2019",
      title: "Software Engineer Intern",
      company: "Pay1 Pvt. Ltd.",
      details: [
        "Increased user engagement by 40% by developing the Pay1 Grahak app.",
        "Reduced module deployment time by 50%.",
        "Assisted in feature development for promotional offers and user accounts.",
      ],
    },
  ];

  const education = [
    {
      year: "Jan 2023 - Dec 2024",
      title: "Masters in Computer Science",
      company: "Illinois Institute of Technology",
      details: [
        "GPA: 3.70/4",
        "Relevant Coursework: Advanced Database Organization, Data Structures & Algorithms, Software Project Management, Mobile App Development.",
        "Leadership: Engineering Lead at Google Student Developer Club.",
      ],
    },
    {
      year: "Aug 2016 - May 2020",
      title: "Bachelor's of Technology in Computer Science",
      company: "University of Petroleum & Energy Studies",
      details: [
        "GPA: 3.20/4",
        "Relevant Coursework: Database Organization, Computer Networks, Operating Systems, Data Structures & Algorithms, Computer Architecture, Enterprise Java"
      ],
    },
  ];

  const data = activeTab === "work" ? workExperience : education;

  return (
    <section id="dev-journey" className="py-16 bg-black-100 dark:bg-black-900">
      <div className="max-w-3xl mx-auto px-8 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-black-900 dark:text-white mb-8">
          My Developer Journey 🚀
        </h2>
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setActiveTab("work")}
            className={`px-6 py-3 text-lg font-semibold rounded-l-lg ${
              activeTab === "work"
                ? "bg-blue-600 text-white"
                : "bg-black-300 text-black-700"
            } transition duration-300`}
          >
            Work Experience
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`px-6 py-3 text-lg font-semibold rounded-r-lg ${
              activeTab === "education"
                ? "bg-blue-600 text-white"
                : "bg-black-300 text-black-700"
            } transition duration-300`}
          >
            Education
          </button>
        </div>
        <div className="relative">
            {/* Central Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-600"></div>

            {data.map((event, index) => (
                <div key={index} className="flex items-center mb-12 relative">
                 
                   {/* Left Section: Year Text */}
                   <div className="relative flex-shrink-0 ml-1 text-lg font-medium text-black-900 dark:text-white">
                    {event.year}
                  </div>
                  {/* Bullet Symbol on Central Line */}
                  <div className="absolute w-8 h-8 bg-blue-600 rounded-full border-4 border-white flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 z-10"></div>

                    {/* Right Section: Data Card */}
                    <div className="relative ml-60 w-35 p-6 bg-white border rounded-lg shadow-lg dark:bg-gray-900 py-12">
                    <h3 className="text-xl font-semibold text-black-900 dark:text-white">
                      {event.title}
                    </h3>
                    <p className="font-medium text-black-600 dark:text-black-300 mt-2">
                      {event.company}
                    </p>
                    <ul className="mt-4 list-disc text-black-700 dark:text-black-400 space-y-2 pl-5">
                    {event.details.map((detail, idx) => (
                      <li key={idx} className="text-lg font-medium leading-6">{detail}</li>
                    ))}
                  </ul>
                  </div>
                </div>
              ))}
            </div>
      </div>
    </section>
  );
};

export default DevJourney;
