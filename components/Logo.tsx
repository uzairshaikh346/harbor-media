import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label="HarborMedia.ai home">
      <Image
        src="/images/logo.png"
        alt="HarborMedia"
        width={350}
        height={63}
        priority
        className="h-9 w-auto"
      />
    </Link>
  );
}
