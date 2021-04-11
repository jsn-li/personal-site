import Head from 'next/head'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import IconLink from "../components/IconLink";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jason Li</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>

        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Playball&family=Raleway&display=swap" rel="stylesheet"/>
      </Head>
      <div className="flex h-screen text-center">
        <div className="m-auto text-gray-800">
          <p className="text-6xl font-cursive">Jason Li</p>
          <p className="text-xl my-3 font-sans">Computer Science Student &#8226; Software Engineer</p>
          <IconLink href="https://github.jsn.li" icon={faGithub} />
          <IconLink href="https://linkedin.jsn.li" icon={faLinkedin} />
        </div>
      </div>
    </div>
  )
}
