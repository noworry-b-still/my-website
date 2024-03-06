import solar_dashboard from "../images/solar-dashboard.png";
import image_editor from "../images/image-editor.png";

const projects = [
  {
    name: "Solar Site Dashboard",
    description:
      'Worked on implementing features like geospatial search, leader board for top solar locations as part of "Redis Certification" Journey.',
    technologies: [
      "Express",
      "Node",
      "Redis",
      "Git",
      "Data Visualization",
      "DAO design pattern",
    ],
    image: solar_dashboard, // Image URL
    link: "https://dineshpandikona-references.netlify.app/", // Project URL
  },
  {
    name: "Image Editor - Java desktop GUI",
    description:
      'Constructed a versatile image editing app in Java using Swing, supporting various formats (ppm, jpg, png) as part of "Programming Design Patterns" Journey.',
    technologies: [
      "Java",
      "Swing",
      "JUnit4",
      "OOP principles",
      "Git",
      "Command design pattern",
    ],
    image: image_editor,
    link: "https://dineshpandikona-references.netlify.app/", // Project URL
  },
  // {
  //   name: "Image Picker - Typescript Plugin",
  //   description:
  //     "Designed and created an innovative, reusable image picker plugin. It provides a highly responsive, customizable solution for efficiently selecting, displaying, and arranging images in a responsive layout.",
  //   technologies: ["Typescript", "React", "CSS3", "Git", "Rollup", "lodash"],
  //   image:
  //     "https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+Peter!&fontFamily=cookie", // Image URL
  //   link: "https://dineshpandikona-references.netlify.app/", // Project URL
  // },
];

export default projects;
