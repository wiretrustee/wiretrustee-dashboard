import { iconProperties, IconProps } from "@/assets/icons/IconProperties";

export default function LongArrowLeftIcon(props: IconProps) {
  return (
    <svg
      width="39"
      height="7"
      viewBox="0 0 39 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...iconProperties(props)}
    >
      <path d="M0.615425 3.3111C0.478741 3.44779 0.478741 3.66939 0.615425 3.80608L2.84281 6.03346C2.97949 6.17015 3.2011 6.17015 3.33778 6.03346C3.47447 5.89678 3.47447 5.67517 3.33778 5.53849L1.35789 3.55859L3.33778 1.57869C3.47447 1.44201 3.47447 1.2204 3.33778 1.08372C3.2011 0.947033 2.97949 0.947033 2.84281 1.08372L0.615425 3.3111ZM38.2969 3.20859L0.862911 3.20859L0.862911 3.90859L38.2969 3.90859L38.2969 3.20859Z" />
    </svg>
  );
}
