import Home from "./home";
import Head from "next/head";
import GoogleFonts from "next-google-fonts";

export const config = {
  unstable_runtimeJS: false
};

const App = () => (
    <>
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" />
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Lato&display=swap" />

        <Head>
            <meta charSet="utf-8" />
            <meta name="description" content="Alec Peters website" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta property="og:url" content="https://adpeters.github.io" />
            <meta property="og:title" content="Alec Peters - Software Developer" />
            <title>Alec Peters - Software Developer</title>
        </Head>
        <Home />
    </>
);

export default App;
