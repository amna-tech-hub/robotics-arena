const ButtonOutline = ({
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
        bg-transparent
        text-[#FFFFFF]
        border-2
        border-[#FFFFFF]
        font-roboto
        font-bold
        text-body
        rounded-button
        hover:bg-accent-red
        hover:text-text-primary
        transition-all
        duration-300
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default ButtonOutline;