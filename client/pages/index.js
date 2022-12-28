import DropZoneComponent from "../components/DropZoneComponent.js"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="my-4 text-3xl font-medium">Share a pdf</h1>
      <div className="w-96 flex flex-col items-center bg-slate-100 shadow-xl rounded-xl justify-center">
        <DropZoneComponent/>
      </div>
    </div>
  )
}