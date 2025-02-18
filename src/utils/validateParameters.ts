export const checkDeviceID = (id: number): boolean => {

    try {
        const idNumber = Number(id);
        if (isNaN(idNumber) || idNumber <= 0 || idNumber >= 10000000000 || String(idNumber).length !== String(id).length) {
            return false;
        }
        return true;
    } catch (error) {
        return false;
    }
};

export const checkActivationKey = (key: string): boolean => {
    if (typeof key !== 'string' || key.length > 8 || key.length === 0) {
        return false;
    }
    return true;
};

export const checkDeviceSerialNo = (serialNo: string): boolean => {
    if (typeof serialNo !== 'string' || serialNo.length > 20 || serialNo.length === 0) {
        return false;
    }
    return true;
};

