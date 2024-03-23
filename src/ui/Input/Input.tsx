import {Dispatch, FC, SetStateAction} from 'react';
import {InputStatus} from "./types/InputStatus.ts";
import classNames from "classnames";
import './Input.scss';

interface Props {
  children: string;
  status?: InputStatus;
  type: 'text' | 'password' | 'email' | 'number' | 'tel';
  required: boolean;
  labelText: string;
  name: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export const Input: FC<Props> = ({
    children,
    type,
    required,
    labelText, name,
    status,
    value,
    setValue,
  }) => {
  const classesInput = classNames(
    'input',
    {'input--success': status === InputStatus.SUCCESS},
    {'input--warning': status === InputStatus.WARNING},
    {'input--error': status === InputStatus.ERROR},
  );
  
  const classesLabel = classNames(
    'label',
    {'label--success': status === InputStatus.SUCCESS},
    {'label--warning': status === InputStatus.WARNING},
    {'label--error': status === InputStatus.ERROR},
  );
  
  return (
    <div className='wrapper-input'>
      <label
        className={classesLabel}
        htmlFor={name}
      >
        {labelText}
        {required && '*'}
      </label>
      
      <input
        className={classesInput}
        id={name}
        type={type}
        placeholder={children}
        onChange={e => setValue(e.target.value)}
        value={value}
        required={required}
      />
    </div>
  );
};
