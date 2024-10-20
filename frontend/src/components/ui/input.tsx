import EyeImage from "../../assets/icons/eye.svg";
import Image from "next/image";

type InputProps = {
  placeHolder?: string;
  isPassword?: boolean;
  inputName?: string;
};

const Input = ({
  placeHolder = "input",
  isPassword,
  inputName,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-3 max-h-12">
      {inputName && (
        <div className="flex justify-between">
          <label
            htmlFor={inputName}
            className="text-base font-normal inline-block"
          >
            {inputName}
          </label>
        </div>
      )}
      <div>
        <input
          name={inputName}
          className="p-4 w-full rounded-lg text-system-black text-sm font-normal border-outline-default border-[1px]
	  focus:outline-none focus:border-[3px] focus:top-[-2px] focus:pl-[14px] focus:relative focus:border-outline-primary"
          type={isPassword ? "password" : "text"}
          placeholder={placeHolder}
        />
        {isPassword && (
          <span className="absolute z-2">
            <Image
              src={EyeImage}
              className="relative size-6 left-[-36px] top-4 border-outline-default"
              alt="See password"
            />
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
