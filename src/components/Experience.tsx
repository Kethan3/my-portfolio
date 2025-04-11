type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
};

const experiences: ExperienceItem[] = [
  {
    role: "Fullstack AI Developer Intern",
    company: "StackLane",
    period: "Mar 2025 - Present",
    description:
      "Working on fullstack projects using React, Vite, Tailwind CSS, Hono, Prisma. Built REST APIs, deployed on Azure using GitHub Actions.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-zinc-950 text-white py-20 px-4 max-w-5xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
      <div className="relative border-l-2 border-zinc-700 pl-6 space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative">
            <div className="absolute -left-4 top-1 w-4 h-4 bg-blue-500 rounded-full border-4 border-zinc-950 shadow-md" />
            <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
            <p className="text-gray-400 text-sm mb-2">
              {exp.company} &mdash; <span>{exp.period}</span>
            </p>
            <p className="text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
