module.exports = (sequelize, DataTypes) => {
    let alias = 'cart';
    let columns = {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
        idUser: DataTypes.INTEGER,

    };
    /*let config = {
		tableName: 'products',
		timestamps: false, // createdAt - updatedAt
	};*/
    
    const aCart = sequelize.define(alias, columns);

  

    aCart.associate = function(models) {
    // associations can be defined here

   	// belongsTo 
       aCart.belongsTo(models.masterusers, {
			as: 'masterusers',
			foreignKey: 'idUser'
        });

        aCart.hasMany(models.cartitem, {
          as: 'cartitem',
          foreignKey: 'idCart'
        })
        
      
  };
  return aCart;
};