import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 border-b border-gray-200 lg:bg-white">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href="/">
            <img src="/images/logo.svg" alt="logo" />
          </Link>
          <img
            className="cursor-pointer lg:hidden"
            src="/images/burger.svg"
            alt="burger"
          />
        </div>
      </div>
    </header>
  );
};
