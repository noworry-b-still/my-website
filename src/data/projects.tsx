import image_editor from "../images/pdp-image-app-thumbnail.png";
import last_stand from "../images/the_last_stand.png";
import mazy_ai_logo from "../images/mazy_ai_logo.png";
import rfs_in_c from "../images/rfs_in_c.jpg";
const projects = [
  {
    name: "Image Editor - Java desktop GUI",
    description:
      'Constructed a versatile image editing app in Java using Swing, supporting various formats (ppm, jpg, png) as part of "Programming Design Patterns" Journey.',
    technologies: [
      "Java",
      "Software Design Patterns"
    ],
    languages: "Java",
    image: image_editor,
    link: "https://drive.google.com/file/d/1WZhspbIsPzBYc7-QGe9IkcDla4HbqzeP/view?usp=sharing",
  },
  {
    name: "MAZY AI - Python deskop GUI",
    description:
      'Engineered an interactive maze-solving tool using various algorithms, featuring real-time pathfinding visualizations to showcase algorithmic efficiency.',
    technologies: [
      "Python",
      "MacOS Bundle"
    ],
    languages: "Python",

    image: mazy_ai_logo,
    link: "https://drive.google.com/file/d/1pqTshLKNvKs4SaL0Wvo4zA10Ltt88b1M/view?usp=sharing",
  },
  {
    name: "The Last Stand - C# Space Game",
    description:
      'The Last Stand: Earth\'s final hope rests in your hands—blast through alien fleets in an adrenaline-fueled space battle for survival!',
    technologies: [
      "C#",
      "Game Development",
    ],
    languages: "C#",
    image: last_stand,
    link: "https://drive.google.com/file/d/1xIZKMM6NC_Engq085BFmmIYhFQAybOCQ/view",
  },
  {
    name: "Remote File System - C Client/Server App",
    description:
      'Built a remote file system with upload, download, delete, and permission control features. Server stays active for requests; clients disconnect after operations. Simple terminal interface with proper permission/error handling.',
    technologies: [
      "C",
      "Sockets",
      "Client-Server Architecture"
    ],
    languages: "C",
    image: rfs_in_c,
    link: "https://github.com/noworry-b-still/rfs",
  },
];

export default projects;
