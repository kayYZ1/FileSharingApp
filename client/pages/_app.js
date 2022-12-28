import "tailwindcss/tailwind.css"
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
	<div className="grid h-screen text-black bg-slate-200 font-serif place-items-center">
		<div>
			<Component {...pageProps} />
		</div>
	</div>
  )
}
