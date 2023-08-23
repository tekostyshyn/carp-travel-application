const Button = ({ children }) => {
  return (
    <div className="relative sm:h-[53px] md:h-[50px] lg:h-[71px] w-full">
      <button className="main_button">{children}</button>
      <div className="hor_border top-0 left-0"></div>
      <div className="hor_border top-0 right-0"></div>
      <div className="hor_border bottom-0 left-0"></div>
      <div className="hor_border bottom-0 right-0"></div>
      <div className="ver_border left-0 top-0"></div>
      <div className="ver_border left-0 bottom-0"></div>
      <div className="ver_border right-0 top-0"></div>
      <div className="ver_border right-0 bottom-0"></div>
    </div>
  );
};

export default Button;
