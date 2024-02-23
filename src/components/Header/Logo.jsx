import { useContext } from "react";
import logo from "../../assets/logo.png";
import { CategoryContext } from "../../context";
const Logo = () => {
  const { setSelectedCategory } = useContext(CategoryContext);
  return (
    <a
      href='/'
      onClick={(e) => {
        e.preventDefault();
        setSelectedCategory("all");
      }}
    >
      <img className='max-w-[100px] md:max-w-[165px]' src={logo} alt='Lws' />
    </a>
  );
};

export default Logo;
