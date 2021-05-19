import Header from '../components/header/Header';
import Body from '../components/body/Body';
import Head from 'next/head'

export default function Index() {
  return (
    <>
     <Head>
      <meta charset='utf-8' />
      <meta http-equiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
      <meta name='description' content='Description' />
      <meta name='keywords' content='Keywords' />
      <title>Star Wars Starships</title>

      <link rel='manifest' href='/manifest.json' />
      <link href='/public/icons/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
      <link href='/public/icons/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
      <link href='/public/icons/favicon-48x48.png' rel='icon' type='image/png' sizes='48x48' />
      <link rel='/public/icons/apple-icon' href='/apple-icon.png'></link>
      <meta name='theme-color' content='#317EFB' />
    </Head>
      <Header />
      <Body />
    </>
  );
}
