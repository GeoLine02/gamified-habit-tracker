import DropDown from "@/components/ui/DropDown";
import Input from "@/components/ui/Input";
import Toggle from "@/components/ui/Toggle";
import React, { ChangeEvent, FormEvent } from "react";
import { FaCheck, FaTrash } from "react-icons/fa6";
import { HabitDetails } from "./habit.type";
import { calculateXP } from "../../utils/calculateExp";

interface NewHabitsFormProps {
  newHabitDetails: HabitDetails;
  errors: Record<string, string>;
  onSubmitForm: (e: FormEvent<HTMLFormElement>) => void;
  setNewHabitDetails: React.Dispatch<React.SetStateAction<HabitDetails>>;
  onResetForm: () => void;
}

const NewHabitsForm = ({
  newHabitDetails,
  errors,
  onSubmitForm,
  setNewHabitDetails,
  onResetForm,
}: NewHabitsFormProps) => {
  const onInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewHabitDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onDropDownChange = (frequency: string) => {
    setNewHabitDetails((prev) => ({
      ...prev,
      frequency,
    }));
  };

  const onToggleReminder = () => {
    setNewHabitDetails((prev) => ({
      ...prev,
      reminder: !prev.reminder,
      remindTime: "00:00",
    }));
  };

  const gainedXP = calculateXP(newHabitDetails);
  return (
    <form
      onReset={onResetForm}
      onSubmit={onSubmitForm}
      className="flex flex-col h-full"
    >
      <div className="flex-1 h-full overflow-y-auto p-2 sm:p-4 space-y-4">
        {/* Habit Title */}
        <Input>
          <Input.Label htmlFor="title">Habit Title</Input.Label>
          <Input.Field
            hasValidation={true}
            id="title"
            value={newHabitDetails.title}
            errorMessage={errors.title}
            name="title"
            onChange={onInputChange}
            placeholder="Ex: Drink 2L Water"
          />
        </Input>

        {/* Description */}
        <Input>
          <Input.Label htmlFor="description">Description</Input.Label>
          <Input.Textarea
            id="description"
            value={newHabitDetails.description}
            onChange={onInputChange}
            errorMessage={errors.description}
            name="description"
            placeholder="(Optional)"
          />
        </Input>

        {/* Frequency / Times / Reminder */}
        <div className="flex gap-4 sm:items-start flex-wrap">
          <DropDown>
            <DropDown.Label>Frequency</DropDown.Label>
            <DropDown.Button>{newHabitDetails.frequency}</DropDown.Button>
            <DropDown.Menu>
              <DropDown.Item onClick={() => onDropDownChange("daily")}>
                Daily
              </DropDown.Item>
              <DropDown.Item onClick={() => onDropDownChange("weekly")}>
                Weekly
              </DropDown.Item>
            </DropDown.Menu>
          </DropDown>

          <Input className="max-w-[120px]">
            <Input.Label htmlFor="timesPerDay">Times per/day</Input.Label>
            <Input.Field
              id="timesPerDay"
              value={Number(newHabitDetails.timesPerDay)}
              name="timesPerDay"
              hasValidation
              errorMessage={errors.timesPerDay}
              onChange={onInputChange}
              placeholder="1"
            />
          </Input>

          <div className="flex items-start gap-4">
            <div className="flex flex-col gap-1">
              <label
                className="text-medium-gray font-medium text-sm"
                htmlFor="reminder"
              >
                Reminder
              </label>
              <Toggle
                handleToggle={onToggleReminder}
                isToggled={newHabitDetails.reminder}
              />
            </div>
            {newHabitDetails.reminder && (
              <Input className="!w-fit">
                <Input.Label htmlFor="time">Choose Time</Input.Label>
                <Input.Field
                  id="time"
                  value={newHabitDetails.remindTime}
                  errorMessage={errors.remindTime}
                  onChange={onInputChange}
                  name="remindTime"
                  type="time"
                />
              </Input>
            )}
          </div>
        </div>

        <p className="text-medium-gray font-medium">Gained Exp: {gainedXP}XP</p>
      </div>

      {/* Footer */}
      <section
        className="
          flex gap-2 justify-end py-2 pb-4 px-4
          border-medium-gray/20 bg-white border-t-2 sm:rounded-b-2xl
        "
      >
        <button
          type="reset"
          className="font-medium flex items-center gap-2 bg-red-500 text-white cursor-pointer px-4 py-2 rounded-xl"
        >
          <FaTrash />
          <span>Discard</span>
        </button>
        <button
          type="submit"
          className="font-medium flex items-center gap-2 bg-custom-green text-white cursor-pointer py-2 px-4 rounded-xl"
        >
          <FaCheck />
          <span>Save</span>
        </button>
      </section>
    </form>
  );
};

export default NewHabitsForm;
