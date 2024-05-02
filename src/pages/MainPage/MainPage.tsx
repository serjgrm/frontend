import {FC} from 'react';
import './MainPage.scss';
import { HeroSection } from '@/sections/HeroSection/HeroSection';
import { FundsSection } from '@/sections/FundsSection';
import { ReportSection } from '@/sections/ReportSection';
import { UkraineSection } from '@/sections/UkraineSection';
import { InstructionSection } from '@/sections/InstructionSection';
import { TopVolunteersSection } from '@/sections/TopVolunteersSection';

interface Props {
}

export const MainPage: FC<Props> = () => {
  return (
    <div className="container main-page">
      <HeroSection classNames='main-page__hero' />
      <FundsSection classNames='main-page__funds' />
      <ReportSection classNames='main-page__reports'/>
      <UkraineSection classNames='main-page__ukraine'/>
      <InstructionSection classNames='main-page__instruction'/>
      <TopVolunteersSection classNames='main-page__topvolunteers' />
    </div>
  );
}
