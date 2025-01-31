type PropsType = {name: string}
export default function FoodItem({ name }: PropsType) {
  return (
    <div className="text-center text-text font-bold font-sans bg-secondary p-3 my-3 max-w-xs block mx-auto">
      {name}
    </div>
  );
}