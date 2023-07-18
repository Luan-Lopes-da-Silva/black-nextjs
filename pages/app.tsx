import { AppProps } from 'next/app';
import '../public/page.module.css'

function MyApp({Component,pageProps}:AppProps){
return <Component {...pageProps}/>  
}

export default MyApp