import HabitsList from "./components/habits/HabitsList";
import NewHabitBtn from "./components/habits/NewHabitBtn";
import NewHabitModal from "./components/habits/NewHabitModal";

export default function Home() {
  return (
    <div className="container px-4 flex flex-col gap-4">
      <HabitsList />
      <NewHabitBtn />
      <NewHabitModal />
    </div>
  );
}
