import { useState } from "react";

const DevJourney = () => {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");

  const workExperience = [
    {
      year: "Aug 2023 - Dec 2024",
      title: "Graduate Developer",
      company: "Illinois Institute of Technology",
      details: [
        "Developed an AI chatbot using Autogen, OpenAI, and Elasticsearch to answer queries about student records with 85% response accuracy, implementing JSON data structures for query responses.",
        "Collaborated with faculty to define AI chatbot use cases, leading to a 20% increase in student engagement with the system.",
        "Assessed outputs of advanced LLM models from OpenAI and Gemini, to develop a feature that selects the most accurate response for student course-related queries.",
        "Built and deployed 15+ reusable React components, integrating with APIs to streamline front-end development and improve dynamic content delivery, reducing development time by 30%.",
        "Conducted code reviews for student-developed applications, providing feedback on code quality, best practices, and performance optimizations, leading to substantial improvement in overall code efficiency and maintainability."
      ],
    },
    {
      year: "Jun 2020 - Dec 2022",
      title: "Software Engineer",
      company: "LTIMindtree",
      details: [
        "Collaborated with cross-functional teams and stakeholders to gather detailed technical requirements and deliver high quality solutions",
        "Implemented RESTAPIs using JavaScript and Node.js to integrate third-party services, optimizing performance and scalability to handle increased traffic seamlessly.",
        "Led application testing, writing comprehensive test cases that achieved 99% test coverage for the entire application, underscoring rigorous testing paradigms.",
        "Debugged SQL scripts for efficient quality assurance check of mission-criticial records utilizing robotics team efforts."
      ],
    },
    {
      year: "Jun 2019 - Jul 2019",
      title: "Software Engineer Intern",
      company: "Pay1 Pvt. Ltd.",
      details: [
        "Implemented APIs for the Pay1 Grahak app using Python, enabling seamless financial services and boosting user engagement.",
        "Created scalable user account management and promotional offer generation features, supporting a growing user base of 10,000+ customers.",
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
            } transition duration-300 z-20`}
          >
            Work Experience
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`px-6 py-3 text-lg font-semibold rounded-r-lg ${
              activeTab === "education"
                ? "bg-blue-600 text-white"
                : "bg-black-300 text-black-700"
            } transition duration-300 z-20`}
          >
            Education
          </button>
        </div>
        <div className="relative">
          {/* Central Line */}
          <div className="absolute inset-y-0 left-1/2 w-1 bg-blue-600 transform -translate-x-1/2 z-10"></div>
          {data.map((event, index) => (
            <div key={index} className={`flex items-center mb-12 relative ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              {/* Left Section: Year Text */}
              <div className="relative flex-shrink-0 text-lg font-medium text-black-900 dark:text-white w-1/2 text-center md:text-right mb-4 md:mb-0 px-4">
                {event.year}
              </div>
              {/* Bullet Symbol on Central Line */}
              <div className="absolute w-8 h-8 bg-blue-600 rounded-full border-4 border-white flex items-center justify-center left-1/2 transform -translate-x-1/2 z-20"></div>
              {/* Right Section: Data Card */}
              <div className="relative mt-6 md:mt-0 w-full md:w-1/2 p-6 bg-white border rounded-lg shadow-lg dark:bg-gray-900 ml-4">
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
