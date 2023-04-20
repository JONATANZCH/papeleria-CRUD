const Productos = require('../models/products.models')
const uuid = require('uuid')

const findAllProducts = async () => {
  const products = await Productos.findAll()
  return products
}

const findProductById = async (id) => {
  const data = await Productos.findOne({
      where: {
          id: id,
      }
  })
  return data
}

const findProductByName = async (name) => {
  const data = await Productos.findOne({
      where: {
          name : name
      }
  })
  return data
}

const createProduct = async(productObject) => {
  const newProduct = {
    id: uuid.v4(),
    nombre_producto: productObject.nombre_producto,
    descripcion_producto: productObject.descripcion_producto,
    precio_unitario: productObject.precio_unitario,
    cantidad_disponible: productObject.cantidad_disponible,
    categoria: productObject.categoria,
    cantidad_saliente: productObject.cantidad_saliente,
    cantidad_entrante: productObject.cantidad_entrante
  }
  const data = await Productos.create(newProduct)
  return data
}

const updateProduct = async(id, productObject) => {

  const selectedProduct = await Productos.findOne({
      where: {
          id: id
      }
  })
  
  if(!selectedProduct) return null

  const modifiedProduct = await selectedProduct.update(productObject)
  return modifiedProduct
}

const deleteProduct = async(id) => {
  const product = await Productos.destroy({
      where: {
          id: id
      }
  })
  return product // 1 || 0
}

module.exports = {
  findAllProducts,
  findProductById,
  findProductByName,
  createProduct,
  updateProduct,
  deleteProduct
}