import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { ReactNode } from 'react'; // Use ReactNode for typing children

type Props = {
  children: ReactNode; // This covers any valid JSX content
}

function MainLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main>
        <div>
        <Card/>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default MainLayout;
