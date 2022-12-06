import Link from "next/link";
import { RiTestTubeFill } from "react-icons/ri";

function Header() {
  return (
    <nav className="w-full h-[10vh] px-3 md:px-6 lg:px-9 font-montserrat border-b border-gray-200 z-50">
      <div className="flex justify-between items-center">
        <Link href='/' passHref>
          <span className="font-bold text-2xl">
            IT Experiments
          </span>
        </Link>
        <div className="flex gap-8">
          <Link href='/experiments/5'>
            <strong className="flex items-center">
              <RiTestTubeFill className="text-xl" />
              <span className="font-semibold text-sm">: 5</span>
            </strong>
          </Link>
          <Link href='/experiments/6'>
            <strong className="flex items-center">
              <RiTestTubeFill className="text-xl" />
              <span className="font-semibold text-sm">: 6</span>
            </strong>
          </Link>
          <Link href='/experiments/7'>
            <strong className="flex items-center">
              <RiTestTubeFill className="text-xl" />
              <span className="font-semibold text-sm">: 7</span>
            </strong>
          </Link>
          <Link href='/experiments/8'>
            <strong className="flex items-center">
              <RiTestTubeFill className="text-xl" />
              <span className="font-semibold text-sm">: 8</span>
            </strong>
          </Link>
          <Link href='/experiments/9'>
            <strong className="flex items-center">
              <RiTestTubeFill className="text-xl" />
              <span className="font-semibold text-sm">: 9</span>
            </strong>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;