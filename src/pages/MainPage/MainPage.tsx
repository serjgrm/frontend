import {FC} from 'react';
import './MainPage.scss';
import { HeroSection } from '@/sections/HeroSection/HeroSection';
import { FundraisersSection } from '@/sections/FundraisersSection';
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
      <FundraisersSection classNames='main-page__fundraisers' limit={6} />
      <ReportSection classNames='main-page__reports'/>
      <UkraineSection classNames='main-page__ukraine'/>
      <InstructionSection classNames='main-page__instruction'/>
      <TopVolunteersSection classNames='main-page__topvolunteers' limit={6}/>
    </div>
  );
}
