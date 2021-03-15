import { useEffect } from 'react'
import HeadObject from '../components/head'
import Nav from '../components/nav';

export default function Home() {
  useEffect(() => {
    console.log('Made by Sarthak Mohanty. All Rights Reserved. Want to hire me? https://srtk.me')
  });

  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject />
      <Nav />
      HackIndiana.
    </div>
  )
}
