import { ArrowRight } from 'lucide-react';
import styled, { keyframes } from 'styled-components';

const typewriter = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;

const TypewriterText = styled.span`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap; /* Ensure no wrapping initially */
  border-right: 0.15em solid #000; /* Cursor effect */
  animation: ${typewriter} 6s steps(30) infinite, ${blink} 0.75s step-end infinite;
  font-size: 1.75rem; /* Reduce font size */
  
  /* Wrapping behavior when content exceeds container width */
  @media (max-width: 550px) {
    white-space: normal; /* Allow wrapping when the container is too small */
    animation: ${typewriter} 6s steps(30) infinite, ${blink} 0.75s step-end infinite; /* Ensure animation continues smoothly */
  }
`;

const Hero = () => {
  return (
    <section id="hero" className="pt-24 pb-12 sm:pt-32" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center flex flex-col items-center">
          {/* Title */}
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
            Software Engineer
            <br />
            <span>
              <TypewriterText className="block text-gray-500">
                &lt;Code, Debug, Optimize, Repeat /&gt;
              </TypewriterText>
            </span>
          </h1>
          {/* Subtitle */}
          <p className="mt-6 text-xl max-w-2xl mx-auto">
            Hi, I'm Prakhar. Passionate about creating impactful software solutions to complex problems using modern technologies.
          </p>
          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="projects"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md bg-white hover:bg-gray-50"
            >
              View My Work
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a
              href={import.meta.env.VITE_RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md bg-white hover:bg-gray-50"
            >
            Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
