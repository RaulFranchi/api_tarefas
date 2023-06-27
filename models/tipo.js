const { DataTypes, Model } = require('sequelize')
const sequelize = require('../bd')
class Tipo extends Model{}
Tipo.init({
    descriçao: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      
},{
    sequelize,
    modelName:'tipo'
  }
)
sequelize.sync()
 module.exports = Tipo   

