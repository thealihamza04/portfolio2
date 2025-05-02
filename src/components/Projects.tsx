
import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../lib/motion';

const projectsData = [
  {
    id: 1,
    title: 'E-commerce Website',
    category: 'Web Development',
    image: 'https://via.placeholder.com/600x400',
    description: 'A fully responsive e-commerce platform with animations and modern UI.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'UI/UX Design',
    image: 'https://via.placeholder.com/600x400',
    description: 'Intuitive and secure banking application with smooth transitions.',
    technologies: ['Figma', 'Prototyping', 'User Research', 'UI Design']
  },
  {
    id: 3,
    title: 'Interactive Dashboard',
    category: 'Web Development',
    image: 'https://via.placeholder.com/600x400',
    description: 'Data visualization dashboard with real-time updates and filtering.',
    technologies: ['React', 'D3.js', 'Recharts', 'Firebase']
  },
  {
    id: 4,
    title: 'Social Media Platform',
    category: 'Full Stack',
    image: 'https://via.placeholder.com/600x400',
    description: 'Community platform with real-time messaging and content sharing.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Socket.io']
  }
];

const categories = ['All', 'Web Development', 'UI/UX Design', 'Full Stack'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 section-padding bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mb-16 text-center"
        >
          <motion.p variants={fadeIn('up', 0.2)} className="text-portfolio-blue font-medium mb-2">
            My Work
          </motion.p>
          <motion.h2 variants={fadeIn('up', 0.3)} className="text-4xl font-bold mb-4">
            Recent Projects
          </motion.h2>
          <motion.div variants={fadeIn('up', 0.4)} className="w-20 h-1 bg-portfolio-purple mx-auto"></motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300
                ${activeCategory === category
                  ? 'bg-portfolio-blue text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
                }
              `}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeIn('up', 0.3 * index)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="relative group rounded-xl overflow-hidden shadow-lg bg-white"
            >
              <div className="perspective">
                <motion.div
                  className="preserve-3d w-full h-full"
                  animate={{ 
                    rotateX: hoveredProject === project.id ? 0 : 0,
                    rotateY: hoveredProject === project.id ? 0 : 0
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="relative overflow-hidden aspect-[3/2]">
                    <motion.img
                      animate={{ 
                        scale: hoveredProject === project.id ? 1.1 : 1
                      }}
                      transition={{ duration: 0.4 }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: hoveredProject === project.id ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                    >
                      <button className="button-primary">View Project</button>
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <span className="text-xs font-medium bg-portfolio-purple/10 text-portfolio-purple py-1 px-2 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium bg-gray-100 py-1 px-2 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
