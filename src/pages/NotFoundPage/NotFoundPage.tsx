import { Button } from '@/ui/Button';
import './NotFoundPage.scss';
import { useNavigate } from 'react-router-dom';

interface Props {
}

export const NotFoundPage: React.FC<Props> = () => {
  const navigate = useNavigate();

  const goToHomepage = () => {
    navigate('/frontend');
  };

  return (
    <div className="container not-found-page">
      <h2 className='not-found-page__title'>404</h2>
      <p className='not-found-page__description'>
        Упс, сторінку не знайдено. <br />
        Спробуйте перезапустити URL або поверніться до головної сторінки.
      </p>
      <Button 
        classNames='not-found-page__button'
        isPrimary={true}
        callback={goToHomepage}
      >
        До головної сторінки
      </Button>
    </div>
  );
};
