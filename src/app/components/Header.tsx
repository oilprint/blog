import Link from "next/link"


const Header = () => {
  return (
    <header className="container w-full flex justify-between m-auto py-2">
      <Link href='/' className="text-accent bold text-3xl">Blog</Link>
      <nav className="flex gap-4">
        <Link href='/' >Home</Link>
        <Link href='/contact' >Contact</Link>
      </nav>
    </header>
  )
}

export default Header