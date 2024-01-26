import Link from "next/link"

export const NavbarHeader = () => {
  return (
    <>
    <nav>
    <Link href={"/"}>Home</Link>
    <Link href={"/Contact"}>Contact</Link>
    <Link href={"/About"}>About</Link>
    </nav>
      
    </>
  )
}

