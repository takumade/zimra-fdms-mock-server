import express, { Application } from 'express';
import deviceRoutes from '../routes/Device';
import publicRoutes from '../routes/Public';
import userRoutes from '../routes/User';
import productsStockRoutes from '../routes/ProductsStock';
import logger from '../utils/logger';

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    private config(): void {
        // Log all requests
        this.app.use((req, res, next) => {
            logger.info({
                method: req.method,
                url: req.url,
                query: req.query,
                body: req.body,
            }, 'Incoming request');
            next();
        });

        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private routes(): void {
        this.app.use('/api/Devices', deviceRoutes);
        this.app.use('/api/Public', publicRoutes);
        this.app.use('/api/User', userRoutes);
        this.app.use('/api/Products Stock', productsStockRoutes);
    }
}

export default new App().app;
