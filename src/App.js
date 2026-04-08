import React, { useState, useEffect } from "react";
import {
  Eye,
  EyeOff,
  Bell,
  ChevronRight,
  ChevronDown,
  Home,
  ArrowLeftRight,
  QrCode,
  CircleDollarSign,
  User,
  ArrowLeft,
  Share2,
  Copy,
  Receipt,
  CheckSquare,
  Wallet,
  ShieldCheck,
  FileText,
  CreditCard,
  Smartphone,
  Settings,
  Users,
  Lightbulb,
  MessageCircle,
  Building,
  Landmark,
  Delete,
} from "lucide-react";

// --- LOGO SEABANK (OFFICIAL SVG PATHS) ---
const WAVES_PATH =
  "M14.9902 47.116C18.9291 46.8994 22.1566 48.2816 25.5918 49.7371C29.4517 51.3859 33.4465 53.0671 39.0342 52.8416C40.3666 52.7976 41.7428 52.5308 43.1426 52.0594H43.1455C44.0827 51.7401 45.1075 52.2413 45.4268 53.1785C45.746 54.1156 45.2456 55.1405 44.3086 55.4598C42.575 56.0454 40.847 56.3855 39.169 56.4324C38.5042 56.4705 37.824 56.4764 37.1738 56.4588C31.8176 56.3035 27.7965 54.5959 24.1973 53.0642C21.0346 51.7113 18.2848 50.5664 15.2481 50.7127C12.6797 50.9148 10.8105 52.3846 10.7813 52.3963C9.99932 53.0112 8.8689 52.8794 8.25392 52.1004C7.63917 51.3214 7.75625 50.2026 8.52052 49.5877C8.63208 49.4938 11.2418 47.4235 14.9902 47.116ZM14.9024 41.6082C20.6073 41.371 24.392 43.0316 28.0469 44.616C31.5171 46.1241 34.7883 47.5563 39.8018 47.3484C43.7232 47.1874 47.1676 45.1927 48.8721 44.0096L48.875 44.0125C49.7214 43.4268 50.8782 43.6378 51.4639 44.4842C52.0493 45.3305 51.8385 46.4874 50.9922 47.073C48.9509 48.4788 44.8097 50.8739 39.9541 51.0584C39.3627 51.1023 38.8181 51.1053 38.2734 51.0935C33.3241 50.9881 29.8796 49.4944 26.5381 48.0301C23.1263 46.5365 19.8956 45.1307 15.04 45.3299C10.8435 45.4969 7.13014 48.0189 5.29103 49.5008C4.48861 50.1449 3.3142 50.0189 2.66993 49.2166C2.02564 48.4142 2.1517 47.2398 2.95411 46.5955C5.14465 44.8179 9.6164 41.8134 14.9024 41.6082Z";
const CIRCLE_PATH =
  "M27.3 2.25867C41.1053 2.25892 52.2805 13.4523 52.2776 27.243C52.2775 33.6566 49.8591 39.2272 45.9084 43.6434C44.3622 44.3638 42.514 45.2391 40.5608 45.3446C39.9516 45.3827 39.3653 45.3944 38.803 45.3827C44.789 41.558 48.7569 34.8573 48.7483 27.2577C48.7483 15.4028 39.1051 5.75892 27.2532 5.75867C15.401 5.75867 5.75706 15.4056 5.75706 27.2606C5.75715 32.2918 7.49648 36.9281 10.4045 40.5946C9.22136 40.946 8.10239 41.3936 7.06566 41.8915C4.06103 37.7593 2.30401 32.6959 2.30394 27.2284C2.30394 13.4522 13.4945 2.25867 27.3 2.25867ZM27.2932 7.44226C38.1467 7.44226 46.9739 16.2724 46.9592 27.1112C46.9591 35.0418 42.2291 41.8975 35.4465 45.0048C33.013 44.5391 30.9192 43.6811 28.7493 42.7938L28.6994 42.7733V42.7762C24.9069 41.2182 20.5839 39.4492 14.3401 39.827C13.7105 39.8651 13.0898 39.9384 12.4866 40.0438C9.46134 36.5852 7.62821 32.0634 7.62816 27.1141C7.62816 16.2725 16.4399 7.44245 27.2932 7.44226ZM27.5959 16.4803C26.8899 16.496 26.2063 16.6108 25.5452 16.8055C24.7897 17.0281 24.122 17.3673 23.5305 17.8124C22.936 18.2575 22.461 18.8204 22.1067 19.5175C21.7524 20.2144 21.5598 21.0141 21.5452 21.9188C21.5306 23.3126 21.9021 24.4661 22.6868 25.371C23.4716 26.2876 24.4352 26.9561 25.592 27.4012C26.1102 27.6237 26.6608 27.8311 27.2522 28.0243C27.832 28.2176 28.3803 28.4257 28.8694 28.663C29.3584 28.8972 29.7738 29.1817 30.1135 29.5214H30.1077C30.4473 29.861 30.6261 30.2766 30.6116 30.7948C30.5969 31.4918 30.2979 32.0254 29.7063 32.3973C29.1119 32.7662 28.4148 32.9452 27.6008 32.9305C26.6374 32.9159 25.7059 32.693 24.801 32.2626C23.8991 31.8497 23.1142 31.3307 22.4612 30.7069L20.4465 33.5389C20.6398 33.7469 20.9506 34.0283 21.3811 34.3241C21.7969 34.6638 22.3004 35.0069 22.9065 35.3319C23.5126 35.6716 24.1804 35.9522 24.9358 36.1893C25.6913 36.4265 26.5056 36.5614 27.4104 36.576C28.3592 36.5907 29.2643 36.4734 30.093 36.2362C30.9245 35.999 31.6509 35.6304 32.2717 35.1415C32.8955 34.6524 33.3851 34.0602 33.7395 33.3485C34.0937 32.6516 34.2873 31.8373 34.302 30.9325C34.3312 29.9984 34.1671 29.1841 33.8274 28.5018C33.4877 27.8225 33.042 27.2135 32.4651 26.7098C31.8999 26.2062 31.2645 25.7604 30.553 25.4061C29.8561 25.0489 29.1444 24.739 28.4182 24.4872C28.0785 24.3671 27.7061 24.2352 27.3371 24.0858C26.9683 23.9365 26.6113 23.7751 26.2864 23.5673C25.9466 23.374 25.6798 23.1365 25.4866 22.8553C25.2934 22.5743 25.2053 22.2642 25.2053 21.8925C25.22 21.2979 25.4868 20.8377 26.0344 20.5272C26.5673 20.214 27.1881 20.082 27.885 20.1259C28.7722 20.1698 29.5425 20.334 30.1809 20.6151C30.8018 20.8963 31.3969 21.2364 31.9446 21.6376L33.9153 18.8524C33.0835 18.1993 32.1962 17.6511 31.2619 17.1913C30.3307 16.7462 29.2175 16.495 27.9436 16.4803H27.5959Z";
