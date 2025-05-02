import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const skills = [
  { name: 'Java', icon: './assets/images/java.png' },
  { name: 'Python', icon: './assets/images/python.png' },
  { name: 'JavaScript', icon: './assets/images/javascript.png' },
  { name: 'Node.js', icon: './assets/images/node.png' },
  { name: 'PostgreSQL', icon: './assets/images/postgres.png' },
  { name: 'MySQL', icon: './assets/images/mysql.png' },
  { name: 'MongoDB', icon: './assets/images/mongodb.png' },
  { name: 'Docker', icon: './assets/images/docker.png' },
  { name: 'AWS', icon: './assets/images/aws.png' },
  { name: 'Dart', icon: './assets/images/dart.png' },
  { name: 'Flutter', icon: './assets/images/flutter.png' },
  { name: 'Postman', icon: './assets/images/postman.png' },
];

const Skills = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    arrows: false,
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="skills" className=".section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={index} className="p-4">
              <div className="bg-transparent text-white p-6 flex flex-col items-center justify-center shadow hover:shadow-lg hover:scale-[1.03] transition-transform duration-300">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-20 h-20 object-contain mb-3"
                />
                <p className="text-sm">{skill.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Skills;
