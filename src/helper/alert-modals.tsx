
export const NotificationSuccess = (notification: any, title?: string, content?: string, onOk?: Function) => {
    if (notification)
        notification?.success({
            message: `${title}`,
            description: content,
            placement: 'topRight',
            style: {
                backgroundColor: '#F6FFED',
                color: 'white',
                borderColor: "#B7EB8F",
            },
            duration: 3
        });
}
export const NotificationError = (notification: any, title?: string, content?: string, onOk?: Function) => {
    notification.error({
        message: `${title}`,
        description: content,
        placement: 'topRight',
        style: {
            backgroundColor: '#fff1f0',
            color: 'white',
            borderColor: "#ffa39e"
        },
        duration: 3
    });
}

export const ModalDeleteConfirm = (modal: any, id: number, name: string, onOkCallback: (id: any) => void) => {
    modal.confirm({
        title: 'ยืนยันการลบข้อมูล',
        content: name,
        okText: "ยืนยัน",
        okType: 'danger',
        cancelText: 'ยกเลิก',
        onOk() { onOkCallback(id) },
        onCancel() {
            console.log('Cancel');
        },
    });
};


