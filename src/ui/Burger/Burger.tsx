import './Burger.scss';
import cn from "classnames";

interface Props {
  classNames?: string;
  callback: () => void;
  modalState: boolean;
}

export const Burger: React.FC<Props> = ({ classNames, callback, modalState }) => {
  const className = cn(
    classNames,
    {'burger--active': modalState },
    'burger',
  )

  return (
    <div className={className} onClick={callback}>
      <span className='burger__line'></span>
      <span className='burger__line'></span>
      <span className='burger__line'></span>
      <span className='burger__line'></span>
    </div>
  );
};