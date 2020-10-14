import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
import '../styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false;

export default function MyApp({ Component, pageProps}) {
    return <Component {...pageProps} />
};
