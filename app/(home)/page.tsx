import HabitsList from "./habits/HabitsList";
import NewHabitBtn from "./habits/NewHabitBtn";

export default function Home() {
  return (
    <div className="container px-4 flex flex-col gap-4">
      <HabitsList />
      <NewHabitBtn />
    </div>
  );
}
