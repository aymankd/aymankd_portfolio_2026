import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="Logo"
      width={80}
      height={25}
      priority
    />
  );
}
