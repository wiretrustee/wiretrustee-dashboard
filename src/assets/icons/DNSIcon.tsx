import { iconProperties, IconProps } from "@/assets/icons/IconProperties";

export default function DNSIcon(props: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...iconProperties(props)}
    >
      <path d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346627 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C16 6.94942 15.7931 5.90914 15.391 4.93853C14.989 3.96793 14.3997 3.08601 13.6569 2.34315C12.914 1.60028 12.0321 1.011 11.0615 0.608964C10.0909 0.206926 9.05058 0 8 0ZM6.6312 14.2344C5.75872 14.0351 4.93782 13.6548 4.22166 13.1181C3.5055 12.5814 2.91004 11.9002 2.47384 11.1188C2.03763 10.3373 1.77041 9.47297 1.68948 8.58168C1.60854 7.69039 1.7157 6.79204 2.004 5.9448L2.2056 5.9608C2.63209 6.16424 3.00958 6.45743 3.31224 6.82029C3.61491 7.18316 3.83559 7.60713 3.9592 8.0632C4.09216 8.58995 4.34759 9.07787 4.70472 9.48727C5.06184 9.89666 5.51058 10.216 6.0144 10.4192C6.9808 10.8648 7.1832 12.1144 6.6312 14.2344ZM9.6632 6.8C9.66313 6.73609 9.65534 6.67243 9.64 6.6104C9.49522 5.95451 9.20817 5.33843 8.79913 4.80566C8.39009 4.2729 7.86904 3.83647 7.2728 3.5272C6.5728 3.0832 6.1384 2.8072 6.0216 1.9344C7.26712 1.51475 8.61172 1.4893 9.87222 1.86151C11.1327 2.23372 12.2478 2.98549 13.0656 4.0144C11.8976 4.1896 11.2632 5.8984 11.2632 6.7992C11.1778 6.93129 11.0585 7.03807 10.9178 7.10841C10.7771 7.17876 10.6201 7.21011 10.4632 7.1992C10.3064 7.2102 10.1494 7.17897 10.0087 7.10876C9.86804 7.03856 9.74872 6.93194 9.6632 6.8ZM11.0328 13.5784L10.4672 11.8832C10.4945 11.498 10.6602 11.1357 10.9337 10.8632C11.2071 10.5906 11.57 10.4261 11.9552 10.4L13.6664 10.9208C13.0749 12.0507 12.1573 12.9767 11.0328 13.5784Z" />
    </svg>
  );
}
