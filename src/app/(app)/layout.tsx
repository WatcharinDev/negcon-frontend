import Navbar from "@/components/menu/navbar";
import Sidebar from "@/components/menu/sidebar";
import { App, ConfigProvider } from "antd";
const AppLayout = ({ children }: { children: React.ReactNode }) => {

    const antGlobalConfig = {
        token: {
            borderRadius: 10,
            fontFamily: "var(--font-noto-sans-thai)",
            fontSize: 16,
            controlHeight: 40,
        },
    };


    return (
        <ConfigProvider theme={antGlobalConfig} >
            <div className="h-screen bg-gray-100 flex flex-col">
                <Navbar />
                
                <div className="flex-1 flex overflow-hidden">
                    <Sidebar />
                    <div className="flex-1 overflow-y-auto">
                        <main className="mx-auto min-w-[908px] max-w-[1280px] px-8 py-10">
                            {children}
                        </main>
                    </div>

                </div>
            </div>

        </ConfigProvider>
    );
};

export default AppLayout;