const TEXT_PATH =
  "M138.318 44.8611C137.497 44.8611 132.38 44.8991 132.263 44.8611V41.739C132.023 41.9498 131.873 42.0731 131.738 42.2048C129.559 44.2666 126.941 44.9283 124.016 44.6414C121.933 44.4598 119.948 43.6721 118.305 42.3777C117.157 41.4728 116.202 40.3479 115.49 39.071C114.782 37.7943 114.331 36.3887 114.164 34.9363C113.736 32.4031 114.055 29.7967 115.08 27.4421C116.887 23.4651 120.018 21.3619 124.37 21.0222C125.817 20.8671 127.281 21.0488 128.645 21.5525C130.01 22.0562 131.24 22.8732 132.236 23.9333H132.239V20.905H138.318V44.8611ZM203.48 24.616L203.665 24.7126C203.68 24.6336 203.709 24.5573 203.744 24.4841C205.179 22.3726 207.273 21.529 209.716 21.3621C211.795 21.1542 213.883 21.6145 215.683 22.6746C216.826 23.3452 217.798 24.2677 218.524 25.3748C219.25 26.4817 219.714 27.7406 219.875 29.0525C220.115 30.9121 220.238 32.7837 220.241 34.655C220.288 37.8383 220.247 41.4551 220.247 44.738L220.244 44.7468H214.331V44.0798C214.331 41.0487 214.378 37.5895 214.305 34.5554C214.266 33.1645 214.105 31.7794 213.824 30.4177C213.212 27.4247 211.051 26.2675 208.195 26.6541C205.662 27.0055 204.104 28.6777 203.732 31.3865C203.577 32.4905 203.495 33.6037 203.483 34.7195C203.451 37.8911 203.483 41.5987 203.483 44.8552C203.293 44.8816 198.569 44.8552 197.623 44.8552V21.321C197.629 21.1805 197.646 21.0397 197.67 20.8992H203.48V24.616ZM193.242 44.8347C192.422 44.8347 187.3 44.8728 187.185 44.8347V41.7126C186.945 41.9235 186.796 42.0467 186.661 42.1785C184.482 44.2402 181.864 44.902 178.938 44.615C176.856 44.4334 174.87 43.6458 173.227 42.3513C172.079 41.4464 171.125 40.3215 170.413 39.0447C169.704 37.7679 169.254 36.3623 169.087 34.9099C168.659 32.3768 168.978 29.7703 170.003 27.4158C171.81 23.4387 174.941 21.3356 179.293 20.9958C180.739 20.8407 182.204 21.0225 183.568 21.5261C184.933 22.0298 186.163 22.8468 187.159 23.907H187.162V20.8787H193.242V44.8347ZM155.249 13.8386C157.211 13.7742 159.159 14.2072 160.907 15.1062C165.695 17.7449 166.164 24.0538 162.963 27.6794C162.869 27.7819 162.784 27.8906 162.664 28.0339C163.086 28.3502 163.476 28.6278 163.842 28.9529C166.126 30.9677 166.94 33.5479 166.765 36.5203C166.562 39.8998 163.997 43.3613 159.311 44.3162C157.783 44.6266 156.227 44.7908 154.666 44.8113C150.938 44.8785 146.784 44.8115 143.055 44.8113V13.8386H155.249ZM143.055 44.823C143.239 44.8376 142.932 44.823 143.037 44.8113C143.043 44.8113 143.049 44.8113 143.055 44.8113V44.823ZM230.172 29.7263C230.974 28.7921 231.662 28.0043 232.333 27.1931C233.903 25.3364 236.843 21.81 237.625 20.9636H246.203C245.556 21.7074 244.566 22.791 243.98 23.45C241.728 26.0037 239.467 28.5544 237.194 31.1023C237.106 31.1696 237.036 31.2547 236.986 31.3513C236.936 31.4479 236.907 31.5565 236.901 31.6648C236.895 31.776 236.916 31.8846 236.957 31.9841C236.998 32.0865 237.063 32.1775 237.144 32.2507C240.053 36.2161 242.926 40.2112 245.805 44.197C245.919 44.358 246.022 44.5245 246.194 44.7878L246.191 44.7937H238.633C238.439 44.5933 234.602 39.0121 232.641 36.3064C232.573 36.2129 232.485 36.1342 232.371 36.0085C231.648 36.7172 230.93 37.3937 230.26 38.1199C230.145 38.3278 230.101 38.5683 230.134 38.8054V44.7732H224.18V13.8562H230.172V29.7263ZM100.259 20.6677C101.822 20.6678 103.316 20.9639 104.736 21.5583C106.157 22.1529 107.399 23.008 108.465 24.1267C109.531 25.2454 110.365 26.6078 110.972 28.2214L110.977 28.2244C111.581 29.7968 111.846 31.6005 111.776 33.6384L111.729 34.9685H94.202L94.2606 35.1765C94.4832 35.9731 94.8174 36.6494 95.2655 37.2029C95.7077 37.7476 96.2081 38.205 96.7645 38.5681L96.7675 38.574H96.7704C97.3237 38.8989 97.9124 39.1532 98.5389 39.3347H98.5477C99.1686 39.4782 99.755 39.5691 100.306 39.6042H100.311C101.366 39.6394 102.315 39.5866 103.158 39.4402H103.164C104.037 39.2616 104.804 39.0485 105.463 38.7937H105.466C106.157 38.5097 106.76 38.2018 107.275 37.8767L107.278 37.8708H107.281C107.729 37.5575 108.137 37.2526 108.503 36.9656L111.226 40.7878C110.617 41.2506 109.978 41.7128 109.305 42.1785H109.302C108.628 42.6675 107.864 43.1044 107.009 43.491C106.157 43.8394 105.175 44.12 104.068 44.3308H104.062C102.958 44.5768 101.676 44.6999 100.206 44.7C98.604 44.7 97.0921 44.4224 95.6718 43.863C94.2487 43.2686 92.9866 42.4455 91.8856 41.3972C90.7845 40.3136 89.9147 39.0363 89.2733 37.5662C88.6349 36.0638 88.3124 34.4209 88.3124 32.6316C88.3124 30.98 88.5617 29.4396 89.0594 28.0046C89.5954 26.5696 90.3596 25.3128 91.3524 24.2292C92.3804 23.1134 93.6401 22.2407 95.1337 21.6111C96.6213 20.9844 98.3288 20.6677 100.259 20.6677ZM76.1034 13.78C78.0567 13.824 79.7641 14.1837 81.202 14.8806C82.64 15.5776 84.0111 16.4337 85.2704 17.4441L82.2362 21.7136C81.4046 21.0841 80.4847 20.566 79.5184 20.1179C78.552 19.6903 77.3626 19.4206 75.9686 19.3533C74.8909 19.2859 73.9478 19.4882 73.1161 19.9597C72.2845 20.4312 71.8602 21.1281 71.8368 22.071C71.8368 22.6302 71.9709 23.125 72.2841 23.5525C72.5974 23.9801 73.002 24.3407 73.4969 24.6541C73.9918 24.9703 74.5539 25.2401 75.1366 25.4421C75.7223 25.6676 76.2618 25.869 76.8007 26.071C77.9017 26.4517 79.0024 26.9473 80.1034 27.4861C81.181 28.0483 82.1711 28.6984 83.0468 29.4861V29.4802C83.9224 30.268 84.6202 31.1876 85.1356 32.2449C85.651 33.2991 85.8993 34.559 85.8759 35.9968C85.8553 37.3906 85.563 38.6263 85.0009 39.7273C84.4386 40.8078 83.6976 41.7276 82.7313 42.4919C81.7883 43.2329 80.6634 43.7958 79.3837 44.1765C78.1009 44.5602 76.7298 44.7175 75.2479 44.6941C73.8571 44.6736 72.5979 44.4722 71.4296 44.1121C70.2845 43.7518 69.23 43.3033 68.3075 42.8083C67.3851 42.293 66.6002 41.7983 65.9471 41.2595C65.297 40.6972 64.822 40.2692 64.5087 39.9558L67.6102 35.6189C68.6206 36.5619 69.8334 37.3701 71.2274 38.0232C72.6213 38.6733 74.0592 39.0095 75.5409 39.033C76.8002 39.0564 77.8782 38.7876 78.7772 38.2253C79.6762 37.6631 80.1473 36.8342 80.1708 35.7771C80.1942 34.9922 79.9255 34.3384 79.4071 33.7996C78.8917 33.2812 78.2379 32.8336 77.4969 32.4734C76.7327 32.1132 75.9008 31.776 75.0018 31.4832C74.0795 31.1933 73.2241 30.8775 72.4393 30.5408C70.6647 29.8672 69.18 28.8126 67.9677 27.4187C66.7552 26.0247 66.1728 24.2499 66.2167 22.115C66.2372 20.7239 66.5294 19.4876 67.0917 18.4304C67.654 17.3732 68.3752 16.4976 69.2948 15.824C70.1937 15.1506 71.2272 14.6353 72.3954 14.2751C73.4179 13.9599 74.4745 13.7995 75.5663 13.78H76.1034ZM132.21 33.6687C132.825 28.74 128.912 25.5824 124.452 26.7185C121.682 27.4155 119.938 29.9228 119.877 32.9861H119.9C119.956 33.5981 120.044 34.2042 120.161 34.8044C121.306 39.3907 126.78 40.2724 129.876 38.073C131.369 37.0041 131.987 35.4256 132.21 33.6687ZM187.13 33.6443C187.745 28.7157 183.832 25.5589 179.372 26.6951C176.601 27.3921 174.859 29.8993 174.798 32.9626H174.821C174.877 33.5746 174.964 34.1808 175.081 34.781C176.226 39.3672 181.7 40.249 184.796 38.0496C186.289 36.9806 186.907 35.4014 187.13 33.6443ZM149.474 31.8113C149.184 31.8114 149.053 31.8994 149.053 32.2332C149.064 34.3564 149.064 36.5299 149.064 38.7527C149.275 38.7527 149.409 38.7819 149.544 38.782C151.582 38.782 153.618 38.782 155.653 38.7468C156.432 38.738 157.208 38.6589 157.973 38.5154C160.506 38.0204 161.147 36.3183 160.617 34.1951C160.248 32.7427 159.03 32.1218 157.662 32.0427C154.938 31.8787 152.203 31.8786 149.474 31.8113ZM100.095 25.7634C99.3567 25.7634 98.6362 25.872 97.9364 26.0886C97.2687 26.2702 96.6559 26.5634 96.0995 26.9646C95.5403 27.3686 95.0749 27.8811 94.703 28.5017V28.5076C94.6533 28.6012 94.6033 28.6864 94.5594 28.7683C94.3134 29.2135 94.1317 29.5391 94.035 30.2273L94.0087 30.4148H106.075L106.046 30.2244C105.934 29.5127 105.72 28.9674 105.398 28.49C105.079 28.0186 104.66 27.6177 104.153 27.1902C103.143 26.2707 101.784 25.7986 100.098 25.7634H100.095ZM149.113 19.866H149.111V25.7986H155.495C155.972 25.781 156.444 25.7106 156.907 25.5876C157.469 25.4704 157.976 25.1722 158.348 24.7361C158.719 24.2997 158.936 23.7515 158.963 23.1775C159.001 21.4881 158.444 20.569 157.021 20.1765C156.368 19.9949 155.697 19.8982 155.017 19.8865C153.07 19.8455 151.116 19.866 149.113 19.866Z";

