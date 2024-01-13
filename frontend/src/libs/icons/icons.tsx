interface Props {
  className?: string;
}

export const BinIcon = ({ className }: Props): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M6 2.4C6 1.76348 6.25286 1.15303 6.70294 0.702944C7.15303 0.252856 7.76348 0 8.4 0H15.6C16.2365 0 16.847 0.252856 17.2971 0.702944C17.7471 1.15303 18 1.76348 18 2.4V4.8H22.8C23.1183 4.8 23.4235 4.92643 23.6485 5.15147C23.8736 5.37652 24 5.68174 24 6C24 6.31826 23.8736 6.62348 23.6485 6.84853C23.4235 7.07357 23.1183 7.2 22.8 7.2H21.5172L20.4768 21.7704C20.4337 22.3759 20.1628 22.9426 19.7185 23.3563C19.2743 23.77 18.6898 24 18.0828 24H5.916C5.30897 24 4.72448 23.77 4.28026 23.3563C3.83604 22.9426 3.5651 22.3759 3.522 21.7704L2.484 7.2H1.2C0.88174 7.2 0.576515 7.07357 0.351472 6.84853C0.126428 6.62348 0 6.31826 0 6C0 5.68174 0.126428 5.37652 0.351472 5.15147C0.576515 4.92643 0.88174 4.8 1.2 4.8H6V2.4ZM8.4 4.8H15.6V2.4H8.4V4.8ZM4.8888 7.2L5.9172 21.6H18.084L19.1124 7.2H4.8888ZM9.6 9.6C9.91826 9.6 10.2235 9.72643 10.4485 9.95147C10.6736 10.1765 10.8 10.4817 10.8 10.8V18C10.8 18.3183 10.6736 18.6235 10.4485 18.8485C10.2235 19.0736 9.91826 19.2 9.6 19.2C9.28174 19.2 8.97652 19.0736 8.75147 18.8485C8.52643 18.6235 8.4 18.3183 8.4 18V10.8C8.4 10.4817 8.52643 10.1765 8.75147 9.95147C8.97652 9.72643 9.28174 9.6 9.6 9.6ZM14.4 9.6C14.7183 9.6 15.0235 9.72643 15.2485 9.95147C15.4736 10.1765 15.6 10.4817 15.6 10.8V18C15.6 18.3183 15.4736 18.6235 15.2485 18.8485C15.0235 19.0736 14.7183 19.2 14.4 19.2C14.0817 19.2 13.7765 19.0736 13.5515 18.8485C13.3264 18.6235 13.2 18.3183 13.2 18V10.8C13.2 10.4817 13.3264 10.1765 13.5515 9.95147C13.7765 9.72643 14.0817 9.6 14.4 9.6Z" />
  </svg>
);

export const ShopIcon = ({ className }: Props): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M4.812 16.9634L2.5692 2.4002H1.2C0.88174 2.4002 0.576515 2.27377 0.351472 2.04873C0.126428 1.82369 0 1.51846 0 1.2002C0 0.881943 0.126428 0.576719 0.351472 0.351675C0.576515 0.126631 0.88174 0.000203194 1.2 0.000203194H3.582C3.87149 -0.00514129 4.15303 0.0951023 4.374 0.282203C4.60081 0.472927 4.74876 0.741037 4.7892 1.0346L5.1828 3.6002H14.4V6.0002H5.5524L7.0284 15.6002H18.3072L20.1072 9.6002H22.6128L20.3496 17.1446C20.2755 17.3919 20.1236 17.6087 19.9165 17.7628C19.7094 17.917 19.4582 18.0002 19.2 18.0002H6.0192C5.7215 18.0057 5.43254 17.8995 5.2092 17.7026C4.99154 17.5124 4.85003 17.2498 4.8108 16.9634H4.812ZM9.6 21.6002C9.6 22.2367 9.34714 22.8472 8.89706 23.2973C8.44697 23.7473 7.83652 24.0002 7.2 24.0002C6.56348 24.0002 5.95303 23.7473 5.50294 23.2973C5.05286 22.8472 4.8 22.2367 4.8 21.6002C4.8 20.9637 5.05286 20.3532 5.50294 19.9031C5.95303 19.4531 6.56348 19.2002 7.2 19.2002C7.83652 19.2002 8.44697 19.4531 8.89706 19.9031C9.34714 20.3532 9.6 20.9637 9.6 21.6002ZM20.4 21.6002C20.4 22.2367 20.1471 22.8472 19.6971 23.2973C19.247 23.7473 18.6365 24.0002 18 24.0002C17.3635 24.0002 16.753 23.7473 16.3029 23.2973C15.8529 22.8472 15.6 22.2367 15.6 21.6002C15.6 20.9637 15.8529 20.3532 16.3029 19.9031C16.753 19.4531 17.3635 19.2002 18 19.2002C18.6365 19.2002 19.247 19.4531 19.6971 19.9031C20.1471 20.3532 20.4 20.9637 20.4 21.6002ZM20.4 0.000203194C20.7183 0.000203194 21.0235 0.126631 21.2485 0.351675C21.4736 0.576719 21.6 0.881943 21.6 1.2002V2.4002H22.8C23.1183 2.4002 23.4235 2.52663 23.6485 2.75167C23.8736 2.97672 24 3.28194 24 3.6002C24 3.91846 23.8736 4.22369 23.6485 4.44873C23.4235 4.67377 23.1183 4.8002 22.8 4.8002H21.6V6.0002C21.6 6.31846 21.4736 6.62369 21.2485 6.84873C21.0235 7.07377 20.7183 7.2002 20.4 7.2002C20.0817 7.2002 19.7765 7.07377 19.5515 6.84873C19.3264 6.62369 19.2 6.31846 19.2 6.0002V4.8002H18C17.6817 4.8002 17.3765 4.67377 17.1515 4.44873C16.9264 4.22369 16.8 3.91846 16.8 3.6002C16.8 3.28194 16.9264 2.97672 17.1515 2.75167C17.3765 2.52663 17.6817 2.4002 18 2.4002H19.2V1.2002C19.2 0.881943 19.3264 0.576719 19.5515 0.351675C19.7765 0.126631 20.0817 0.000203194 20.4 0.000203194Z" />
  </svg>
);

