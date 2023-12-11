import { Checkbox } from "../ui/checkbox";

const AccordionAnswerText = ({ data, index }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <Checkbox id={data} />
        <label
          htmlFor={data}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {data}
        </label>
      </div>
      <h1>(10)</h1>
    </div>
  );
};

export default AccordionAnswerText;
