import Theme from '../styles/theme';
import PortfolioProject from './PortfolioProject';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 