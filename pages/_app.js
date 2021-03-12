import '../styles/globals.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    window.addEventListener('touchmove', () => {
      AOS.refresh()
    }, false)
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