const SeaBankIconOnly = ({ className, style }) => (
  <svg
    viewBox="0 0 55 59"
    className={className}
    style={style}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={WAVES_PATH} fill="#2673DD" />
    <path d={CIRCLE_PATH} fill="#EA5F00" />
  </svg>
);

const SeaBankWatermark = ({ className, style }) => (
  <svg
    viewBox="0 0 55 59"
    className={className}
    style={style}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={WAVES_PATH} fill="currentColor" fillOpacity="0.08" />
    <path d={CIRCLE_PATH} fill="currentColor" fillOpacity="0.08" />
  </svg>
);

const SeaBankLogoFull = ({ className }) => (
  <div className={`flex items-center justify-center ${className || ""}`}>
    <svg
      viewBox="0 0 249 59"
      style={{ height: "36px", width: "auto" }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={WAVES_PATH} fill="#2673DD" />
      <path d={CIRCLE_PATH} fill="#EA5F00" />
      <path d={TEXT_PATH} fill="#EA5F00" />
    </svg>
  </div>
);

// --- IKON MENU ---
const CustomIcons = {
  Transfer: () => (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#E85E26"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M8 10l-3 3 3 3" />
      <path d="M16 10l3 3-3 3" />
      <path d="M5 13h14" />
    </svg>
  ),
  TopUpTagihan: () => (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#E85E26"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M9 7h6" />
      <path d="M9 11h6" />
      <path d="M9 15h4" />
    </svg>
  ),
  TopUpEWallet: () => (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#E85E26"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M21 10H17a2 2 0 0 0 0 4h4" />
      <circle cx="19" cy="12" r="1" fill="#E85E26" stroke="none" />
    </svg>
  ),
  UndangTeman: () => (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#E85E26"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" y1="8" x2="19" y2="14" />
      <line x1="22" y1="11" x2="16" y2="11" />
    </svg>
  ),
  Deposito: () => (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#E85E26"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v8" />
      <path d="M9 11c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3" />
    </svg>
  ),
  TarikTunai: () => (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#E85E26"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  Pinjaman: () => (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#E85E26"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  LihatSemua: () => (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#E85E26"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="5" cy="12" r="1.5" fill="#E85E26" stroke="none" />
      <circle cx="12" cy="12" r="1.5" fill="#E85E26" stroke="none" />
      <circle cx="19" cy="12" r="1.5" fill="#E85E26" stroke="none" />
      <rect x="3" y="5" width="18" height="14" rx="2" />
    </svg>
  ),
};

const TransactionIcons = {
  Bunga: () => (
    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
      <Landmark className="w-5 h-5 text-white" />
    </div>
  ),
  TransferOut: () => (
    <div className="w-10 h-10 bg-[#FD5F00] rounded-full flex items-center justify-center">
      <User className="w-6 h-6 text-white" />
    </div>
  ),
  Pajak: () => (
    <div className="w-10 h-10 bg-[#FD5F00] rounded-full flex items-center justify-center relative">
      <FileText className="w-5 h-5 text-white" />
      <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-[2px]">
        <div className="bg-[#FD5F00] rounded-full w-4 h-4 flex items-center justify-center text-white text-[8px] font-bold">
          -
        </div>
      </div>
    </div>
  ),
  Biaya: () => (
    <div className="w-10 h-10 bg-[#FD5F00] rounded-full flex items-center justify-center relative">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 8s-2 1-2 4 1 8 6 8 6-5 6-8-2-4-2-4" />
        <path d="M12 4v4" />
        <path d="M10 4h4" />
      </svg>
    </div>
  ),
  EWallet: () => (
    <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
      <Wallet className="w-5 h-5 text-white" />
    </div>
  ),
};

const MENU_ITEMS = [
  { icon: CustomIcons.Transfer, label: "Transfer" },
  { icon: CustomIcons.TopUpTagihan, label: "Top Up & Tagihan" },
  { icon: CustomIcons.TopUpEWallet, label: "Top Up E-Wallet" },
  { icon: CustomIcons.UndangTeman, label: "Undang Teman" },
  { icon: CustomIcons.Deposito, label: "Deposito" },
  { icon: CustomIcons.TarikTunai, label: "Tarik Tunai" },
  { icon: CustomIcons.Pinjaman, label: "Pinjaman" },
  { icon: CustomIcons.LihatSemua, label: "Lihat Semua" },
];

const PROFILE_MENU = [
  { icon: User, label: "Profil Saya" },
  { icon: ShieldCheck, label: "Keamanan Akun" },
  { icon: FileText, label: "e-Statement" },
  { icon: CreditCard, label: "Pengaturan Limit dan Pembayaran" },
  { icon: Smartphone, label: "Pengaturan BI-FAST" },
  { icon: Settings, label: "Pengaturan Umum" },
  { icon: Users, label: "Undang Teman" },
  { icon: Lightbulb, label: "Pusat Bantuan" },
  { icon: MessageCircle, label: "Chat dengan SeaBank" },
  { icon: Building, label: "Lokasi SeaBank" },
  { icon: FileText, label: "Beri Masukan" },
];

// --- DATA MOCKUP RIWAYAT TRANSAKSI (DENGAN DETAIL DINAMIS) ---
const RIWAYAT_DATA = [
  {
    month: "Apr 2026",
    summaryIn: "Rp 1",
    summaryOut: "Rp 246.000",
    items: [
      {
        id: "1",
        type: "in",
        title: "Bunga Tabungan",
        desc: "Bunga\n04 Apr 2026, 02:08",
        amount: "+Rp 1",
        amountColor: "text-green-500",
        icon: TransactionIcons.Bunga,
      },
      {
        id: "tx-apr-1",
        type: "out",
        title: "Muhammad Firman Kusd",
        desc: "Transfer\n01 Apr 2026, 09:21",
        amount: "-Rp 246.000",
        amountColor: "text-gray-900",
        icon: TransactionIcons.TransferOut,
        detail: {
          amount: "Rp 246.000",
          fromName: "Muhammad Firman Kusdanardi",
          fromBank: "SeaBank: ********0593",
          toName: "Muhammad Firman Kusd",
          toBank: "MANDIRI: 1570011214443",
          fee: "Rp 0",
          total: "Rp 246.000",
          noTransaksi: "202604019745598600721001",
          metode: "BI-FAST",
          waktu: "01 Apr 2026, 09:21",
        },
      },
    ],
  },
  {
    month: "Mar 2026",
    summaryIn: "Rp 20.008.166",
    summaryOut: "Rp 19.805.629",
    items: [
      {
        id: "tx-new",
        type: "out",
        title: "Maulud",
        desc: "Transfer\n31 Mar 2026, 23:31",
        amount: "-Rp 7.000.000",
        amountColor: "text-gray-900",
        icon: TransactionIcons.TransferOut,
        detail: {
          amount: "Rp 7.000.000",
          fromName: "Muhammad Firman Kusdanardi",
          fromBank: "SeaBank: ********0593",
          toName: "Maulud",
          toBank: "BANK BRI: ***********4539",
          fee: "Rp 0",
          total: "Rp 7.000.000",
          noTransaksi: "202603319745598600721350",
          metode: "BI-FAST",
          waktu: "31 Mar 2026, 23:31",
        },
      },
      {
        id: "3",
        type: "out",
        title: "Maulud",
        desc: "Transfer\n30 Mar 2026, 06:31",
        amount: "-Rp 1.800.000",
        amountColor: "text-gray-900",
        icon: TransactionIcons.TransferOut,
        detail: {
          amount: "Rp 1.800.000",
          fromName: "Muhammad Firman Kusdanardi",
          fromBank: "SeaBank: ********0593",
          toName: "Maulud",
          toBank: "BANK BRI: ***********4539",
          fee: "Rp 0",
          total: "Rp 1.800.000",
          noTransaksi: "202603309745598600721002",
          metode: "BI-FAST",
          waktu: "30 Mar 2026, 06:31",
        },
      },
      {
        id: "4",
        type: "out",
        title: "Pajak Bunga Tabungan",
        desc: "Pajak\n30 Mar 2026, 01:05",
        amount: "-Rp 123",
        amountColor: "text-gray-900",
        icon: TransactionIcons.Pajak,
      },
      {
        id: "5",
        type: "in",
        title: "Bunga Tabungan",
        desc: "Bunga\n30 Mar 2026, 01:05",
        amount: "+Rp 619",
        amountColor: "text-green-500",
        icon: TransactionIcons.Bunga,
      },
      {
        id: "6",
        type: "out",
        title: "Maulud",
        desc: "Transfer\n29 Mar 2026, 11:31",
        amount: "-Rp 1.000.000",
        amountColor: "text-gray-900",
        icon: TransactionIcons.TransferOut,
        detail: {
          amount: "Rp 1.000.000",
          fromName: "Muhammad Firman Kusdanardi",
          fromBank: "SeaBank: ********0593",
          toName: "Maulud",
          toBank: "BANK BRI: ***********4539",
          fee: "Rp 0",
          total: "Rp 1.000.000",
          noTransaksi: "202603299745598600721034",
          metode: "BI-FAST",
          waktu: "29 Mar 2026, 11:31",
        },
      },
      {
        id: "7",
        type: "out",
        title: "Pajak Bunga Tabungan",
        desc: "Pajak\n29 Mar 2026, 01:00",
        amount: "-Rp 137",
        amountColor: "text-gray-900",
        icon: TransactionIcons.Pajak,
      },
      {
        id: "8",
        type: "in",
        title: "Bunga Tabungan",
        desc: "Bunga\n29 Mar 2026, 01:00",
        amount: "+Rp 688",
        amountColor: "text-green-500",
        icon: TransactionIcons.Bunga,
      },
      {
        id: "9",
        type: "out",
        title: "Muhammad Firman Kusd",
        desc: "Transfer\n28 Mar 2026, 15:20",
        amount: "-Rp 6.000.000",
        amountColor: "text-gray-900",
        icon: TransactionIcons.TransferOut,
        detail: {
          amount: "Rp 6.000.000",
          fromName: "Muhammad Firman Kusdanardi",
          fromBank: "SeaBank: ********0593",
          toName: "Muhammad Firman Kusd",
          toBank: "MANDIRI: 1570011214443",
          fee: "Rp 0",
          total: "Rp 6.000.000",
          noTransaksi: "202603289745598600721088",
          metode: "BI-FAST",
          waktu: "28 Mar 2026, 15:20",
        },
      },
      {
        id: "10",
        type: "out",
        title: "Merah Putih Hotel",
        desc: "Transfer\n28 Mar 2026, 08:25",
        amount: "-Rp 3.960.000",
        amountColor: "text-gray-900",
        icon: TransactionIcons.TransferOut,
        detail: {
          amount: "Rp 3.960.000",
          fromName: "Muhammad Firman Kusdanardi",
          fromBank: "SeaBank: ********0593",
          toName: "Merah Putih Hotel",
          toBank: "BNI: 6731344992",
          fee: "Rp 0",
          total: "Rp 3.960.000",
          noTransaksi: "202603289745598600721099",
          metode: "Transfer Online",
          waktu: "28 Mar 2026, 08:25",
        },
      },
      {
        id: "21",
        type: "in",
        title: "Muhammad Firman Kusd",
        desc: "Transfer\n23 Mar 2026, 20:59",
        amount: "+Rp 20.000.000",
        amountColor: "text-green-500",
        icon: TransactionIcons.TransferOut,
        detail: {
          amount: "Rp 20.000.000",
          fromName: "Muhammad Firman Kusd",
          fromBank: "MANDIRI: 1570011214443",
          toName: "Muhammad Firman Kusdanardi",
          toBank: "SeaBank: ********0593",
          fee: "Rp 0",
          total: "Rp 20.000.000",
          noTransaksi: "202603239745598600721021",
          metode: "BI-FAST",
          waktu: "23 Mar 2026, 20:59",
        },
      },
      {
        id: "22",
        type: "out",
        title: "Biaya",
        desc: "Transfer\n10 Mar 2026, 12:03",
        amount: "-Rp 1.000",
        amountColor: "text-gray-900",
        icon: TransactionIcons.Biaya,
      },
      {
        id: "23",
        type: "out",
        title: "Gojek Mxxxxxxx Fxxxxx...",
        desc: "Transfer\n10 Mar 2026, 12:03",
        amount: "-Rp 43.000",
        amountColor: "text-gray-900",
        icon: TransactionIcons.EWallet,
      },
    ],
  },
];

// =============================================
// HALAMAN PIN
// =============================================
function PinPage({ onSuccess }) {
  const [pin, setPin] = useState([]);
  const [shake, setShake] = useState(false);
  const CORRECT_PIN = [1, 2, 3, 4, 5, 6];

  const handleKey = (num) => {
    if (pin.length >= 6) return;
    const newPin = [...pin, num];
    setPin(newPin);
    if (newPin.length === 6) {
      setTimeout(() => {
        if (newPin.join("") === CORRECT_PIN.join("")) {
          onSuccess();
        } else {
          setShake(true);
          setTimeout(() => {
            setPin([]);
            setShake(false);
          }, 600);
        }
      }, 200);
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  const keys = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex items-center px-4 py-4 border-b border-gray-100">
        <ArrowLeft className="w-6 h-6 text-gray-700 mr-4" />
        <h1 className="font-semibold text-lg text-gray-900">
          Verifikasi PIN SeaBank
        </h1>
      </div>

      <div className="flex-1 flex flex-col items-center justify-start pt-10 px-8">
        <SeaBankLogoFull className="mb-10 justify-center" />
        <p className="text-gray-500 text-[15px] mb-1">
          Masukkan 6 digit PIN kamu
        </p>
        <button className="text-blue-500 text-[15px] font-medium mb-10 active:scale-95 transition-transform">
          Lupa PIN?
        </button>

        <div
          className="flex space-x-5 mb-2"
          style={shake ? { animation: "shake 0.4s ease" } : {}}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full transition-all duration-150 ${
                i < pin.length ? "bg-[#FD5F00]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="pb-8 px-4">
        {keys.map((row, ri) => (
          <div key={ri} className="flex mb-2">
            {row.map((num) => (
              <button
                key={num}
                onClick={() => handleKey(num)}
                className="flex-1 mx-1.5 py-4 bg-gray-50 rounded-xl text-2xl font-normal text-gray-800 active:bg-gray-200 transition-colors border border-gray-100"
              >
                {num}
              </button>
            ))}
          </div>
        ))}
        <div className="flex">
          <div className="flex-1 mx-1.5" />
          <button
            onClick={() => handleKey(0)}
            className="flex-1 mx-1.5 py-4 bg-gray-50 rounded-xl text-2xl font-normal text-gray-800 active:bg-gray-200 transition-colors border border-gray-100"
          >
            0
          </button>
          <button
            onClick={handleDelete}
            className="flex-1 mx-1.5 py-4 flex items-center justify-center bg-gray-50 rounded-xl active:bg-gray-200 transition-colors border border-gray-100"
          >
            <Delete className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-6px); }
          80% { transform: translateX(6px); }
        }
      `}</style>
    </div>
  );
}

// =============================================
// BERANDA
// =============================================
function HomePage({ onNavigate }) {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 pb-24">
      <div className="flex items-center justify-between p-4 bg-white sticky top-0 z-10 shadow-sm">
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => onNavigate("saya", "saya")}
        >
          <div className="w-10 h-10 bg-slate-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
            f
          </div>
          <div>
            <h2 className="font-semibold text-gray-800 text-[15px]">
              Muhammad Firma...
            </h2>
            <p className="text-xs text-gray-500 flex items-center mt-0.5">
              No. Rekening: 9015 7258 0593{" "}
              <Copy className="w-3 h-3 ml-1 text-gray-400" />
            </p>
          </div>
        </div>
        <div className="relative cursor-pointer">
          <Bell className="w-6 h-6 text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center border border-white">
            4
          </span>
        </div>
      </div>

      <div
        className="mx-4 mt-4 mb-4 p-5 rounded-[18px] text-white shadow-lg relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #FD5F00 0%, #FF8A00 100%)",
        }}
      >
        <div className="absolute -right-6 -top-6 opacity-20 pointer-events-none text-white">
          <SeaBankWatermark className="w-48 h-48" />
        </div>
        <div className="flex justify-between items-start mb-6 relative z-10">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-sm opacity-90 font-medium">
                Total Saldo
              </span>
              <button
                onClick={() => setShowBalance(!showBalance)}
                className="focus:outline-none p-1"
              >
                {showBalance ? (
                  <Eye className="w-[18px] h-[18px] opacity-90" />
                ) : (
                  <EyeOff className="w-[18px] h-[18px] opacity-90" />
                )}
              </button>
            </div>
            <h1 className="text-[32px] font-bold tracking-tight leading-none">
              {showBalance ? "Rp 533" : "Rp ••••••"}
            </h1>
          </div>
          <button
            onClick={() => onNavigate("riwayat")}
            className="flex items-center space-x-1 bg-black bg-opacity-15 px-3 py-1.5 rounded-full text-xs font-medium active:bg-opacity-25 transition-colors"
          >
            <span>Riwayat</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 relative z-10">
          <div>
            <div className="flex items-center space-x-1 text-sm opacity-90 mb-1 cursor-pointer">
              <span>Tabungan</span>
              <ChevronRight className="w-3 h-3" />
            </div>
            <p className="font-semibold text-lg">
              {showBalance ? "Rp 533" : "Rp •••"}
            </p>
            <p className="text-[11px] opacity-80 mt-0.5">
              2,5% p.a. cair harian
            </p>
          </div>
          <div>
            <div className="flex items-center space-x-1 text-sm opacity-90 mb-1 cursor-pointer">
              <span>Deposito</span>
              <ChevronRight className="w-3 h-3" />
            </div>
            <div className="flex items-center space-x-2">
              <p className="font-semibold text-lg">
                {showBalance ? "Rp 0" : "Rp •••"}
              </p>
              <span className="bg-white text-[#FD5F00] text-[10px] font-bold px-2 py-0.5 rounded-full">
                Buka Deposito
              </span>
            </div>
            <p className="text-[11px] opacity-80 mt-0.5">Hingga 6% p.a.</p>
          </div>
        </div>
      </div>

      <div className="bg-white py-4 mb-2 grid grid-cols-4 gap-y-5 shadow-sm">
        {MENU_ITEMS.map((item, index) => (
          <button
            key={index}
            className="flex flex-col items-center space-y-2 active:scale-90 transition-transform duration-150 focus:outline-none"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <item.icon />
            </div>
            <span className="text-[11px] text-gray-700 text-center leading-tight px-1 font-medium">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      <div className="mx-4 mt-4 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div
          className="p-4 flex items-center justify-between border-b border-gray-50 cursor-pointer active:bg-gray-50"
          onClick={() => onNavigate("riwayat")}
        >
          <h3 className="font-bold text-gray-800 text-sm">Riwayat Transaksi</h3>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
        <div>
          {RIWAYAT_DATA[1].items.slice(0, 3).map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between p-4 border-b border-gray-50 active:bg-gray-50 cursor-pointer"
              onClick={() => onNavigate("detail", null, tx)}
            >
              <div className="flex items-center space-x-3">
                <tx.icon />
                <div>
                  <h4 className="font-semibold text-sm text-gray-800">
                    {tx.title}
                  </h4>
                  <p className="text-xs text-gray-500 whitespace-pre-line leading-tight mt-0.5">
                    {tx.desc}
                  </p>
                </div>
              </div>
              <span className={`font-semibold text-sm ${tx.amountColor}`}>
                {tx.amount}
              </span>
            </div>
          ))}
        </div>
        <div className="p-3 text-center border-t border-gray-50">
          <button
            onClick={() => onNavigate("riwayat")}
            className="text-xs text-gray-500 font-medium flex items-center justify-center w-full active:text-gray-800"
          >
            Transaksi lainnya <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

// =============================================
// PROFIL
// =============================================
function ProfilePage() {
  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 pb-24">
      <div className="h-[120px] bg-[#FD5F00] px-4 pt-6 flex items-start justify-between relative">
        <div className="flex items-center space-x-4">
          <div className="w-[52px] h-[52px] bg-slate-500 rounded-full flex items-center justify-center text-white font-bold text-2xl border-2 border-[#FF8A00]">
            f
          </div>
          <div className="text-white">
            <h2 className="font-bold text-base">Muhammad Firman Kusdanardi</h2>
            <p className="text-sm opacity-90 mt-0.5">088*******232</p>
          </div>
        </div>
        <div className="relative">
          <Bell className="w-6 h-6 text-white" />
          <span className="absolute -top-1 -right-1 bg-white text-[#FD5F00] text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
            4
          </span>
        </div>
      </div>
      <div className="-mt-4 mx-4 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden relative z-10">
        {PROFILE_MENU.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border-b border-gray-50 active:bg-gray-50 cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <item.icon className="w-5 h-5 text-gray-600" strokeWidth={1.5} />
              <span className="text-sm font-medium text-gray-800">
                {item.label}
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        ))}
      </div>
      <div className="mx-4 mt-5 mb-8 bg-white rounded-xl shadow-sm border border-gray-100 cursor-pointer active:bg-orange-50 transition-colors">
        <div className="py-3.5 text-center text-[#FD5F00] font-bold text-[15px]">
          Log Out
        </div>
      </div>
    </div>
  );
}

// =============================================
// RIWAYAT TRANSAKSI
// =============================================
function RiwayatTransaksiPage({ onBack, onNavigateDetail }) {
  return (
    <div className="flex-1 bg-white flex flex-col h-full z-20 absolute inset-0 pb-10">
      <div className="p-4 flex items-center justify-between sticky top-0 bg-white z-10 border-b border-gray-100 shadow-sm">
        <button onClick={onBack} className="p-1 active:scale-90">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h2 className="font-bold text-lg text-gray-800">Riwayat Transaksi</h2>
        <button className="p-1 active:scale-90">
          <Receipt className="w-6 h-6 text-gray-700" />
        </button>
      </div>
      <div className="flex border-b border-gray-100">
        <button className="flex-1 py-3 flex items-center justify-center text-sm font-medium text-gray-800">
          30 Hari Terakhir{" "}
          <ChevronDown className="w-4 h-4 ml-1 text-gray-500" />
        </button>
        <div className="w-[1px] bg-gray-200 my-2"></div>
        <button className="flex-1 py-3 flex items-center justify-center text-sm font-medium text-gray-800">
          Semua Transaksi <ChevronDown className="w-4 h-4 ml-1 text-gray-500" />
        </button>
      </div>
      <div className="p-4 bg-white flex items-center space-x-2 border-b border-gray-50 cursor-pointer">
        <div className="w-5 h-5 bg-[#FD5F00] rounded flex items-center justify-center">
          <CheckSquare className="w-4 h-4 text-white" />
        </div>
        <span className="text-sm text-gray-800 font-medium">
          Tampilkan bunga & pajak
        </span>
      </div>
      <div className="flex-1 overflow-y-auto bg-gray-50">
        {RIWAYAT_DATA.map((monthData, mIndex) => (
          <div key={mIndex}>
            <div className="bg-[#F8F9FA] px-4 py-3 flex justify-between items-center border-b border-gray-100 sticky top-0 z-0">
              <span className="font-bold text-gray-800 text-[15px]">
                {monthData.month}
              </span>
              <div className="text-right text-[11px] text-gray-500 font-medium">
                <div>Saldo keluar: {monthData.summaryOut}</div>
                <div>Saldo masuk: {monthData.summaryIn}</div>
              </div>
            </div>
            <div className="bg-white">
              {monthData.items.map((tx) => (
                <div
                  key={tx.id}
                  onClick={() => onNavigateDetail(tx)}
                  className="flex items-center justify-between p-4 border-b border-gray-50 active:bg-gray-100 cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <tx.icon />
                    <div>
                      <h4 className="font-medium text-[15px] text-gray-800">
                        {tx.title}
                      </h4>
                      <p className="text-[13px] text-gray-500 whitespace-pre-line leading-tight mt-0.5">
                        {tx.desc}
                      </p>
                    </div>
                  </div>
                  {tx.title === "Merah Putih Hotel" ? (
                    <div className="flex flex-col items-end">
                      <span className="text-xs text-gray-500 mb-2">Cv</span>
                      <span
                        className={`font-semibold text-[15px] ${tx.amountColor}`}
                      >
                        {tx.amount}
                      </span>
                    </div>
                  ) : (
                    <span
                      className={`font-semibold text-[15px] ${tx.amountColor}`}
                    >
                      {tx.amount}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// =============================================
// BUKTI TRANSAKSI
// =============================================
function DetailTransactionPage({ onBack, tx }) {
  const detail = tx?.detail || {
    amount: tx?.amount || "-",
    fromName: "-",
    fromBank: "-",
    toName: tx?.title || "-",
    toBank: "-",
    fee: "-",
    total: tx?.amount || "-",
    noTransaksi: "-",
    metode: "-",
    waktu: tx?.desc?.split("\n")[1] || "-",
  };

  return (
    <div className="flex-1 bg-gray-50 flex flex-col h-full absolute inset-0 z-30">
      <div className="bg-white p-4 flex items-center sticky top-0 z-10 shadow-sm">
        <button onClick={onBack} className="active:scale-90 p-1">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h2 className="flex-1 text-center font-bold text-lg text-gray-800 mr-7">
          Bukti Transaksi
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="bg-white rounded-2xl shadow-sm p-6 relative overflow-hidden">
          <div className="absolute -top-4 -right-4 opacity-[0.04] pointer-events-none">
            <SeaBankWatermark className="w-56 h-56 text-[#FD5F00]" />
          </div>
          <div className="flex flex-col items-center mb-8 mt-2">
            <SeaBankLogoFull className="mb-4 justify-center" />
            <span className="text-gray-500 text-sm mb-2">Bukti Transaksi</span>
            <h1 className="text-3xl font-bold text-gray-900">
              {detail.amount}
            </h1>
          </div>

          {tx?.detail ? (
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <span className="text-gray-500 text-sm">Dari</span>
                <div className="text-right">
                  <div className="flex items-center justify-end space-x-2 mb-1">
                    <div className="w-6 h-6 bg-slate-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      {detail.fromName.charAt(0).toLowerCase()}
                    </div>
                    <p className="font-semibold text-gray-800 text-[15px]">
                      {detail.fromName}
                    </p>
                  </div>
                  <div className="flex items-center justify-end space-x-1 text-[13px] text-gray-500 mt-1">
                    {detail.fromBank.includes("SeaBank") && (
                      <SeaBankIconOnly style={{ width: 16, height: 16 }} />
                    )}
                    <span>{detail.fromBank}</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-gray-500 text-sm">Ke</span>
                <div className="text-right">
                  <div className="flex items-center justify-end space-x-2 mb-1">
                    <div className="w-6 h-6 bg-[#FD5F00] rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <p className="font-semibold text-gray-800 text-[15px]">
                      {detail.toName}
                    </p>
                  </div>
                  <p className="text-[13px] text-gray-500 mt-1">
                    {detail.toBank}
                  </p>
                </div>
              </div>
              <div className="border-t-2 border-dashed border-gray-100"></div>
              <div className="space-y-3 text-[13px]">
                <div className="flex justify-between">
                  <span className="text-gray-500">Jumlah Transfer</span>
                  <span className="font-medium text-gray-800">
                    {detail.amount.replace("-", "")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Biaya Admin</span>
                  <span className="font-medium text-gray-800">
                    {detail.fee}
                  </span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-gray-600 font-bold">Total</span>
                  <span className="font-bold text-gray-900 text-base">
                    {detail.total.replace("-", "")}
                  </span>
                </div>
              </div>
              <div className="border-t-2 border-dashed border-gray-100"></div>
              <div className="space-y-3 text-[13px]">
                <div className="flex justify-between items-start">
                  <span className="text-gray-500 whitespace-nowrap mr-4">
                    No. Transaksi
                  </span>
                  <span className="font-medium text-gray-800 text-right break-all">
                    {detail.noTransaksi}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Metode Transaksi</span>
                  <span className="font-medium text-gray-800">
                    {detail.metode}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Waktu Transaksi</span>
                  <span className="font-medium text-gray-800">
                    {detail.waktu}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 text-sm mt-8">
              Hanya transaksi transfer yang menampilkan rincian penuh.
            </div>
          )}

          <div className="mt-10 text-center pb-2">
            <button className="text-blue-500 text-[13px] font-semibold mb-6">
              Butuh Bantuan?
            </button>
            <p className="text-xs text-gray-400">
              Resi ini merupakan bukti transaksi yang sah.
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 bg-white sticky bottom-0 border-t border-gray-100">
        <button className="w-full flex items-center justify-center space-x-2 bg-[#FD5F00] text-white font-bold py-3.5 rounded-full active:bg-orange-700 transition-colors">
          <Share2 className="w-5 h-5" />
          <span>Bagikan</span>
        </button>
      </div>
    </div>
  );
}

// =============================================
// APP UTAMA
// =============================================
export default function App() {
  const [currentPage, setCurrentPage] = useState("pin");
  const [activeTab, setActiveTab] = useState("beranda");
  const [selectedTx, setSelectedTx] = useState(null);

  const handleNavigation = (page, tab = null, txData = null) => {
    setCurrentPage(page);
    if (tab) setActiveTab(tab);
    if (txData) setSelectedTx(txData);
  };

  return (
    <div className="max-w-md mx-auto h-screen overflow-hidden shadow-2xl relative bg-white font-sans antialiased">
      <div className="h-full flex flex-col relative">
        {/* Halaman PIN */}
        {currentPage === "pin" && (
          <PinPage onSuccess={() => handleNavigation("home")} />
        )}

        {/* Beranda & Profil */}
        {(currentPage === "home" || currentPage === "saya") &&
          (activeTab === "beranda" ? (
            <HomePage onNavigate={handleNavigation} />
          ) : (
            <ProfilePage />
          ))}

        {/* Riwayat */}
        {currentPage === "riwayat" && (
          <RiwayatTransaksiPage
            onBack={() => handleNavigation("home")}
            onNavigateDetail={(tx) => handleNavigation("detail", null, tx)}
          />
        )}

        {/* Detail */}
        {currentPage === "detail" && (
          <DetailTransactionPage
            onBack={() => handleNavigation("riwayat")}
            tx={selectedTx}
          />
        )}
      </div>

      {/* Bottom Nav */}
      {(currentPage === "home" || currentPage === "saya") && (
        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 px-2 py-1 flex justify-around items-end z-40 pb-safe">
          <button
            onClick={() => handleNavigation("home", "beranda")}
            className={`flex flex-col items-center pb-1 w-16 ${
              activeTab === "beranda"
                ? "text-[#FD5F00]"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <Home className="w-[22px] h-[22px] mb-1" />
            <span className="text-[10px] font-medium">Beranda</span>
          </button>
          <button
            onClick={() => handleNavigation("home", "bayar")}
            className={`flex flex-col items-center pb-1 w-16 ${
              activeTab === "bayar"
                ? "text-[#FD5F00]"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <ArrowLeftRight className="w-[22px] h-[22px] mb-1" />
            <span className="text-[10px] font-medium">Bayar/Transfer</span>
          </button>
          <div className="relative -top-3 flex flex-col items-center">
            <button className="bg-[#FD5F00] text-white p-3 rounded-full shadow-[0_4px_10px_rgba(253,95,0,0.4)] border-[3px] border-white active:scale-95 transition-transform mb-1">
              <QrCode className="w-6 h-6" />
            </button>
            <span className="text-[10px] font-medium text-gray-500">QRIS</span>
          </div>
          <button
            onClick={() => handleNavigation("home", "deposito")}
            className={`flex flex-col items-center pb-1 w-16 ${
              activeTab === "deposito"
                ? "text-[#FD5F00]"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <CircleDollarSign className="w-[22px] h-[22px] mb-1" />
            <span className="text-[10px] font-medium">Deposito</span>
          </button>
          <button
            onClick={() => handleNavigation("saya", "saya")}
            className={`flex flex-col items-center pb-1 w-16 ${
              activeTab === "saya"
                ? "text-[#FD5F00]"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <User className="w-[22px] h-[22px] mb-1" />
            <span className="text-[10px] font-medium">Saya</span>
          </button>
        </div>
      )}
    </div>
  );
}
