type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  details?: string;
};

const education: EducationItem[] = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Siddaganga Institute Of Technology",
    period: "2021 - 2025",
    details: "9.16 CGPA",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-zinc-950 text-white py-4 px-4 max-w-5xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Education</h2>
      <div className="space-y-8">
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-md"
          >
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-400 text-sm">
              {edu.institution} — <span>{edu.period}</span>
            </p>
            {edu.details && <p className="mt-2 text-gray-300">{edu.details}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
