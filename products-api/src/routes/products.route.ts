import {Router} from "express";
import ProductController from "../controllers/product.controller";

const productsRouter = Router()
const productsController = new ProductController()

productsRouter.get('/', productsController.get.bind(productsController))
productsRouter.post('/',productsController.post.bind(productsController))
productsRouter.put('/', productsController.put.bind(productsController))
productsRouter.delete('/', productsController.delete.bind(productsController))


export default productsRouter;
