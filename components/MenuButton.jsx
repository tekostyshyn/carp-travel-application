const MenuButton = ({ onClick, title, addClasses }) => {
  const classes = `text-base font-normal tracking-[1.4px] uppercase md:hidden ${addClasses}`;

  return (
    <>
      <button className={classes} onClick={onClick}>
        {title}
      </button>
    </>
  );
};

export default MenuButton;
