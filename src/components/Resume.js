import React from "react";

function Resume() {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Resume</h1>
        <p className="text-lg text-gray-700">
          Click{" "}
          <a
            href="Farzan's resume.pdf"
            download
            className="text-blue-500 underline"
          >
            here
          </a>{" "}
          to download my resume.
        </p>
      </div>
    </section>
  );
}

export default Resume;
