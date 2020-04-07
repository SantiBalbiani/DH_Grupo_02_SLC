
module.exports = (sequelize, DataTypes) => {
    let alias = 'products';
    let columns = {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
        prodName: DataTypes.STRING,
        model: DataTypes.STRING,
        voltage: DataTypes.STRING,
        price: DataTypes.INTEGER,
        description: DataTypes.STRING,
		imageName: DataTypes.STRING,
		idCategory: DataTypes.INTEGER,
		idSeller: DataTypes.INTEGER,
		state: DataTypes.INTEGER,
    };
    /*let config = {
		tableName: 'products',
		timestamps: false, // createdAt - updatedAt
	};*/
    
    const product = sequelize.define(alias, columns);

  

  product.associate = function(models) {
    // associations can be defined here
	
   		// belongsTo 
		product.belongsTo(models.categories, {
			as: 'categories',
			foreignKey: 'idCategory'
		});

		// belongsTo 
		product.belongsTo(models.masterusers, {
			as: 'masterusers',
			foreignKey: 'idSeller'
		});

  };
  return product;
};