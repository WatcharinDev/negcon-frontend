import { authOptions } from '@/app/api/auth/authoptions';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Input } from 'antd';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

const Navbar: React.FC = async () => {
  const session = await getServerSession(authOptions)
  return (
    <nav className="bg-gray-800 p-3 text-white">
      <div className='grid grid-cols-3'>
        <div className='flex align-middle gap-4 w-[250px]'>
          <div>
            <Link href="/">
              <h1 className="text-xl font-bold p-0 m-0">Negcon Web App</h1>
            </Link>
          </div>

        </div>
        <div className='flex  align-middle gap-4'>
          <Input placeholder='ค้นหาโพสต์' />
          <div className='flex flex-col justify-center align-middle'>
            <Button className='bg-red-300' type="primary" icon={<SearchOutlined />} shape="circle" />
          </div>
        </div>
        <div className='flex align-middle gap-4 justify-end'>
          <Avatar size={50} icon={<UserOutlined />} src={session?.user.profile_img} />
          <div className='flex flex-col justify-center align-middle'>
            <h1 className='p-0 m-0'>{session?.user.username}</h1>
            <h1 className='p-0 m-0'>{session?.user.role_code}</h1>
          </div>

        </div>
      </div>

    </nav>
  );
};

export default Navbar;