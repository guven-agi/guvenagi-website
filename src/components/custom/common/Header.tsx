import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex px-4 py-2 text-white">
      <Logo />
      <div className="grow"></div>
      <div className="flex flex-row text-lg items-center gap-x-4 *:font-semibold *:px-2">
        <Link href={"/login"}>Giris Yap</Link>
      </div>
    </header>
  );
}
