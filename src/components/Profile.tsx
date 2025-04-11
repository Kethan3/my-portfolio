import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Profile() {
  return (
    <section
      id="profile"
      className="min-h-[80vh] bg-black text-white flex flex-col items-center justify-center px-4 pb-2"
    >
      <img
        src="/kethanpfp2.jpg" 
        alt="Profile"
        className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-6"
      />

      <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">
        Kethan Gowda N
      </h1>
      <p className="text-lg md:text-xl text-gray-400 mb-4 text-center">
        Fullstack AI Developer | React • Hono • Tailwind • Prisma • Azure
      </p>
      <div className="flex gap-4 mt-4">
        <a
          href="https://github.com/Kethan3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition"
        >
          {<FontAwesomeIcon icon={faGithub} />} GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/kethan-gowda-51657224b"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition"
        >
          {<FontAwesomeIcon icon={faLinkedin} />} LinkedIn
        </a>


        <a
          href="https://www.instagram.com/kethan2003/#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition"
        >
          {<FontAwesomeIcon icon={faInstagram} />} Instagram
        </a>

        
      </div>
      
    </section>
  );
}
