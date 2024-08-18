import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="h-20 flex items-center justify-between px-4 fixed top-0 left-0 right-0 bg-white shadow-md">
      <img src="MindscapeLogo.png" className="w-40" alt="Mindscape Logo" />
      <Navigation/>
    </div>
  );
};

export default Header;
