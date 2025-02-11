import { Request, Response } from 'express';

import generateOperationID from '../../utils/generateOperationID';

interface OpenDayRequest {
    // Add properties for the request body, example:
    fiscalDayNo: number;
    fiscalDayOpened: string;
}


interface FiscalCounter {
    fiscalCounterType: "SaleByTax" | "SaleTaxByTax" | "CreditNoteByTax" | "CreditNoteTaxByTax" | "DebitNoteByTax" | "DebitNoteTaxByTax" | "BalanceByMoneyType" | "PayoutByTax" | "PayoutTaxByTax";
    fiscalCounterCurrency: string;
    fiscalCounterTaxPercent?: number;
    fiscalCounterTaxID?: number;
    fiscalCounterMoneyType?: "Cash" | "CreditCard" | "DebitCard" | "Check" | "WireTransfer" | "MobileMoney" | "Voucher" | "Other";
    fiscalCounterValue: number;
}
  

interface CloseDayRequest {
    fiscalDayNo: number;
    fiscalDayCounters: FiscalCounter[];
    fiscalDayDeviceSignature: {
        "hash": string,
        "signature": string
    };
    receiptCounter: number;
}

interface IssueCertificateRequest {
    certificateRequest: string
}


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

export const getStatus = async (req: Request, res: Response) => {
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
        fiscalDayStatus: "FiscalDayClosed",
        fiscalDayReconciliationMode: "Auto",
        fiscalDayServerSignature: {
            certificateThumbprint: "b785a0b4d8a734a55ba595d143b4cf72834cd88d",
            hash: "//To59fLHvuoRe2slUpN2grJu5adaodOW6kW1OYvf/c=",
            signature: "YyXTSizBBrMjMk4VQL+sCNr+2AC6aQbDAn9JMV2rk3yJ6MDZwie0wqQW3oisNWrMkeZsuAyFSnFkU2A+pKm91sOHVdjeRBebjQgAQQIMTCVIcYrx+BizQ7Ib9iCdsVI+Jel2nThqQiQzfRef6EgtgsaIAN+PV55xSrHvPkIe+Bc="
        },
        fiscalDayClosed: "2023-03-30T20:15:40",
        lastFiscalDayNo: 101,
        lastReceiptGlobalNo: 9931,
    });
}


export const openDay = async (req: Request, res: Response) => {
    const { deviceID } = req.params;
    const deviceModelName = req.header('DeviceModelName');
    const deviceModelVersion = req.header('DeviceModelVersion');
    const requestBody: OpenDayRequest = req.body;

    // Check if deviceID is provided and is valid
    if (!deviceID || isNaN(Number(deviceID))) {
        return res.status(400).json({
            operationID: generateOperationID(),
            type: "https://httpstatuses.io/400",
            title: "Bad Request",
            status: 400,
            detail: "Invalid or missing deviceID",
        });
    }

    // Validate that the required headers are provided
    if (!deviceModelName || !deviceModelVersion) {
        return res.status(422).json({
            operationID: generateOperationID(),
            type: "https://httpstatuses.io/422",
            title: "Unprocessable Entity",
            status: 422,
            detail: "Missing required headers",
        });
    }

    // Simulate expired certificate scenario
    if (deviceID === "999") {
        return res.status(401).json({
            operationID: generateOperationID(),
            type: "https://httpstatuses.io/401",
            title: "Unauthorized",
            status: 401,
            detail: "Device certificate expired.",
        });
    }

    // Simulate server error scenario
    if (deviceID === "500") {
        return res.status(500).json({
            operationID: generateOperationID(),
            type: "https://httpstatuses.io/500",
            title: "Server error",
            status: 500,
        });
    }

    // Simulate success response
    return res.status(200).json({
        operationID: generateOperationID(),
        fiscalDayNo: 102,
    });
}

export const closeDay = async (req: Request, res: Response) => {

    const { deviceID } = req.params;
    const deviceModelName = req.header('DeviceModelName');
    const deviceModelVersion = req.header('DeviceModelVersion');
    const requestBody: CloseDayRequest = req.body;

    // Validate deviceID
    if (!deviceID || isNaN(Number(deviceID))) {
        return res.status(400).json({
            operationID: generateOperationID(),
            type: "https://httpstatuses.io/400",
            title: "Bad Request",
            status: 400,
            detail: "Invalid or missing deviceID",
        });
    }

    // Validate required headers
    if (!deviceModelName || !deviceModelVersion) {
        return res.status(422).json({
            operationID: generateOperationID(),
            type: "https://httpstatuses.io/422",
            title: "Unprocessable Entity",
            status: 422,
            detail: "Missing required headers: DeviceModelName or DeviceModelVersion",
        });
    }

    // Simulate expired certificate scenario
    if (deviceID === "999") {
        return res.status(401).json({
            operationID: generateOperationID(),
            type: "https://httpstatuses.io/401",
            title: "Unauthorized",
            status: 401,
            detail: "Device certificate expired.",
        });
    }

    // Simulate server error scenario
    if (deviceID === "500") {
        return res.status(500).json({
            operationID: generateOperationID(),
            type: "https://httpstatuses.io/500",
            title: "Server error",
            status: 500
        });
    }

    // Simulate successful Close Day response
    return res.status(200).json({
        operationID: generateOperationID(),
    });

}



