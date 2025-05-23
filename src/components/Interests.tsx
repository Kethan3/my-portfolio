const interests = [
  "Artificial Intelligence",
  "Full Stack Development",
  "Cloud Deployment & DevOps",
  "Gaming & Tech Communities",
];

export default function Interests() {
  return (
    <section
      id="interests"
      className="bg-zinc-950 text-white py-4 px-4 max-w-5xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Interests</h2>
      <ul className="grid gap-6 sm:grid-cols-2">
        {interests.map((interest, index) => (
          <li
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 shadow hover:bg-zinc-800 transition"
          >
            <p className="text-gray-300">{interest}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
