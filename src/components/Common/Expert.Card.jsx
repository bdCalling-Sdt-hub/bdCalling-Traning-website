import { imgUrl } from "@/config";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const ExpertCard = ({ data }) => {
  const { image, fullName, expert } = data;

  const src = image.startsWith("https") ? image : `${imgUrl}/${image}`;

  return (
    <Card className="w-full h-[420px] hover:scale-[102%] duration-200 hover:shadow-xl  bg-[#3098fb]">
      <CardHeader className="bg-white">
        <img src={src} alt="" className="rounded-t-md h-[340px] w-full " />
      </CardHeader>
      <CardContent className="text-white mt-5">
        <CardTitle>{fullName}</CardTitle>
        <CardDescription className="text-gray-300 mt-2 text-md">
          {expert}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ExpertCard;
