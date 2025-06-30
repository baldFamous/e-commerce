import PublicLayout from '../layouts/PublicLayout';
import Nav from '../components/Nav';

import Hero from '../components/Hero';
import QuickTest from '../components/QuickTest';
import SelectionOfTheMonth from '../components/SelectionOfTheMonth';
import InteractiveGuide from '../components/InteractiveGuide';
import BrandStory from '../components/BrandStory';
import Testimonials from '../components/Testimonials';
import LimitedOfferBanner from '../components/LimitedOfferBanner';
import SubscriptionSection from '../components/SubscriptionSection';

export default function Home() {
  return (
    <PublicLayout>
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <QuickTest />
      <SelectionOfTheMonth />
      <InteractiveGuide />
      <BrandStory />
      <Testimonials />
      <LimitedOfferBanner />
      <SubscriptionSection />
    </PublicLayout>

      <Footer />
    </>
  );
}
