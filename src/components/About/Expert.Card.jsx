const ExpertCard = ({ data }) => {
  const { image, name, title } = data;

  return (
    <div className="bg-shadow shadow h-[400px] rounded-lg">
      <div className="bg-gray-100 rounded-t-lg">
        <img src={image} alt="" className="rounded-lg h-[300px]" />
      </div>
      <div className="p-2">
        <h1 className="text-black font-bold text-lg">{name}</h1>
        <h1 className="text-black">{title}</h1>
      </div>
    </div>
  );
};

export default ExpertCard;