export const issueCertificate  = async (req: Request, res: Response) => {
    const { deviceID } = req.params;
    const deviceModelName = req.header('DeviceModelName');
    const deviceModelVersion = req.header('DeviceModelVersion');
    const requestBody: IssueCertificateRequest = req.body;

    // Validate deviceID
    if (!deviceID || isNaN(Number(deviceID))) {
        return res.status(400).json({
            operationID: generateOperationID(),
            type: "https://httpstatuses.io/400",
            title: "Bad Request",
            status: 400,
            detail: "Invalid or missing deviceID",
        });
    }

    // Validate required headers
    if (!deviceModelName || !deviceModelVersion) {
        return res.status(422).json({
            operationID: generateOperationID(),
            type: "https://httpstatuses.io/422",
            title: "Unprocessable Entity",
            status: 422,
            detail: "Missing required headers: DeviceModelName or DeviceModelVersion",
        });
    }

    // Simulate expired certificate scenario
    if (deviceID === "999") {
        return res.status(401).json({
            operationID: generateOperationID(),
            type: "https://httpstatuses.io/401",
            title: "Unauthorized",
            status: 401,
            detail: "Device certificate expired.",
        });
    }

    // Simulate server error scenario
    if (deviceID === "500") {
        return res.status(500).json({
            operationID: generateOperationID(),
            type: "https://httpstatuses.io/500",
            title: "Server error",
            status: 500,
        });
    }

    // Simulate successful certificate issuance
    return res.status(200).json({
        operationID: generateOperationID(),
        certificate: `-----BEGIN CERTIFICATE-----
MIIC6TCCAdGgAwIBAgIFAKsSzWowDQYJKoZIhvcNAQELBQAwZDELMAkGA1UEBhMC
TFQxETAPBgNVBAoMCEdvb2QgTHRkMScwJQYDVQQLDB5Hb29kIEx0ZCBDZXJ0aWZp
Y2F0ZSBBdXRob3JpdHkxGTAXBgNVBAMMEEdvb2QgTHRkIFJvb3QgQ0EwHhcNMTkx
MDAzMTU1NzA1WhcNMjAxMDEyMTU1NzA1WjBfMQswCQYDVQQGEwJUWjERMA8GA1UE
CAwIWmFuemliYXIxHzAdBgNVBAoMFlphbnppYmFyIFJldmVudWUgQm9hcmQxHDAa
BgNVBAMME1pSQi1lVkZELTAwMDAwMDAwNDIwWTATBgcqhkjOPQIBBggqhkjOPQMB
BwNCAAT7v3DvY7pRg4lz2Z87wSMwSX27KwlpYnSRV6WUiPjpq2XsUAbg2lhUN7q3
mlNJaUzqoKPmop5qURIpqUydXfapo3IwcDAJBgNVHRMEAjAAMB8GA1UdIwQYMBaA
FK1RXHm1plvaintqlWaXDs1X3LX+MB0GA1UdDgQWBBRqr96XrCUbuwCQawxO0//n
TOCoNTAOBgNVHQ8BAf8EBAMCBeAwEwYDVR0lBAwwCgYIKwYBBQUHAwIwDQYJKoZI
hvcNAQELBQADggEBANr1Wk1cVZB96yobFgK3rQQv9oXW+Jle7Jh36J2o4wSSB+RH
lfMojDrqKVQCLrFDcF+8JIA3RTRKdduIXgBAr13xQ8JkHd1/o23yN6a2DaYgh0wr
DrndlR6y1yG0vQuurJ3IgXmC0ldM5+VhalgmoCKFV9JsUD+GhOyJ6NWlc0SqvJCs
3RZLYwZ4MNViPbRy0Kbp0ufY1zTbh02Gw9aVfFzUwL8GS00iMb4MnSav1xur7wQh
BoF3PpNvu003P7f1eVJ62qVD2LWWntfn0mL1aRmDe2wpMQKAKhxto+sDb2mfJ6G6
PFtwMHe7BUfiwTzGYqav21h1w/amPkxNVQ7Li4M=
-----END CERTIFICATE-----`
    });

}