export const PlusIcon = ({ className }: Props): JSX.Element => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M0.049316 10.1338C0.0493157 4.61079 4.52632 0.133789 10.0493 0.133789C15.5723 0.133788 20.0493 4.61079 20.0493 10.1338C20.0493 15.6568 15.5723 20.1338 10.0493 20.1338C4.52632 20.1338 0.0493162 15.6568 0.049316 10.1338ZM2.04932 10.1338C2.04932 12.2555 2.89217 14.2904 4.39246 15.7906C5.89275 17.2909 7.92758 18.1338 10.0493 18.1338C12.171 18.1338 14.2059 17.2909 15.7062 15.7906C17.2065 14.2904 18.0493 12.2555 18.0493 10.1338C18.0493 8.01206 17.2065 5.97722 15.7062 4.47693C14.2059 2.97664 12.171 2.13379 10.0493 2.13379C7.92758 2.13379 5.89275 2.97664 4.39246 4.47693C2.89217 5.97723 2.04932 8.01206 2.04932 10.1338ZM5.04932 10.1338C5.04932 9.86857 5.15467 9.61422 5.34221 9.42668C5.52975 9.23915 5.7841 9.13379 6.04932 9.13379L9.04932 9.13379L9.04932 6.13379C9.04932 5.86857 9.15467 5.61422 9.34221 5.42668C9.52975 5.23914 9.7841 5.13379 10.0493 5.13379C10.3145 5.13379 10.5689 5.23914 10.7564 5.42668C10.944 5.61422 11.0493 5.86857 11.0493 6.13379L11.0493 9.13379L14.0493 9.13379C14.3145 9.13379 14.5689 9.23915 14.7564 9.42668C14.944 9.61422 15.0493 9.86857 15.0493 10.1338C15.0493 10.399 14.944 10.6534 14.7564 10.8409C14.5689 11.0284 14.3145 11.1338 14.0493 11.1338L11.0493 11.1338L11.0493 14.1338C11.0493 14.399 10.944 14.6534 10.7564 14.8409C10.5689 15.0284 10.3145 15.1338 10.0493 15.1338C9.7841 15.1338 9.52975 15.0284 9.34221 14.8409C9.15467 14.6534 9.04932 14.399 9.04932 14.1338L9.04932 11.1338L6.04932 11.1338C5.7841 11.1338 5.52975 11.0284 5.34221 10.8409C5.15467 10.6534 5.04932 10.399 5.04932 10.1338Z"
      fill="black"
    />
  </svg>
);

export const MinusIcon = ({ className }: Props): JSX.Element => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M10.3232 0.133789C15.8462 0.133789 20.3232 4.61079 20.3232 10.1338C20.3232 15.6568 15.8462 20.1338 10.3232 20.1338C4.80024 20.1338 0.323242 15.6568 0.323242 10.1338C0.323242 4.61079 4.80024 0.133789 10.3232 0.133789ZM10.3232 2.13379C8.20151 2.13379 6.16668 2.97664 4.66639 4.47693C3.1661 5.97723 2.32324 8.01206 2.32324 10.1338C2.32324 12.2555 3.1661 14.2904 4.66639 15.7906C6.16668 17.2909 8.20151 18.1338 10.3232 18.1338C12.445 18.1338 14.4798 17.2909 15.9801 15.7906C17.4804 14.2904 18.3232 12.2555 18.3232 10.1338C18.3232 8.01206 17.4804 5.97723 15.9801 4.47693C14.4798 2.97664 12.445 2.13379 10.3232 2.13379ZM14.3232 9.13379C14.5781 9.13407 14.8233 9.23167 15.0086 9.40664C15.1939 9.58161 15.3055 9.82074 15.3204 10.0752C15.3354 10.3296 15.2526 10.5802 15.089 10.7756C14.9254 10.9711 14.6933 11.0967 14.4402 11.1268L14.3232 11.1338H6.32324C6.06836 11.1335 5.82321 11.0359 5.63787 10.8609C5.45254 10.686 5.34101 10.4468 5.32607 10.1924C5.31113 9.93795 5.39392 9.68741 5.55751 9.49196C5.7211 9.2965 5.95315 9.17089 6.20624 9.14079L6.32324 9.13379H14.3232Z"
      fill="black"
    />
  </svg>
);
