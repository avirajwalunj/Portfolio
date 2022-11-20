import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2  flex justify-center items-center ">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-[#5651e5]"> Aviraj</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Full stack Web Developer</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I’m focused on building website with front-end web applications with
            integrating back-end technologies. I can convert your vision to
            code. Whenever I'm not coding I hit the road as I love travelling.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link href="https://www.linkedin.com/in/avirajwalunj/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href="https://github.com/avirajwalunj">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
            <Link href="mailto:walunjaviraj123@yoursite.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="mailto:walunjaviraj123@yoursite.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
