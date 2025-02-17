const checkDeviceID = (id: number | string): boolean => {
    const idNumber = Number(id);
    if (isNaN(idNumber) || idNumber <= 0 || idNumber >= 10000000000 || String(idNumber).length !== String(id).length) {
        return false;
    }
    return true;
};


export default checkDeviceID;