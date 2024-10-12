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

  // {
  //   name: "Redis Streams",
  //   certifiedBy: "Redis",
  //   imageUrl: redis_streams,
  //   certificateUrl:
  //     "https://university.redis.com/certificates/ef5a504413604fdba1d7069d297d07fe",
  //   description: "Description for Certificate 2",
  //   tags: ["Certificate", "Streams", "Real-time processing", "Pub/Sub"],
  // },
  // {
  //   name: "Redis Datastructures",
  //   certifiedBy: "Redis",
  //   imageUrl: redis_ds,
  //   certificateUrl:
  //     "https://university.redis.com/certificates/c6354adb56434533a8dc7e04e382e6e9",
  //   description: "Description for Certificate 2",
  //   tags: [
  //     "Certificate",
  //     "Redis",
  //     "Storage Analysis",
  //     "Time Complexity Analysis",
  //   ],
  // },
];

export default certificates;
