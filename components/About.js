import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase  text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who am I</h2>
          <p className="py-2 text-gray-1000">
            Electrical Engineer turned to coding and development for fun. And
            stayed there.
          </p>
          <p className="py-2 text-gray-600">
            I'm an enthusiatic and passionate web developer with growing roots
            in Data Science, ML and AI. I have worked on Frontend as well as
            Backend with different{" "}
            <Link href="/#skills">
              <span className="text-[#5651e5] cursor-pointer">
                technologies
              </span>
            </Link>{" "}
            mentioned below. I have also built some projects with my techstack.
            I like to work with cutting edge technologies and broaden my
            knowledge.
          </p>
          <p className="py-2 text-gray-600">
            I have also completed my internship in last summer at Mahindra
            Finance where I created an dashboard with Elk stack for analyzing
            data.
          </p>
          <p className="py-2 text-[#5651e5] underline cursor-pointer">
            <a href="https://drive.google.com/file/d/1_v7gXtQokAMdOuTSJ6ZmJ1b5ajOjQE9w/view?usp=share_link">
              You can get my resume here.
            </a>
          </p>
        </div>
        <div className="pt-4 w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <div className="rounded-xl">
            <Image
              src="/../public/assets/about.jpg"
              alt="/"
              width="1000"
              height="1500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
