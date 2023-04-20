const { DataTypes} = require('sequelize')
const db = require('../utils/database')

const Producto = db.define('productos', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  nombre_producto: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [3, 255]
    }
  },
  descripcion_producto: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      len: [3, 255]
    }
  },
  precio_unitario: {
    type: DataTypes.FLOAT,
    unique: true,
    allowNull: false,
  },
  cantidad_disponible: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cantidad_saliente: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cantidad_entrante: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

module.exports = Producto