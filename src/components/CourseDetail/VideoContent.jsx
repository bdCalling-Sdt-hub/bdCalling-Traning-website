import FlexItem from "@/components/Common/FlexItem";
import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";
import { useState } from "react";
import AccordionCard from "../Common/AccordionCard";
import { AspectRatio } from "../ui/aspect-ratio";

const VideoContent = ({ data: modules }) => {
  const [video, setVideo] = useState();

  //previous and next func
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleNext = () => {
    setCurrentVideoIndex(currentVideoIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentVideoIndex(currentVideoIndex - 1);
  };

  return (
    <div>
      <AspectRatio ratio={16 / 9} className="bg-muted ">
        <iframe
          src={`${video?.video}&autoplay=1`}
          title="YouTube video player"
          className="rounded w-full h-full"
        ></iframe>
      </AspectRatio>

      <div className="my-3">
        <h2 className="text-xl font-medium">
          {video?.no}- {video?.name}
        </h2>
      </div>

      {/* next and previous button */}
      <div className="flex gap-2 items-center my-3 justify-end">
        <Button className="bg-primary px-5" onClick={handlePrevious}>
          Previous
        </Button>
        <Button className="bg-primary px-5" onClick={handleNext}>
          Next
        </Button>
      </div>

      <div className="my-8">
        {modules.map((module, index) => (
          <div key={index} className="mb-5">
            <AccordionCard title={module.module_title}>
              {module?.module_class?.map((video, index) => {
                const value = { ...video, no: index };
                return (
                  <Button
                    variant="link"
                    className="block border-b w-full rounded-none"
                    key={index}
                    onClick={() => setVideo(value)}
                  >
                    <FlexItem gap="gap-2">
                      <Youtube size={20} fill="#fff" strokeWidth={1.5} />
                      <p className=" text-[15px] text-gray-500">
                        {index}. {video.name}
                      </p>
                    </FlexItem>
                  </Button>
                );
              })}
            </AccordionCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoContent;
