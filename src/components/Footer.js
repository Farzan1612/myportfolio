import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <p>
        &copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.
      </p>
      <p>
        Designed <span className="text-primary"></span> by Farzan Shaikh
      </p>
    </footer>
  );
}

export default Footer;
