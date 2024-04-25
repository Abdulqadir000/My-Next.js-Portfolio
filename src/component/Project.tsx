import React from 'react';
import { project } from '@/constants/constant';
import Image from 'next/image';

const Project: React.FC = () => {
  return (
    <div>
      <h2 className="font-bold mb-8 mt-10 flex justify-center text-5xl  text-red-600 my-9" style={{ fontFamily: 'Montserrat, sans-serif' }}>Project</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.map((project, index) => (
            <div key={index} className="border border-gray-200 rounded-lg inline-block max-w-max shadow-md">
              <Image
                src={project.image}
                alt={project.name}
                width={250}
                height={200}

               />
    
              <h3 className="text-lg font-semibold mb-2 mt-3">{project.name}</h3>

              <p className="text-gray-600 mb-3">{project.description}</p>

              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex bg-blue-500 text-white justify-center font-semibold rounded-lg px-4 py-2 text-center transition duration-300 ease-in-out hover:bg-blue-600"
                style={{ fontSize: '14px' }}
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;




