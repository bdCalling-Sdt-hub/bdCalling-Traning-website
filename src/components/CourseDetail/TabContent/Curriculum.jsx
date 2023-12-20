import AccordionCard from "@/components/Common/AccordionCard";
import FlexItem from "@/components/Common/FlexItem";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Check, FileText, Play } from "lucide-react";
import { useState } from "react";
import courseVideoList from "../../../../public/db/courseVideoContent.json";
import curriculum from "../../../../public/db/curriculum.json";

const Curriculum = () => {
  const { courseFeatures, jobPositions, solutions, certificate } = curriculum;
  const { modules } = courseVideoList;
  const [video, setVideo] = useState();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleNext = () => {
    setCurrentVideoIndex(currentVideoIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentVideoIndex(currentVideoIndex - 1);
  };

  return (
    <div className="mt-5">
      <div>
        <h1 className="text-xl  font-bold">
          What you will learn by doing the course
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 border border-[#2492EB] rounded-md my-8 p-5">
          {courseFeatures.map((item, index) => (
            <div className="flex items-center gap-2" key={index}>
              <p>
                <Check size={20} color="#2492EB" />
              </p>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <AspectRatio ratio={16 / 9} className="bg-muted">
          <iframe
            src={`https://www.youtube.com/embed/${video?.video}`}
            title="YouTube video player"
            frameborder="0"
            className="rounded w-full h-[200px] lg:h-[495px]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowfullscreen
          ></iframe>
        </AspectRatio>

        <div className="my-3">
          <h2 className="text-xl font-medium">
            {video?.no + 1}- {video?.name}
          </h2>
        </div>
        <div className="flex gap-2 items-center my-3 justify-end">
          <Button className="bg-primary px-5" onClick={handlePrevious}>
            Previous
          </Button>
          <Button className="bg-primary px-5" onClick={handleNext}>
            Next
          </Button>
        </div>
        <h1 className="text-xl  font-bold">Course Content</h1>
        <div className="my-8">
          {modules.map((module, index) => (
            <div key={index} className="mb-4">
              <AccordionCard title={module.name}>
                {module.note && (
                  <Button variant="link" className="block">
                    <FlexItem gap="gap-2">
                      <FileText size={20} />
                      <p className="text-[#2492EB]">{module.note}</p>
                    </FlexItem>
                  </Button>
                )}
                {module?.modules?.map((video, index) => {
                  const value = { ...video, no: index };
                  return (
                    <Button
                      variant="link"
                      className="block"
                      key={index}
                      onClick={() => setVideo(value)}
                    >
                      <FlexItem gap="gap-2">
                        <Play size={20} />
                        <p className="text-[#2492EB]">{video.name}</p>
                      </FlexItem>
                    </Button>
                  );
                })}
              </AccordionCard>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-100 p-5 rounded-md my-14">
        <h1 className="text-xl font-bold mb-3">Software You&#39;ll Learn</h1>
        <div className="flex items-center gap-2">
          <img src="/images/figma.png" alt="" />
          <p className="font-medium">Figma</p>
        </div>
      </div>
      <div>
        <h1 className="text-xl  font-bold">Open Job Positions</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 border border-[#2492EB] rounded-md my-8 p-5">
          {jobPositions.map((item, index) => (
            <div className="flex items-center gap-2" key={index}>
              <p>
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </p>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold">
          Exclusive Solutions That Set Us <br /> Apart
        </h1>
        <div className=" p-5">
          {solutions.map((item, index) => (
            <div className="flex items-center gap-2 mb-1" key={index}>
              <p>
                <div className="w-5 h-5 rounded bg-primary flex items-center justify-center">
                  <Check size={20} color="#fff" />
                </div>
              </p>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-xl  font-bold mt-6">Course certificate</h1>
        <p className="my-4">
          On successful completion of the course you will receive a certificate
          which will enable you to-
        </p>
        {certificate.map((item, index) => (
          <div className="flex items-center gap-2" key={index}>
            <p>
              <Check size={20} color="#2492EB" />
            </p>
            <p>{item}</p>
          </div>
        ))}

        <div className="mt-10">
          <img src="/images/certificate.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
