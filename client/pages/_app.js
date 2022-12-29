import axios from "axios"
import "tailwindcss/tailwind.css"
import '../styles/globals.css'

axios.defaults.baseURL = "http://localhost:9999/"

export default function App({ Component, pageProps }) {
  return (
	<div className="grid h-screen text-black bg-slate-200 font-serif place-items-center">
		<div>
			<Component {...pageProps} />
		</div>
	</div>
  )
}
