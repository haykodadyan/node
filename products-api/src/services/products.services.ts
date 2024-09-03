import fs from "fs/promises";
import {Product, Manufacturer} from "../models/product";


export default class ProductsServices {
    private readonly filePath: string = "data/products.json";
    private async readFile(): Promise<Product[]> {
        const { products } = JSON.parse(await fs.readFile(this.filePath, "utf-8"));
        return products
    }

    private async writeFile(data: Product[]) {
        await fs.writeFile(this.filePath, JSON.stringify({ products: data }, null, 2));
    }

    async get() {
        try {
            const products = await this.readFile()
            return products.filter(elem => !elem.deleted)
        }catch (e) {
            let err = e as Error
            throw new Error(err.message)
        }
    }

    async post(data: Omit<Product, 'id' | 'deleted'>) {
        try {
            const productsArray = await this.readFile()
            const newProduct = {id: Math.floor(Math.random() * 10000).toString(), ...data, deleted: false}
            productsArray.push(newProduct)
            await this.writeFile(productsArray)
            return newProduct
        }catch(e) {
            let err = e as Error
            throw new Error(err.message)
        }
    }
    async delete(id: string) {
        try {
            const productsArray = await this.readFile()
            const productIndex = productsArray.findIndex(elem => elem.id === id)
            if(productIndex === -1) {
                throw new Error("Product not found")
            }
            productsArray[productIndex].deleted = true
            await this.writeFile(productsArray)
            return productsArray[productIndex]
        }catch(e) {
            let err = e as Error
            throw new Error(err.message)
        }
    }

    async put(id: string, street: string) {
        try {
            const productsArray = await this.readFile()
            const productIndex = productsArray.findIndex(elem => elem.id === id)
            if(productIndex === -1) {
                throw new Error("Product not found")
            }

            productsArray[productIndex].manufacturer = {address: {street}}

            await this.writeFile(productsArray)
            return productsArray[productIndex]
        }catch(e) {
            let err = e as Error
            throw new Error(err.message)
        }
    }
}