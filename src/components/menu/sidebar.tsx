'use client'

import { menus } from "@/setting/menu";
import Icon from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { SetStateAction, useState } from "react";

const Sidebar: React.FC = () => {
  const router = useRouter()
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menuIndex: any) => {
    if (activeMenu === menuIndex) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menuIndex);
    }
  };

  const handleRoutePush = (url: string) => {
    router.push(url)
  }
  return (
    <aside className="bg-gray-400 p-4 text-white w-[250px]">
      <ul>
        {menus.map((menu, index) => (

          menu.items.length > 0 ?
            <li key={index}>
              <div className="p-4 mb-2 bg-gray-700 hover:bg-gray-600 cursor-pointer w-full rounded-md" onClick={() => toggleMenu(index)}>
                <Icon component={menu.icon as React.ForwardRefExoticComponent<any>} /> &nbsp;{menu.name}
              </div>
              {activeMenu === index && (
                <ul className="pl-8">
                  {menu.items.length > 0 && menu.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="py-2 mb-4 cursor-pointer hover:bg-red-400 rounded-md p-2" onClick={() => handleRoutePush(item.url)}>
                      {item.name}
                    </li>
                  ))}
                </ul>
              )}
            </li> :
            <li key={index}>
              <div className="p-4 mb-2 bg-gray-700 hover:bg-gray-600 cursor-pointer w-full rounded-md" onClick={() => toggleMenu(index)}>
              <Icon component={menu.icon as React.ForwardRefExoticComponent<any>} /> &nbsp;{menu.name}
              </div>
            </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;