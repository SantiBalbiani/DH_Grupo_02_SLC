module.exports = (sequelize, DataTypes) => {
    let alias = 'trx';
    let columns = {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
        idBuyer: DataTypes.INTEGER,

    };
    /*let config = {
		tableName: 'products',
		timestamps: false, // createdAt - updatedAt
	};*/
    
    const aTrx = sequelize.define(alias, columns);

  

    aTrx.associate = function(models) {
    // associations can be defined here

   	// belongsTo 
       aTrx.belongsTo(models.masterusers, {
			as: 'masterusers',
			foreignKey: 'idBuyer'
        });
  };
  return aTrx;
};