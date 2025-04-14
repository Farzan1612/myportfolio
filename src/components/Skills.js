import React from "react";

function Skills() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8 text-gray-800">Skills</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            HTML, CSS, JavaScript,
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            Java, Springboot
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">React.js</div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            Database Management (SQL)
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
