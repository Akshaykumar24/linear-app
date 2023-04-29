import Image from 'next/image'
import { Inter } from 'next/font/google'
import gitDetails from "../assets/gitDetails.png"
import logo from "../assets/logo.png"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  let headerLeftArr = [
    {text: 'Linear', path: '/', img: true},
    {text: 'Feature', path: '/'},
    {text: 'Method', path: '/'},
    {text: 'Customer', path: '/'},
    {text: 'Changelog', path: '/'},
    {text: 'Integration', path: '/'},
    {text: 'Pricing', path: '/'},
    {text: 'Company', path: '/'},
  ]
  let headerRightArr = [
    {text: 'Login', path: '/signUp'},
    {text: 'Sign up', path: '/signUp', class: 'signup'},
  ]
  return (
    <main
      className={`mainBod container lg flex min-h-screen flex-col items-center justify-between p-24 pl-40 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
       
      </div>
      <div className='fixed top-0 left-70 z-10 h-12 w-screen items-center justify-around lg:flex' style={{backdropFilter: 'blur(10px)'}}>
      <nav className="w-9/12 h-12 items-center justify-between font-mono text-m lg:flex" style={{borderBottom: '0.1px solid rgb(247, 248, 248);'}}>
        <div className='flex gap-6'>
          {headerLeftArr.map(item => (<a href={item.path || "/"} className='flex gap-2 items-center'>{item.img && <span><Image src={logo} width={18} height={18}/></span>}<div>{item.text}</div></a>))}
        </div>
        <div className='flex gap-6'>
          {headerRightArr.map(item => (<a href={item.path || "/"} className={item.class + ' flex gap-2 items-center'}>{item.text}</a>))}
        </div>
      </nav>
      </div>
      <section className='flex flex-col content-center items-center'>
        <div className='introInsight'>Introducing Linear Insights<span className='introIn'>→</span></div>
        <h1 className="bigHead">Linear is a better way<br/> to build products</h1>
        <p className="meetText">Meet the new standard for modern software development.<br/> Streamline issues, sprints, and product roadmaps.</p>
        <a href='/signUp' className='getStart'>Get started <span><svg width="16" height="16" viewBox="0 0 16 16" fill="#8A8F98"><path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z"></path></svg></span></a>
      </section>
      <Image src={gitDetails} width={1200} height={900} className='py-32'/>
    </main>
  )
}
