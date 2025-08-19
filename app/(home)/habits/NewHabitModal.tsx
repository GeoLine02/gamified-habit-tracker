"use client";

import DropDown from "@/components/ui/DropDown";
import Input from "@/components/ui/Input";
import Modal from "@/components/ui/Modal";
import Toggle from "@/components/ui/Toggle";
import { useHabitsContext } from "@/context/HabitsContext";
import { FaTrash, FaCheck } from "react-icons/fa";

const NewHabitModal = () => {
  const { onToggleNewHabitModal, isHabitsModalOpen } = useHabitsContext();

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
      {/* Body (scrollable form) */}
      <div className="flex-1 h-full overflow-y-auto p-2 sm:p-4 space-y-4">
        {/* Habit Title */}
        <Input>
          <Input.Label>Habit Title</Input.Label>
          <Input.Field placeholder="Ex: Drink 2L Water" />
        </Input>

        {/* Description */}
        <div className="space-y-1 flex flex-col">
          <label
            className="text-medium-gray text-sm font-medium"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            placeholder="(Optional)"
            className="border-2 border-medium-gray/20 rounded-xl p-2 min-h-[80px] focus:outline-custom-green transition-all outline-transparent duration-300 font-medium"
            name="description"
          ></textarea>
        </div>

        {/* Frequency / Times / Reminder */}
        <div className="flex gap-4 sm:items-start sm:gap-6 flex-wrap">
          <DropDown>
            <DropDown.Label>Frequency</DropDown.Label>
            <DropDown.Button>Daily</DropDown.Button>
            <DropDown.Menu>
              <DropDown.Item>Daily</DropDown.Item>
              <DropDown.Item>Weekly</DropDown.Item>
            </DropDown.Menu>
          </DropDown>

          <Input className="max-w-[120px]">
            <Input.Label>Times per/day</Input.Label>
            <Input.Field placeholder="1" />
          </Input>

          <div className="flex items-start gap-4">
            <div className="flex flex-col gap-1">
              <label
                className="text-medium-gray font-medium text-sm"
                htmlFor="reminder"
              >
                Reminder
              </label>
              <Toggle handleToggle={() => {}} isToggled={true} />
            </div>
            <Input className="!w-fit">
              <Input.Label>Choose Time</Input.Label>
              <Input.Field type="time" />
            </Input>
          </div>
        </div>

        <p className="text-medium-gray font-medium">Gained Exp: 10XP</p>
      </div>

      {/* Footer (always at bottom) */}
      <section
        className="
          flex gap-2 justify-end py-2 pb-4 px-4
          border-medium-gray/20 bg-white border-t-2 sm:rounded-b-2xl
        "
      >
        <button className="font-medium flex items-center gap-2 bg-red-500 text-white cursor-pointer px-4 py-2 rounded-xl">
          <FaTrash />
          <span>Discard</span>
        </button>
        <button className="font-medium flex items-center gap-2 bg-custom-green text-white cursor-pointer py-2 px-4 rounded-xl">
          <FaCheck />
          <span>Save</span>
        </button>
      </section>
    </Modal>
  );
};

export default NewHabitModal;
