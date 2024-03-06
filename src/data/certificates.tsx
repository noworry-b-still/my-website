import apollo from "../images/apollo.png";
import redis_js from "../images/redis-js.png";
import redis_streams from "../images/redis-streams.png";
import redis_ds from "../images/redis-ds.png";

const certificates = [
  {
    name: "Redis Developer - Professional",
    certifiedBy: "Redis",
    imageUrl: redis_ds,
    certificateUrl:
      "https://university.redis.com/certificates/4d3b18dadcd14cb09815dabbe3f84cc4",
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
    name: "Redis For JavaScript Developers",
    certifiedBy: "Redis",
    imageUrl: redis_js,
    certificateUrl:
      "https://university.redis.com/certificates/4d3b18dadcd14cb09815dabbe3f84cc4",
    description: "Description for Certificate 2",
    tags: ["Certificate", "Redis", "User Interface", "JavaScript"],
  },
  {
    name: "Redis Streams",
    certifiedBy: "Redis",
    imageUrl: redis_streams,
    certificateUrl:
      "https://university.redis.com/certificates/ef5a504413604fdba1d7069d297d07fe",
    description: "Description for Certificate 2",
    tags: ["Certificate", "Streams", "Real-time processing", "Pub/Sub"],
  },
  {
    name: "Redis Datastructures",
    certifiedBy: "Redis",
    imageUrl: redis_ds,
    certificateUrl:
      "https://university.redis.com/certificates/c6354adb56434533a8dc7e04e382e6e9",
    description: "Description for Certificate 2",
    tags: [
      "Certificate",
      "Redis",
      "Storage Analysis",
      "Time Complexity Analysis",
    ],
  },
];

export default certificates;
