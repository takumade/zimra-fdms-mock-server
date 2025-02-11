const generateOperationID = (): string => {
    return `0HMPH${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
};


export default generateOperationID;