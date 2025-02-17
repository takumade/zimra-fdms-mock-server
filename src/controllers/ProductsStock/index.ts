import { Request, Response } from 'express';
import generateOperationID from '../../utils/generateOperationID';


interface ProductsStockGetListDto {
    hsCode: string;
    goodName: string;
    quantity: number;
    taxPayerId: number;
    taxPayerName: string;
    taxPayerTIN: string;
    branchId?: number;
    branchName?: string;
  }

  export const getProductsStock = async (req: Request, res: Response) => {
    try {
      const { 
        HsCode, GoodName, Sort, Order, Offset, Limit, Operator, DeviceModelName, DeviceModelVersion 
      } = req.query;

      const { deviceID } = req.params;

      console.log('Received parameters:', req.query);

      const offset = parseInt(Offset as string);
      const limit = parseInt(Limit as string);
  
      if (isNaN(offset) || isNaN(limit)) {
        return res.status(400).json({
            "type": "https://httpstatuses.io/422",
            "title": "Bad request",
            "status": 400,
            "detail": "Offset and Limit must be integers"
          });
      }
  
      // Example of interacting with a database or service
      const products: ProductsStockGetListDto[] = [
        {
          hsCode: '12345678',
          goodName: 'Sample Product',
          quantity: 100,
          taxPayerId: 1,
          taxPayerName: 'Tax Payer 1',
          taxPayerTIN: 'TIN12345',
        },
        // Add more mock data if needed
      ]
  
      if (deviceID === 'invalid' || deviceID === '0') {
        return res.status(404).json({
            "type": "https://httpstatuses.io/422",
            "title": "Unprocessable Entity",
            "status": 422,
            "detail": "Device fiscal day status must be FiscalDayClosed"
          });
      }
  

      res.status(200).json({
        total: products.length, // Assuming the total length here, or use a count query in DB
        rows: products
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        "type": "https://httpstatuses.io/500",
        "title": "Server error",
        "status": 500,
        "operationID": generateOperationID()
      });
    }
  };
