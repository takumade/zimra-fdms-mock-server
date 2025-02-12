export interface OpenDayRequest {
    fiscalDayNo: number;
    fiscalDayOpened: string;
}

export interface FiscalCounter {
    fiscalCounterType: "SaleByTax" | "SaleTaxByTax" | "CreditNoteByTax" | "CreditNoteTaxByTax" | "DebitNoteByTax" | "DebitNoteTaxByTax" | "BalanceByMoneyType" | "PayoutByTax" | "PayoutTaxByTax";
    fiscalCounterCurrency: string;
    fiscalCounterTaxPercent?: number;
    fiscalCounterTaxID?: number;
    fiscalCounterMoneyType?: "Cash" | "CreditCard" | "DebitCard" | "Check" | "WireTransfer" | "MobileMoney" | "Voucher" | "Other";
    fiscalCounterValue: number;
}

export interface CloseDayRequest {
    fiscalDayNo: number;
    fiscalDayCounters: FiscalCounter[];
    fiscalDayDeviceSignature: {
        "hash": string,
        "signature": string
    };
    receiptCounter: number;
}

export interface IssueCertificateRequest {
    certificateRequest: string
}

export interface PingResponse {
    reportingFrequency: number;
    operationID: string;
}

export interface SubmittedFileHeaderDtoListResponse {
    files: Array<{
        fileName: string;
        uploadedAt: string;
        status: string;
    }>;
}

export interface SubmitReceiptRequest {
    receiptType: "FiscalInvoice" | "FiscalInvoiceProforma" | "FiscalReceipt" | "NonFiscalReceipt" | "CreditNote" | "DebitNote" | "CreditNoteProforma" | "DebitNoteProforma";
    receiptCurrency: string;
    receiptCounter: number;
    receiptGlobalNo: number;
    invoiceNo: string;
    buyerData?: {
        buyerRegisterName: string;
        buyerTradeName: string;
        vatNumber?: string;
        buyerTIN?: string;
        buyerContacts?: {
            phoneNo?: string;
            email?: string;
        };
        buyerAddress?: {
            province?: string;
            city?: string;
            street?: string;
            houseNo?: string;
            district?: string;
        };
    };
    receiptNotes?: string;
    receiptDate: string;
    creditDebitNote?: {
        receiptID?: number;
        deviceID?: number;
        receiptGlobalNo?: number;
        fiscalDayNo?: number;
    };
    receiptLinesTaxInclusive: boolean;
    receiptLines: Array<{
        receiptLineType: "Sale" | "Discount";
        receiptLineNo: number;
        receiptLineHSCode?: string;
        receiptLineName: string;
        receiptLinePrice?: number;
        receiptLineQuantity: number;
        receiptLineTotal: number;
        taxCode?: string;
        taxPercent?: number;
        taxID: number;
    }>;
    receiptTaxes: Array<{
        taxCode?: string;
        taxPercent?: number;
        taxID: number;
        taxAmount: number;
        salesAmountWithTax: number;
    }>;
    receiptPayments: Array<{
        moneyTypeCode: "Cash" | "CreditCard" | "DebitCard" | "Check" | "WireTransfer" | "MobileMoney" | "Voucher" | "Other";
        paymentAmount: number;
    }>;
    receiptTotal: number;
    receiptPrintForm?: "Receipt48" | "InvoiceA4";
    receiptDeviceSignature: {
        hash: string;
        signature: string;
    };
}

export interface Receipt {
    receiptType: string;
    receiptCurrency: string;
    receiptCounter: number;
    receiptGlobalNo: number;
    invoiceNo: string;
    receiptDate: string;
    receiptLinesTaxInclusive: boolean;
    receiptLines: Array<{
        receiptLineType: string;
        receiptLineNo: number;
        receiptLineHSCode: string;
        receiptLineName: string;
        receiptLinePrice: number;
        receiptLineQuantity: number;
        receiptLineTotal: number;
        taxCode: string;
        taxPercent: number;
        taxID: number;
    }>;
    receiptTaxes: Array<{
        taxCode: string;
        taxPercent: number;
        taxID: number;
        taxAmount: number;
        salesAmountWithTax: number;
    }>;
    receiptPayments: Array<{
        moneyTypeCode: string;
        paymentAmount: number;
    }>;
    receiptTotal: number;
    receiptPrintForm: string;
    receiptDeviceSignature: {
        hash: string;
        signature: string;
    };
}

export interface RequestBody {
    header: {
        deviceId: number;
        fiscalDayNo: number;
        fiscalDayOpened: string;
        fileSequence: number;
    };
    content: {
        receipts: Receipt[];
    };
    footer: {
        fiscalDayCounters: Array<FiscalCounter>;
        fiscalDayDeviceSignature: {
            hash: string;
            signature: string;
        };
        receiptCounter: number;
        fiscalDayClosed: string;
    };
}
