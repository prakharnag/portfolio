import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const skills = [
  { name: 'Java', icon: './assets/images/java.png' },
  { name: 'Python', icon: './assets/images/python.png' },
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
    autoplaySpeed: 4000,
    cssEase: 'linear',
    arrows: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="skills" className="py-16 bg-gray-100 dark:bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">Technical Skills</h2>
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={index} className="p-4">
              <div className="bg-gray-100 dark:bg-gray-800 text-center">
                <img src={skill.icon} alt={skill.name} className="w-24 h-24 mx-auto mb-4" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Skills;