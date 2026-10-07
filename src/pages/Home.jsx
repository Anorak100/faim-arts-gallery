import Hero          from '../components/home/Hero';
import SelectedWorks  from '../components/home/SelectedWorks';
import AboutPreview   from '../components/home/AboutPreview';
import QuoteBand      from '../components/home/QuoteBand';

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWorks />
      <AboutPreview />
      <QuoteBand />
    </>
  );
}
