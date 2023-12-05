import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <Link href="/">
        <h1 className="text-xl font-bold">Logo</h1>
      </Link>
    </nav>
  );
};

export default Navbar;