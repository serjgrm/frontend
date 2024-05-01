import './ReportSection.scss';
import cn from 'classnames';

interface Props {
  classNames?: string;
}

export const ReportSection: React.FC<Props> = ({ classNames }) => {
  const className = cn(
    classNames,
    'reports'
  )

  return (
    <section className={className}>
      <div className='reports__report'>
        <p className='reports__descr'>Ми зібрали</p>
        <h2 className='reports__title'>800 000</h2>
      </div>
      <div className='reports__report'>
        <p className='reports__descr'>Зборів створено</p>
        <h2 className='reports__title'>1200</h2>
      </div>
      <div className='reports__report'>
        <p className='reports__descr'>Звітів надано</p>
        <h2 className='reports__title'>240</h2>
      </div>
    </section>
  );
};
