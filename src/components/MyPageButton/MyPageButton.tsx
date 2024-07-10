import './MyPageButton.scss';
import cn from 'classnames';
import { avatarUrl } from '../../data-imitation/avatarUrl.json';

interface Props {
  classNames?: string;
  url?: string;
}

export const MyPageButton: React.FC<Props> = ({ classNames, url = avatarUrl }) => {
  const className = cn(
    classNames,
    'my-page-button'
  )
  
  return (
    <button 
      className={className}
      style={url ? { background: `url(${url}) center/cover no-repeat`,border: 'none' } : { background: '' }}>
    </button>
  );
};
