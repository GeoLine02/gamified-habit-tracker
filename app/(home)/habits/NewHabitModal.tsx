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
      className="w-full max-w-[calc(100%-50px)] h-full max-h-[calc(100%-50px)] overflow-y-auto relative"
      isOpen={isHabitsModalOpen}
      onClose={onToggleNewHabitModal}
    >
      <div className="space-y-4 mt-2">
        <Input>
          <Input.Label>Habit Title</Input.Label>
          <Input.Field placeholder="Ex: Drink 2L Water" />
        </Input>
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

        <div className="flex items-start gap-4 flex-wrap  ">
          <DropDown>
            <DropDown.Label>Frequency</DropDown.Label>
            <DropDown.Button>Daily</DropDown.Button>
            <DropDown.Menu>
              <DropDown.Item>Daily</DropDown.Item>
              <DropDown.Item>Weekly</DropDown.Item>
            </DropDown.Menu>
          </DropDown>
          <Input className="max-w-[95px]">
            <Input.Label>Times per/day</Input.Label>
            <Input.Field placeholder="1" />
          </Input>
          <div className="flex items-start gap-4">
            <div className="flex flex-col gap-1">
              <label
                className="text-medium-gray font-medium text-sm "
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
      <section className="flex gap-2 justify-end py-2 pb-4 absolute bottom-0 right-4 bg-white w-full">
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
