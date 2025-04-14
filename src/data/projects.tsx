import image_editor from "../images/pdp-image-app-thumbnail.png";
import last_stand from "../images/the_last_stand.png"
import mazy_ai_logo from "../images/mazy_ai_logo.png"


const projects = [
  {
    name: "Image Editor - Java desktop GUI",
    description:
      'Constructed a versatile image editing app in Java using Swing, supporting various formats (ppm, jpg, png) as part of "Programming Design Patterns" Journey.',
    technologies: [
      "Java",
      "Software Design Patterns"
    ],
    image: image_editor,
    link: "https://drive.google.com/file/d/1WZhspbIsPzBYc7-QGe9IkcDla4HbqzeP/view?usp=sharing", // Project URL
  },
  {
    name: "MAZY AI - Complex Maze Solver",
    description:
      'Engineered an interactive maze-solving tool using various algorithms, featuring real-time pathfinding visualizations to showcase algorithmic efficiency.',
    technologies: [
      "Python",
      "MacOS Bundle"
    ],
    image: mazy_ai_logo,
    link: "https://drive.google.com/file/d/1pqTshLKNvKs4SaL0Wvo4zA10Ltt88b1M/view?usp=sharing",
  },
  {
    name: "The Last Stand",
    description:
      'The Last Stand: Earth\'s final hope rests in your hands—blast through alien fleets in an adrenaline-fueled space battle for survival!',
    technologies: [
      "C#",
      "Game Development",

    ],
    image: last_stand,
    link: "https://drive.google.com/file/d/1xIZKMM6NC_Engq085BFmmIYhFQAybOCQ/view", // Project URL
  },
];

export default projects;
