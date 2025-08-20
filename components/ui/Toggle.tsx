import classNames from "classnames";

interface ToggleProps {
  isToggled: boolean;
  handleToggle: () => void;
}

const Toggle = ({ handleToggle, isToggled }: ToggleProps) => {
  const toggleAnimation = classNames("absolute transition-all duration-300", {
    "left-1": !isToggled,
    "left-6": isToggled,
  });

  return (
    <div
      aria-labelledby="toggler button"
      onClick={handleToggle}
      className={`${
        isToggled ? "bg-custom-green" : "bg-medium-gray/20"
      } w-12 h-7 rounded-full relative cursor-pointer p-1`}
    >
      <div
        className={`${toggleAnimation} w-5 aspect-square rounded-full bg-white`}
      ></div>
    </div>
  );
};

export default Toggle;
