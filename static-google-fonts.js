import Head from "next/head";
import GoogleFonts from "next-google-fonts";

const StaticGoogleFonts = ({ href }) => {
    return (
        <>
            <GoogleFonts href={href} />

            <Head>
                <link href={href} rel="stylesheet" media="all" />
            </Head>
        </>
    );
};

export default StaticGoogleFonts;
