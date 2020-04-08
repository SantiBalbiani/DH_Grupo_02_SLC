module.exports = (sequelize, DataTypes) => {
    let alias = 'trxitems';
    let columns = {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
        idTrx: DataTypes.INTEGER,
        idProd: DataTypes.INTEGER,
        cant: DataTypes.INTEGER,
    };
    /*let config = {
		tableName: 'products',
		timestamps: false, // createdAt - updatedAt
	};*/
    
    const atrxItem = sequelize.define(alias, columns,  {
      timestamps: false
  });

    
    atrxItem.associate = function(models) {
        // associations can be defined here
    
           // belongsTo 
           atrxItem.belongsTo(models.trx, {
                as: 'trx',
                foreignKey: 'idTrx'
            });
            
            // belongsTo 
            atrxItem.belongsTo(models.products, {
            as: 'products',
            foreignKey: 'idProd'
        });
      };
      return atrxItem;
    };