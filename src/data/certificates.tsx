import apollo from "../images/apollo.png";
import redis_developer from "../images/redis-certification.png";
import rust from "../images/Rust.png";

const certificates = [
  {
    name: "Learn Rust From Scratch",
    certifiedBy: "Educative.io",
    imageUrl: rust,
    certificateUrl:
      "https://www.educative.io/verify-certificate/P1vxGOto783mKogVoFm7n8W54x5Jfl",
    description: "Description for Certificate 3",
    tags: [
      "Rust",
      "Data Structures",
      "Memory Management",
      "Systems Programming",
    ],
  },
  {
    name: "Redis Developer - Professional",
    certifiedBy: "Redis",
    imageUrl: redis_developer,
    certificateUrl:
      "https://www.credential.net/8781edb5-6886-43ec-80a5-2be1d490e62d",
    description: "Description for Certificate 1",
    tags: ["Certification", "Redis", "High Performance", "Backend"],
  },
  {
    name: "Graph Developer - Associate",
    certifiedBy: "Apollo",
    imageUrl: apollo,
    certificateUrl:
      "https://www.apollographql.com/tutorials/certifications/e31484fc-ed45-4b61-a891-58b5f317d2c5",
    description: "Description for Certificate 1",
    tags: ["Certification", "GraphQL", "API layer", "Apollo"],
  },

  {
    name: "Intermediate Machine Learning",
    certifiedBy: "Kaggle",
    imageUrl: "https://www.kaggle.com/learn/certification/teslaatoz/intermediate-machine-learning",
    certificateUrl:
      "https://www.kaggle.com/learn/certification/teslaatoz/intermediate-machine-learning",
    description: "Description for Certificate 2",
    tags: ["Certificate", "Pandas", "Classification", "Regression"],
  },

];

export default certificates;
