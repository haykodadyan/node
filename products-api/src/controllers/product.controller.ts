import ProductsServices from "../services/products.services";
import { Request, Response } from "express";
import {Product} from "../models/product";
export default class ProductController {
    private productsService: ProductsServices;

    constructor() {
        this.productsService = new ProductsServices()
    }

    async get(req:Request, res:Response) {
        try {
            const products = await this.productsService.get()
            res.status(200).json({products})
        }catch (error) {
            const err = error as Error
            res.status(500).json({message: err.message})
        }
    }

    async post(req: Request, res: Response) {
        try {
            const {name,description, price, tags, rating, stock, category}: Omit<Product, 'id' | 'deleted'> = req.body
            if(stock.available <= 0) {
                res.status(400).json({message: "stock.available should be positive integer"})
            }
            if (price <= 0) {
                res.status(400).json({message: "price should be positive number"})
            }
             const createdProduct = await this.productsService.post({name, description, price, tags, rating, stock, category})
            res.status(201).json({message: 'Created', createdProduct})
        }catch (error) {
            const err = error as Error
            res.status(500).json({message: err.message})
        }
    }

    async delete(req: Request, res: Response) {
        const id = req.query.id as string
        if(!id) {
            res.status(400).json({message: "id is required"})
            return
        }
        try {
            const deletedProduct = await this.productsService.delete(id)
            res.status(200).json({message: 'Deleted', deletedProduct})
        }catch (error) {
            const err = error as Error
            res.status(500).json({message: err.message})
        }
    }

    async put(req: Request, res: Response) {
        try {
            const {id, street}: {id: string, street: string} = req.body
            if(!id) {
                res.status(400).json({message: "id is required"})
                return
            }
            if (!street) {
                res.status(400).json({message: "address is required"})
                return
            }
            const updatedProduct = await this.productsService.put(id, street)
            res.status(200).json({message: 'Updated', updatedProduct})
        }catch (error) {
            const err = error as Error
            res.status(500).json({message: err.message})
        }
    }
}