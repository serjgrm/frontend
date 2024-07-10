import cn from "classnames";
import './Tick.scss';

interface Props {
  classNames?: string;
  isPrimary?: boolean;
}

export const Tick: React.FC<Props> = ({ classNames, isPrimary = false}) => {
  const className = cn(
    classNames,
    'tick',
    {'tick--primary': isPrimary},
    {'tick--secondary': !isPrimary}
  );

  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M24.5079 7.13865C24.7364 7.27338 24.9019 7.49334 24.9682 7.75014C25.0345 8.00694 24.996 8.27954 24.8613 8.50798L15.4119 24.508C15.3352 24.6376 15.2302 24.7483 15.1048 24.8316C14.9793 24.915 14.8367 24.969 14.6875 24.9895C14.5382 25.01 14.3863 24.9965 14.243 24.9501C14.0997 24.9037 13.9688 24.8255 13.8599 24.7213L7.3066 18.4507C7.11494 18.2671 7.00403 18.015 6.99828 17.7497C6.99253 17.4844 7.09241 17.2276 7.27594 17.036C7.45947 16.8443 7.71162 16.7334 7.97692 16.7277C8.24222 16.7219 8.49894 16.8218 8.6906 17.0053L14.3306 22.4067L23.1373 7.49332C23.272 7.26488 23.492 7.09932 23.7488 7.03306C24.0056 6.9668 24.2782 7.00526 24.5066 7.13998" fill="none"/>
    </svg>
  );
};