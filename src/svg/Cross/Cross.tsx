import cn from "classnames";
import './Cross.scss';

interface Props {
  classNames?: string;
  isPrimary?: boolean;
}

export const Cross: React.FC<Props> = ({ classNames, isPrimary = false }) => {
  const className = cn(
    classNames,
    {'cross--primary': isPrimary},
    {'cross--secondary': !isPrimary}
  );

  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_742_879)">
      <path d="M16 14.1146L22.6 7.51465L24.4853 9.39998L17.8853 16L24.4853 22.6L22.6 24.4853L16 17.8853L9.39998 24.4853L7.51465 22.6L14.1146 16L7.51465 9.39998L9.39998 7.51465L16 14.1146Z" fill="none"/>
      </g>
      <defs>
      <clipPath id="clip0_742_879">
      <rect width="32" height="32" rx="16" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  );
};