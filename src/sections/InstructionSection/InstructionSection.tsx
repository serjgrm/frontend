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
          <p className="instruction__circle one">1</p>
            <hr className='instruction__hr' />
          <p className="instruction__circle two">2</p>
            <hr className='instruction__hr' />
          <p className="instruction__circle three">3</p>
            <hr className='instruction__hr' />
          <p className="instruction__circle four">4</p>
        </div>
      </div>
    </section>
  );
};
