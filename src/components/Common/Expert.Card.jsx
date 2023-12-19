import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const ExpertCard = ({ data }) => {
  const { image, name, title } = data;

  return (
    <Card className="w-full h-[420px] hover:scale-[102%] duration-200 hover:shadow-xl  bg-[#3098fb]">
      <CardHeader className="bg-white rounded-t-lg">
        <img src={image} alt="" className="rounded-lg h-[300px] w-full" />
      </CardHeader>
      <CardContent className=" text-white  mt-5">
        <CardTitle>{name}</CardTitle>
        <CardDescription className="text-black">{title}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ExpertCard;
