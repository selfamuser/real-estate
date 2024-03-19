import { FaExternalLinkAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';

export default function About() {
  return (
    <>
    <div className='mt-10 mb-10  max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-purple-800'>About Pure Homes</h1>
      <p className='mb-4 text-slate-700'>Pure Homes is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.</p>
      <p className='mb-4 text-slate-700'>
      Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
      </p>
      <p className='mb-4 text-slate-700'>Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.</p>
    </div>

    <div className=' max-w-6xl mb-8 mx-auto '>
      <h1 className='text-3xl font-bold  mb-4 text-purple-800'>
        About Developer
      </h1>
      <h3 className="text-xl font-bold text-purple-800 mb-2">
        Utkarsh Shukla
      </h3>
      <p className='mb-4 text-slate-700'>
      I am a seasoned web developer with over 2 years of hands-on experience specializing in the MERN stack - MongoDB, Express.js, React.js, and Node.js. My journey in web development has been marked by a relentless pursuit of excellence and a passion for crafting innovative solutions that push the boundaries of what&#39;s possible on the web.
      </p>
      <h2 className="text-xl font-bold  mb-4 text-purple-800">
        Skills and Expertise
      </h2>
      <p className='mb-4 text-slate-700'>
        <ul className='mx-4 list-disc text-slate-700'>
          <li >
          MongoDB: With a solid foundation in MongoDB, I excel at designing and implementing scalable and efficient database solutions. I leverage MongoDB s flexible document-oriented model to store and manage data seamlessly, ensuring optimal performance and reliability in web applications.
          </li>
          <li>
          Express.js: As a proficient Express.js developer, I have a deep understanding of building robust and feature-rich server-side applications. With Express.js, I can swiftly create RESTful APIs and middleware, facilitating seamless communication between the client and server.
          </li>
          <li>
          React.js: I am well-versed in React.js, a powerful library for building dynamic and interactive user interfaces. Leveraging React&#39;s component-based architecture, I develop intuitive and engaging front-end experiences that captivate users and drive engagement.
          </li>
          <li>
          Node.js: With expertise in Node.js, I specialize in developing scalable and high-performance server-side applications. I harness the power of Node.js to handle asynchronous operations efficiently, ensuring responsiveness and reliability in web applications.
          </li>
        </ul>
      </p>
    </div>

        <div className="mb-20 flex flex-col items-center justify-center h-full">
            <div className="bg-gray-200 text-xl shadow-md rounded-lg p-8 w-80">
                <h2 className="text-3xl text-purple-700 font-bold mb-4">Contact Me</h2>
                <div className="flex items-center mb-4">
                    <FaGithub className="text-purple-600 mr-2" />
                    <a href="https://github.com/selfamuser" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:font-bold">GitHub</a>
                </div>
                <div className="flex items-center mb-4">
                    <FaLinkedin className="text-purple-600 mr-2" />
                    <a href="https://linkedin.com/in/utkarsh-lajja-shukla-b36901186/" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:font-bold">LinkedIn</a>
                </div>
                <div className="flex items-center mb-4">
                    <FaExternalLinkAlt className="text-purple-600 mr-2" />
                    <a href="https://linkedin.com/in/utkarsh-lajja-shukla-b36901186/" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:font-bold">E-Portfolio</a>
                </div>
                <div className="flex items-center mb-4">
                    <FiMail className="text-purple-700 mr-2" />
                    <span className='text-purple-700'>utkshukla9@gmail.com</span>
                </div>
                <div className="flex items-center">
                    <FiPhone className="text-purple-700 mr-2" />
                    <span className='text-purple-700'>+91 7080972630</span>
                </div>
            </div>
        </div>

    </>
  )
}