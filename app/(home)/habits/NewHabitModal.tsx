"use client";

import Modal from "@/components/ui/Modal";
import { useHabitsContext } from "@/context/HabitsContext";
import NewHabitsForm from "./NewHabitsForm";
import { FormEvent, useEffect, useState } from "react";
import { HabitDetails } from "./habit.type";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "@/components/shared/hooks/useLocalStorage";
import { calculateXP } from "../utils/calculateExp";
import { validateForm } from "@/components/utils/validateForm";
import { habitSchema } from "./schema/newHabitSchema";

const NewHabitModal = () => {
  const { habits, setHabits, onToggleNewHabitModal, isHabitsModalOpen } =
    useHabitsContext();

  const { setItem } = useLocalStorage("habits");

  const [newHabitDetails, setNewHabitDetails] = useState<HabitDetails>({
    id: "",
    title: "",
    description: "",
    frequency: "daily",
    reminder: false,
    remindTime: "",
    timesPerDay: 1,
    streak: 0,
    xp: 0,
    progressPercentage: 0,
    isCompleted: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setNewHabitDetails((prevFields) => ({
      ...prevFields,
      id: uuidv4(),
    }));
  }, [setNewHabitDetails]);

  const onResetForm = () => {
    setNewHabitDetails({
      id: "",
      title: "",
      description: "",
      frequency: "daily",
      reminder: false,
      remindTime: "",
      timesPerDay: 1,
      streak: 0,
      xp: 0,
      progressPercentage: 0,
      isCompleted: false,
    });
  };

  const onCreateNewHabit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = validateForm(habitSchema, newHabitDetails);

    if (!result.success) {
      setErrors(result.errors);
      return;
    }

    setErrors({});

    const habitWithXP: HabitDetails = {
      ...result.data,
      id: uuidv4(),
      frequency: "daily",
      xp: calculateXP(newHabitDetails),
      streak: 0,
      progressPercentage: 0,
      isCompleted: newHabitDetails.isCompleted,
    };

    const updatedHabits = [...habits, habitWithXP];
    setHabits(updatedHabits);
    setItem(updatedHabits);

    onResetForm();
    onToggleNewHabitModal();
  };

  return (
    <Modal
      title="New Habit"
      className="
          w-full max-w-[calc(100%-40px)] h-full max-h-[calc(100%-40px)] 
          sm:max-w-lg sm:h-auto md:max-h-[calc(100%-20px)]
          bg-white rounded-2xl shadow-xl
          flex flex-col
        "
      isOpen={isHabitsModalOpen}
      onClose={onToggleNewHabitModal}
    >
      <NewHabitsForm
        onResetForm={onResetForm}
        errors={errors}
        onSubmitForm={onCreateNewHabit}
        newHabitDetails={newHabitDetails}
        setNewHabitDetails={setNewHabitDetails}
      />
    </Modal>
  );
};

export default NewHabitModal;
