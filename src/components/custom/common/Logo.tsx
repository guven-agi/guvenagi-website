import Image from "next/image";
import logo from "../../../../public/guven_agi_logo.png";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex flex-row px-2 py-2 rounded items-center gap-x-2 text-white"
    >
      <Image src={logo} alt="logo" width={48} className="bg-indigo-500" />
      <div className="text-3xl">Güven Ağı</div>
    </Link>
  );
}
