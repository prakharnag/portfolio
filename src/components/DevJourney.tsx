'use client';

import { useState } from "react";

const DevJourney = () => {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");

  const workExperience = [
    {
      year: "Jan 2025 - Present",
      title: "Software Engineer",
      company: "BreatheIT",
      details: [
        "Refactored backend code by optimizing MySQL queries and simplifying complex logic, boosting query performance by 50%.",
        "Designed and implemented microservices to transition from a monolithic architecture, doubling system scalability.",
        "Constructed APIs with JWT authentication and cookie management, reducing database calls and improving response times by 30%.",
        "Researched and evaluated caching strategies, including Redis, to enhance application performance and reduce latency."
      ],
    },
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
    <section id="dev-journey" className=".section-bg" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10">Career Timeline 🚀</h2>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <button
            onClick={() => setActiveTab("work")}
            className={`px-6 py-3 text-lg font-semibold rounded-l-lg ${
              activeTab === "work" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            Work Experience
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`px-6 py-3 text-lg font-semibold rounded-r-lg ${
              activeTab === "education" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            Education
          </button>
        </div>

        {/* Timeline */}
        <div className="relative border-l-4 border-blue-500 pl-8">
          {data.map((event, index) => (
            <div
              key={index}
              className="mb-12 relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Marker */}
              <div className="absolute -left-[1.15rem] top-2 w-5 h-5 bg-blue-500 border-4 border-white rounded-full shadow-md z-10"></div>

              {/* Card */}
              <div className="bg-white p-6 rounded-lg shadow-md ml-2">
                <p className="text-sm text-gray-500 mb-1">{event.year}</p>
                <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                <p className="font-medium text-gray-700 mb-3">{event.company}</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {event.details.map((detail, idx) => (
                    <li key={idx} className="text-sm leading-6">{detail}</li>
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
