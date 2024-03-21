import {Dispatch, FC, SetStateAction} from 'react';
import {InputStatus} from "./types/InputStatus.ts";
import classNames from "classnames";
import './Input.scss';

interface Props {
  children: string;
  status?: InputStatus;
  type: 'text' | 'password' | 'email' | 'number' | 'tel';
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export const Input: FC<Props> = ({ children, type, status, value, setValue }) => {
  const classes = classNames(
    'input',
    {'input--filled': value.length > 0},
    {'input--success': status === InputStatus.SUCCESS},
    {'input--warning': status === InputStatus.WARNING},
    {'input--error': status === InputStatus.ERROR},
  );
  
  return (
    <input
      className={classes}
      type={type}
      placeholder={children}
      onChange={e => setValue(e.target.value)}
      value={value}
    />
  );
};
