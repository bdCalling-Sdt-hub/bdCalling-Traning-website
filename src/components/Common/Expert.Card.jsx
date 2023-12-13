const ExpertCard = ({ data }) => {
  const { image, name, title } = data;

  return (
    <div className="bg-shadow shadow h-[450px] rounded-lg">
      <div className="bg-gray-100 rounded-t-lg">
        <img src={image} alt="" className="rounded-lg h-[350px] w-full" />
      </div>
      <div className="p-2">
        <h1 className="text-black font-medium text-lg">{name}</h1>
        <p className="text-gray-500">{title}</p>
      </div>
    </div>
  );
};

export default ExpertCard;
