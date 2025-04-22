import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="bg-white">
      <div className="container">
        <div className="flex items-center justify-between">
          <img
            className="cursor-pointer"
            src="images/burger.svg"
            alt="burger"
          />
          <Link href="/">
            <img src="images/logo.svg" alt="logo" />
          </Link>
        </div>
      </div>
    </header>
  );
};
