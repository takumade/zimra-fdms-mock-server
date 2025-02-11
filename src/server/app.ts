import express, { Application } from 'express';
import deviceRoutes from '../routes/Device';
import publicRoutes from '../routes/Public';
import userRoutes from '../routes/User';
import productsStockRoutes from '../routes/ProductsStock';

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    private config(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private routes(): void {
        this.app.use('/Device', deviceRoutes);
        this.app.use('/Public', publicRoutes);
        this.app.use('/User', userRoutes);
        this.app.use('/ProductsStock', productsStockRoutes);
    }
}

export default new App().app;
