import image_editor from "../images/pdp-image-app-thumbnail.png";
import last_stand from "../images/the_last_stand.png"


const projects = [
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
    link: "https://drive.google.com/file/d/1kqwfI5aHZ4-aXdKJdhU-ywNBeGPjNCrt/view?usp=drive_link", // Project URL
  },
  {
    name: "The Last Stand",
    description:
      'The Last Stand: Earth\'s final hope rests in your hands—blast through alien fleets in an adrenaline-fueled space battle for survival!',
    technologies: [
      "Unity",
      "C#",
      "Scripting",
      "Game Development",
      "Git",
      "Game Design"
    ],
    image: last_stand,
    link: "https://drive.google.com/file/d/1xIZKMM6NC_Engq085BFmmIYhFQAybOCQ/view", // Project URL
  },
];

export default projects;
