export default function Header(props) {
  return (
    <header className="py-10 bg-slate-900  text-4xl flex justify-center items-center text-amber-400">
      <nav> {props.title} </nav>
    </header>
  )
}
