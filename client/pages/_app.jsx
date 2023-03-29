import axios from "axios"
import { Poppins } from "@next/font/google"
import "tailwindcss/tailwind.css"
import '../styles/globals.css'

const poppins = Poppins({
	weight: '400',
	subsets: ['latin'],
})

axios.defaults.baseURL = "http://localhost:9999/"

export default function App({ Component, pageProps }) {
  return (
	<div className="grid h-screen text-black bg-slate-200 font-serif place-items-center">
		<div className={poppins.className}>
			<Component {...pageProps} />
		</div>
	</div>
  )
}
