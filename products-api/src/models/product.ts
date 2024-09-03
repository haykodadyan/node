export interface Stock {
    available: number,
    reserved: number,
    location: string
}

export interface Manufacturer {
    address: {
        street: string
    }
}

export interface Product {
    id: string,
    name: string,
    description: string,
    price: number,
    category: string,
    stock: Stock,
    tags: string[],
    rating: number,
    manufacturer?: Manufacturer,
    deleted: boolean
}