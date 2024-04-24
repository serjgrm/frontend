import {FC} from 'react';
import './Checkbox.scss';
import classNames from "classnames";

interface Props {
  active: boolean;
  callbackToggle: () => void;
  disabled?: boolean;
}

export const Checkbox: FC<Props> = ({ active, callbackToggle, disabled }) => {
  const classes = classNames(
    'checkbox',
    {'checkbox--active': active}
  );

  const classesForIcon = classNames(
    'checkbox__icon',
    {'checkbox__icon--active': active}
  )
  
  return (
    <button
      className={classes}
      onClick={callbackToggle}
      disabled={disabled}
    >
      <svg
        className={classesForIcon}
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_407_146)">
          <path
            d="M12.6294 18.7594L23.5237 7.86401L25.2007 9.53987L12.6294 22.1111L5.08691 14.5686L6.76277 12.8928L12.6294 18.7594Z"
            fill="#FFFFFF"
          />
        </g>
        <defs>
          <clipPath id="clip0_407_146">
            <rect x="0.777344" y="0.777832" width="28.4444" height="28.4444" rx="4" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    
    </button>
  );
};
