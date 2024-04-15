type TFunction = () => any;
export const IIFE = (cb: TFunction) => {
    cb();
};

export const saveLocalStorage = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalStorage = (key: string) => {
    try {
        return JSON.parse(localStorage.getItem(key) ?? "");
    } catch {
        return null;
    }
};

export const removeLocalStorage = (key: string) => {
    localStorage.removeItem(key)
}
