import logo from "@assets/icons/logo.png";
import { Link } from 'react-router-dom';
import './Logo.scss';
import cn from "classnames";

interface Props {
  classNames?: string;
}

export const Logo: React.FC<Props> = ({ classNames }) => {
  const className = cn(
    classNames,
    'logo',
  )

  return (
    <Link
      className={className}
      to={"/frontend"}
    >
      <img src={logo} alt="logo" />
    </Link>
  );
};