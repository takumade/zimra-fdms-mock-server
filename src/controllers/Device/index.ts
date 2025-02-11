import { Request, Response } from 'express';

import generateOperationID from '../../utils/generateOperationID';

export const getConfig = async (req: Request, res: Response) => {

    const { deviceID } = req.params;
    const deviceModelName = req.header('DeviceModelName');
    const deviceModelVersion = req.header('DeviceModelVersion');

    if (!deviceID || isNaN(Number(deviceID))) {
        return res.status(400).json({
            operationID: generateOperationID(),
            type: "https://httpstatuses.io/400",
            title: "Bad Request",
            status: 400,
            detail: "Invalid or missing deviceID",
        });
    }

    if (!deviceModelName || !deviceModelVersion) {
        return res.status(422).json({
            operationID: generateOperationID(),
            type: "https://httpstatuses.io/422",
            title: "Unprocessable Entity",
            status: 422,
            detail: "Missing required headers",
        });
    }

    // Mock expired certificate response
    if (deviceID === "999") {
        return res.status(401).json({
            operationID: generateOperationID(),
            type: "https://httpstatuses.io/401",
            title: "Unauthorized",
            status: 401,
            detail: "Device certificate expired.",
        });
    }

    // Mock server error response
    if (deviceID === "500") {
        return res.status(500).json({
            operationID: generateOperationID(),
            type: "https://httpstatuses.io/500",
            title: "Server error",
            status: 500
        });
    }

    // Mock successful response
    return res.status(200).json({
        operationID: generateOperationID(),
        taxPayerName: "Nienow, Hara and Schinner",
        taxPayerTIN: "3796605707",
        vatNumber: "3899488439",
        deviceSerialNo: `SN-${deviceID}`,
        deviceBranchName: "Shoes",
        deviceBranchAddress: {
            province: "Harare",
            street: "Torey Lakes",
            houseNo: "566",
            city: "Harare",
        },
        deviceBranchContacts: {
            phoneNo: "(320) 238-4248",
            email: "Leland_Gutmann@yahoo.com",
        },
        deviceOperatingMode: "Online",
        taxPayerDayMaxHrs: 24,
        applicableTaxes: [
            { taxPercent: 15, taxName: "15%" },
            { taxPercent: 0, taxName: "0%" },
            { taxName: "exempt" },
        ],
        certificateValidTill: "2026-03-30T17:15:40",
        qrUrl: "www.qrUrl.com",
        taxpayerDayEndNotificationHrs: 20
    });

};
