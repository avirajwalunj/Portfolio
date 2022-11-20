import Image from "next/image";
import Link from "next/link";
import countrymaniaImg from "../public/assets/projects/Country Mania.jpg";
import bestbuyImg from "../public/assets/projects/BestBuy.jpg";
import todoistImg from "../public/assets/projects/ToDoist.jpg";
import ProjectItem from "./projectItem";

function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4 ">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <projectItem
            title="Country Mania"
            backgroundImg={countrymaniaImg}
            projectUrl="/countrymania"
            tech="NextJS"
          />

          <projectItem
            title="BestBuy"
            backgroundImg={bestbuyImg}
            projectUrl="/bestbuy"
            tech="Django"
          />

          <projectItem
            title="ToDoist"
            backgroundImg={todoistImg}
            projectUrl="/todoist"
            tech="Django and reactJS"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
