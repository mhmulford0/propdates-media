import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export default function Navbar() {
  const { address } = useAccount();
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="navbar-start">
        <Link to="/">
          <span className="normal-case text-xl px-2 no-underline hover:underline">
            Nounish Media
          </span>
        </Link>
      </div>
      <div className="navbar-end">
        <div className="flex gap-x-3 items-center">
          {address && (
            <Link to="/uploads">
              <span>Uploads</span>
            </Link>
          )}
          <ConnectButton
            label="Sign in"
            chainStatus="name"
            showBalance={false}
            accountStatus="address"
          />
        </div>
      </div>
    </div>
  );
}

// export function Navbar() {
//   return (
//     <div className="drawer">
//       <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
//       <div className="drawer-content flex flex-col">
//         <div className="w-full navbar bg-base-300 sm:px-4">
//           <div className="flex-none sm:hidden">
//             <label
//               htmlFor="my-drawer-3"
//               aria-label="open sidebar"
//               className="btn btn-square btn-ghost"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 className="inline-block w-6 h-6 stroke-current"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 ></path>
//               </svg>
//             </label>
//           </div>

//           <div className="flex justify-between w-full">
//             <span className="text-base-content font-semibold text-lg">
//               Nounish Media
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className="drawer-side">
//         <label
//           htmlFor="my-drawer-3"
//           aria-label="close sidebar"
//           className="drawer-overlay"
//         ></label>
//         <ul className="menu p-4 w-80 min-h-full bg-base-200">
//           <li>
//             <a>Sidebar Item 1</a>
//           </li>
//           <li>
//             <a>Sidebar Item 2</a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }
