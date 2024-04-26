import { App, ConfigProvider } from "antd";


const AppLayout = async ({ children }: { children: React.ReactNode }) => {

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
            <App>
                {children}
            </App>

        </ConfigProvider>
    );
};

export default AppLayout;
