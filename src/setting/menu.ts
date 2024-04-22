import { FileOutlined, HomeOutlined, IdcardOutlined } from "@ant-design/icons";

export const menus = [
    {
        group: "community",
        name: "รายการโพสต์",
        url: "/community",
        icon: IdcardOutlined,
        allowed_access: ["SADM", "ADM", "CS"],
        items: []
    },
    {
        group: "work",
        name: "งาน",
        url: "",
        icon: HomeOutlined,
        allowed_access: ["SADM", "ADM", "CS"],
        items: [
            {
                group: "work",
                name: "ค้นหาช่าง",
                url: "/findwork",
                icon:"",
                allowed_access: ["SADM", "ADM", "CS"],
                items: []
            }
        ]
    },
    {
        group: "document",
        name: "เอกสาร",
        url: "",
        icon: FileOutlined,
        allowed_access: ["SADM", "ADM", "CS"],
        items: [
            {
                group: "document",
                name: "เอกสาร PDF",
                url: "/document/pdf",
                icon:"",
                allowed_access: ["SADM", "ADM", "CS"],
                items: []
            },
            {
                group: "document",
                name: "เอกสาร Word",
                url: "/document/word",
                icon:"",
                allowed_access: ["SADM", "ADM", "CS"],
                items: []
            },
            {
                group: "document",
                name: "เอกสาร Excel",
                url: "/document/excel",
                icon:"",
                allowed_access: ["SADM", "ADM", "CS"],
                items: []
            }
        ]
    }
]