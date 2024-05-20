import Link from 'next/link'


const CMSNavbar = () => {
  return (
    <div className="flex justify-between items-center py-1 px-5">
      <Link href="/">Blog </Link>
    </div>
  )
}

export default CMSNavbar