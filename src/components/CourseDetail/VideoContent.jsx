import FlexItem from "@/components/Common/FlexItem";
import { Button } from "@/components/ui/button";
import { FileText, Play } from "lucide-react";
import { useState } from "react";
import courseVideoList from "../../../public/db/courseVideoContent.json";
import AccordionCard from "../Common/AccordionCard";
import { AspectRatio } from "../ui/aspect-ratio";

const VideoContent = () => {
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
      <div>
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
    </div>
  );
};

export default VideoContent;
