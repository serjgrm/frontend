import cn from 'classnames';
import './InstructionSection.scss';

interface Props {
  classNames?: string;
}

export const InstructionSection: React.FC<Props> = ({ classNames }) => {
  const className = cn(
    classNames,
    'instruction'
  )

  return (
    <section className={className}>
      <h2 className="instruction__title">
        Як створити збір?
      </h2>
      <div className="instruction__content">
        <div className="instruction__numbers">
          <div className="instruction__circle one">1</div>
            <hr className='instruction__hr' />
          <div className="instruction__circle two">2</div>
            <hr className='instruction__hr' />
          <div className="instruction__circle three">3</div>
            <hr className='instruction__hr' />
          <div className="instruction__circle four">4</div>
        </div>
      </div>
    </section>
  );
};
