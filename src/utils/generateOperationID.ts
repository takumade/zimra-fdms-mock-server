const generateOperationID = (): string => {
    const randomPart = Math.random().toString(36).substring(2, 10).toUpperCase();
    const timestamp = Date.now().toString(36).toUpperCase();
    return `0HMPH${randomPart}${timestamp}`.substring(0, 60);
};


export default generateOperationID;