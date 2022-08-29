import toast from 'react-hot-toast';
const saveSettings = (msg: any): any => {
    console.log(msg);
    return true;

}

export const notificacion = (msg: string, type: "success" | "error" | "promise" | "default" = "default") => {
    if (type === "success") {
        toast.success(`${msg}`, { position: "top-right" });

    }
    else if (type === "error") {
        toast.error(`${msg}`, { position: "top-right" });

    } else {
        toast(`${msg}`, { position: "top-right" });

    }
}