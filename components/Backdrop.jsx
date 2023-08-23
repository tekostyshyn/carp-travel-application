import MenuButton from "./MenuButton";
import MenuNav from "./MenuNav";

const BackDrop = ({ onClick }) => {
  return (
    <div className="backdrop relative flex items-center	justify-center">
      <MenuButton onClick={onClick} title="Close" addClasses="absolute top-[43px] right-[20px]" />
      <MenuNav />
    </div>
  );
};

export default BackDrop;
