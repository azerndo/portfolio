import React, { useState, useEffect } from 'react';
import projectsData from '../data/projects.json';
import waterflowDesktop from "../assets/waterflow/waterflow-desktop.jpg"
import waterflowPersonnel from "../assets/waterflow/waterflow-personnel-mobile.jpg"
import waterflowConsumer from "../assets/waterflow/waterflow-consumer-mobile.jpg"
import juanHotelsImage1 from "../assets/juanHotels/image1.jpg"
import juanHotelsImage2 from "../assets/juanHotels/image2.jpg"
import juanHotelsImage3 from "../assets/juanHotels/image3.jpg"
import iEnrollDesktop from "../assets/iEnroll/desktop.jpg"
import iEnrollMobile from "../assets/iEnroll/mobile.jpg"
import iEnrollLogo from "../assets/iEnroll/ienroll-logo.jpg"

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  tags: string[];
  keyFeatures: string[];
  role: string;
  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
  };
}

// Image mapping for dynamic imports
const imageMap: { [key: string]: string } = {
  "waterflow/waterflow-desktop.jpg": waterflowDesktop,
  "waterflow/waterflow-personnel-mobile.jpg": waterflowPersonnel,
  "waterflow/waterflow-consumer-mobile.jpg": waterflowConsumer,
  "juanHotels/image1.jpg": juanHotelsImage1,
  "juanHotels/image2.jpg": juanHotelsImage2,
  "juanHotels/image3.jpg": juanHotelsImage3,
  "iEnroll/desktop.jpg": iEnrollDesktop,
  "iEnroll/mobile.jpg": iEnrollMobile,
  "iEnroll/ienroll-logo.jpg": iEnrollLogo
};

const MyWorks: React.FC = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number>(0);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Map the imported JSON data to include the actual image imports
    const mappedProjects = projectsData.map(project => ({
      ...project,
      images: project.images.map(img => imageMap[img])
    }));
    setProjects(mappedProjects);
  }, []);

  const handleNextProject = () => {
    setSelectedProjectIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevProject = () => {
    setSelectedProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  if (projects.length === 0) {
    return <div className="text-center py-12">Loading projects...</div>;
  }

  const currentProject = projects[selectedProjectIndex];

  return (
    <div className='w-full py-12 px-4 sm:px-6 lg:px-8 bg-gray-50' id="works">
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-4xl changa-one-regular text-center text-lime-800 mb-12 font-serif'>
          My Works
        </h1>
        
        {/* Project Navigation - Hidden on mobile, shown on md screens and up */}
        {projects.length > 1 && (
          <div className="hidden md:flex justify-center gap-4 mb-8">
            <button
              onClick={handlePrevProject}
              className="px-4 py-2 bg-lime-100 text-lime-800 rounded-lg hover:bg-lime-200 transition-all ease-in-out duration-300 cursor-pointer hover:scale-105"
              aria-label="Previous project"
            >
              ← Previous
            </button>
            <div className="flex items-center gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedProjectIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ease-in-out duration-300 cursor-pointer hover:scale-105 ${
                    index === selectedProjectIndex ? 'bg-lime-700' : 'bg-lime-300'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNextProject}
              className="px-4 py-2 bg-lime-100 text-lime-800 rounded-lg hover:bg-lime-200 transition-all ease-in-out duration-300 cursor-pointer hover:scale-105"
              aria-label="Next project"
            >
              Next →
            </button>
          </div>
        )}
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Project Showcase */}
          <div className='space-y-6'>
            <div className='relative h-96 rounded-xl overflow-hidden shadow-xl border-2 border-lime-100'>
              <div className='absolute inset-0 bg-gradient-to-br from-lime-50 to-lime-100 flex items-center justify-center'>
                <img 
                  src={currentProject.images[0]} 
                  alt={`${currentProject.title} Desktop View`}
                  className='h-full w-full object-cover transition-transform duration-500 hover:scale-105'
                />
              </div>
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white'>
                <h2 className='text-2xl font-bold'>{currentProject.title}</h2>
                <div className='flex flex-wrap gap-2 mt-2'>
                  {currentProject.tags.map((tag, index) => (
                    <span key={index} className='text-xs bg-lime-600/80 px-2 py-1 rounded-full'>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className='grid grid-cols-2 gap-4'>
              {currentProject.images.slice(1).map((image, index) => (
                <div key={index} className='relative h-48 rounded-lg overflow-hidden shadow-md border border-lime-100'>
                  <img 
                    src={image} 
                    alt={`${currentProject.title} screenshot ${index + 1}`}
                    className='h-full w-full object-cover transition-transform duration-300 hover:scale-105'
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Project Details */}
          <div className='flex flex-col justify-center'>
            <h2 className='text-3xl font-bold text-lime-800 mb-4'>{currentProject.title}</h2>
            <p className='text-gray-700 mb-6 leading-relaxed'>
              {currentProject.description}
            </p>
            <div className='mb-6'>
              <h3 className='font-semibold text-lime-800 mb-2'>Key Features:</h3>
              <ul className='list-disc pl-5 space-y-1 text-gray-700'>
                {currentProject.keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className='flex flex-col gap-4 mt-auto'>
              <div>
                <h3 className='font-semibold text-lime-800 mb-2'>My Role:</h3>
                <p className='text-gray-700'>{currentProject.role}</p>
              </div>
              <div>
                <h3 className='font-semibold text-lime-800 mb-2'>Tech Stack:</h3>
                <ul className='list-disc pl-5 space-y-1 text-gray-700'>
                  <li><strong>Frontend:</strong> {currentProject.techStack.frontend.join(', ')}</li>
                  <li><strong>Backend:</strong> {currentProject.techStack.backend.join(', ')}</li>
                  <li><strong>Database:</strong> {currentProject.techStack.database.join(', ')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Project Navigation - Shown on mobile, hidden on md screens and up */}
        {projects.length > 1 && (
          <div className="md:hidden flex flex-col items-center gap-4 mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedProjectIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ease-in-out duration-300 cursor-pointer hover:scale-105 ${
                    index === selectedProjectIndex ? 'bg-lime-700' : 'bg-lime-300'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-4">
              <button
                onClick={handlePrevProject}
                className="px-6 py-2 bg-lime-100 text-lime-800 rounded-lg hover:bg-lime-200 transition-all ease-in-out duration-300 cursor-pointer hover:scale-105"
                aria-label="Previous project"
              >
                ← Previous
              </button>
              <button
                onClick={handleNextProject}
                className="px-6 py-2 bg-lime-100 text-lime-800 rounded-lg hover:bg-lime-200 transition-all ease-in-out duration-300 cursor-pointer hover:scale-105"
                aria-label="Next project"
              >
                Next →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyWorks;