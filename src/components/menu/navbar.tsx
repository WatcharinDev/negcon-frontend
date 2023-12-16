import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-3 text-white">
      <div className='flex justify-between'>
        <div className='flex align-middle gap-4'>
          <Link href="/">
            <h1 className="text-xl font-bold p-0 m-0">Logo 5555555</h1>
          </Link>
        </div>

        <div className='flex align-middle gap-4'>
          <Avatar size={50} icon={<UserOutlined />} />
          <div className='flex flex-col justify-center align-middle'>
            <h1 className='p-0 m-0'>Watcharin Ratchakuna</h1>
            <h1 className='p-0 m-0'>Admin</h1>
          </div>

        </div>
      </div>

    </nav>
  );
};

export default Navbar;