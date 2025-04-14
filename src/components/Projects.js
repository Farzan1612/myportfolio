import React from "react";

function Projects() {
  // Array storing project details
  const projectData = [
    {
      title: "Project 1 - Luxe Attire",
      description: "An HTML and CSS based project",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxG-5nzMsqkY8FUyPkB8A6VwzZVgij9iJ304typaMB9YepkuiEDmv7nVJP688juwX19s&usqp=CAU",
      link: "https://github.com/Zeedd07/Cloth-website",
    },
    {
      title: "Project 2 - Amazon Clone",
      description: "Amazon Clone website",
      imageUrl:
        "https://cdn.logojoy.com/wp-content/uploads/20230629132442/Amazon-logo.jpg",
      link: "https://github.com/Zeedd07/Amazon-Clone",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-10 text-gray-800">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-lg shadow-lg hover:scale-105 transition transform"
            >
              <img
                src={project.imageUrl}
                style={{ width: "300px", height: "300px", objectFit: "cover" }}
                className="rounded-lg mb-4 shadow-lg hover:scale-105 transition-transform"
              />

              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
