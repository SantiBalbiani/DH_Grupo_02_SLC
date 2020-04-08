module.exports = (sequelize, DataTypes) => {
    let alias = 'cartitem';
    let columns = {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
        idCart: DataTypes.INTEGER,
        idProd: DataTypes.INTEGER,
        cant: DataTypes.INTEGER,
    };
    /*let config = {
		tableName: 'products',
		timestamps: false, // createdAt - updatedAt
	};*/
    
    const acartitem = sequelize.define(alias, columns);

    
    acartitem.associate = function(models) {
        // associations can be defined here
    
           // belongsTo 
           acartitem.belongsTo(models.cart, {
                as: 'cart',
                foreignKey: 'idCart'
            });
            
            // belongsTo 
            acartitem.belongsTo(models.products, {
            as: 'products',
            foreignKey: 'idProd'
        });
      };
      return acartitem;
    };