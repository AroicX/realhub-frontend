import Link from '../link'

export default function Covid({}) {
  return (
    <div className="w-full bg-black p-3">
      <Link
        to="/"
        className="text-white font-sm center flex justify-center underline"
      >
        Read out Covid-19 guidelines
      </Link>
    </div>
  )
}
