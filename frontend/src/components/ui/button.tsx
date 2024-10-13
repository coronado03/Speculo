type buttonProps = {
  label?: string;
};

const Button = ({ label = "Button" }: buttonProps) => {
  return (
    <button className="bg-primary-main py-4 w-80 rounded-lg text-system-white text-base font-semibold">
      {label}
    </button>
  );
};

export default Button;
