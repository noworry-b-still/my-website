// import apollo from "../images/apollo.png";
import redis_developer from "../images/redis-certification.png";
// import rust from "../images/Rust.png";

const certificates = [
  {
    name: "Learn Rust From Scratch",
    certifiedBy: "Educative.io",
    imageUrl: "dummy",
    certificateUrl:
      "https://www.educative.io/verify-certificate/P1vxGOto783mKogVoFm7n8W54x5Jfl",
    description: "Comprehensive Rust programming fundamentals",
    tags: [
      "Programming Languages",
      "Rust",
    ],
    level: "Beginner",
    issueDate: "2023-11-15"
  },
  {
    name: "Redis Developer - Professional",
    certifiedBy: "Redis",
    imageUrl: redis_developer,
    certificateUrl:
      "https://www.credential.net/8781edb5-6886-43ec-80a5-2be1d490e62d",
    description: "Professional-level Redis implementation and architecture",
    tags: ["Certification", "Databases"],
    level: "Professional",
    issueDate: "2024-03-22"
  },
  {
    name: "Graph Developer - Associate",
    certifiedBy: "Apollo",
    imageUrl: "dummy",
    certificateUrl:
      "https://www.apollographql.com/tutorials/certifications/e31484fc-ed45-4b61-a891-58b5f317d2c5",
    description: "GraphQL API development with Apollo",
    tags: ["Certification", "Backend"],
    level: "Associate",
    issueDate: "2023-07-10"
  },
  {
    name: "Intermediate Machine Learning",
    certifiedBy: "Kaggle",
    imageUrl: "https://www.kaggle.com/learn/certification/teslaatoz/intermediate-machine-learning",
    certificateUrl:
      "https://www.kaggle.com/learn/certification/teslaatoz/intermediate-machine-learning",
    description: "Advanced ML techniques and model optimization",
    tags: ["ML/AI", "Algorithms"],
    level: "Intermediate",
    issueDate: "2022-12-05"
  },
];

export default certificates;