import HabitsList from "./habits/HabitsList";
import NewHabitBtn from "./habits/NewHabitBtn";
import NewHabitModal from "./habits/NewHabitModal";

export default function Home() {
  return (
    <div className="container px-4 flex flex-col gap-4">
      <HabitsList />
      <NewHabitBtn />
      <NewHabitModal />
    </div>
  );
}
