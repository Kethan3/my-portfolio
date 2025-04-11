export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-zinc-950 text-white py-20 px-4 max-w-5xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">Contact</h2>
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-md">
        <p className="text-gray-300 mb-6 text-center">
          Feel free to reach out to me via email or connect on GitHub.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:kethangowda003@gmail.com"
            className="bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-2 px-6 rounded-full"
          >
            Send Email
          </a>
          <a
            href="https://github.com/Kethan3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 underline"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
