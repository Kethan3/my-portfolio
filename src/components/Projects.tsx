type Project = {
  title: string;
  description: string;
  techStack: string[];
  link: string;
};

const projects: Project[] = [
  {
    title: "HackerNews Server",
    description:
      "Backend project that replicates the HackerNews API using Hono, Supabase, and Prisma. Deployed on Azure using GitHub Actions.",
    techStack: ["Hono", "TypeScript", "Supabase", "Prisma", "Azure"],
    link: "https://github.com/Kethan3/hackernews-server",
  },
  {
    title: "Decentralized Auction",
    description:
      "A blockchain-based auction platform built with Solidity and React. Allows secure bidding and transparent smart contract logic on the Ethereum network.",
    techStack: ["Solidity", "React","JavaScript", "Truffle", "Blockchain"],
    link: "https://github.com/Kethan3/decentralized-auction",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-black text-white py-20 px-4 max-w-5xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Projects</h2>
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-800 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gray-800 text-gray-300 px-2 py-1 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
