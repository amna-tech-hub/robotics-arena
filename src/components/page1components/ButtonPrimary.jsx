const ButtonPrimary = ({
  children,
  type = "button",
  className = "",
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        bg-accent-red
        text-text-primary
        font-roboto
        font-bold
        text-body
        px-6
        rounded-button
        shadow-button
        hover:bg-opacity-80
        transition-all
        duration-300
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;