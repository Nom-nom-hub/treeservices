import Image from 'next/image';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Image
      src="/IMG_4459.PNG"
      alt="Tree Care of SWFL LLC"
      width={340}
      height={72}
      className={className}
      priority
      unoptimized
    />
  );
}
