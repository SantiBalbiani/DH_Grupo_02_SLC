module.exports = (sequelize, DataTypes) => {
    let alias = 'categories';
    let columns = {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
        categoryName: DataTypes.STRING,
       
    };
    /*let config = {
		tableName: 'categories',
		timestamps: false, // createdAt - updatedAt
	};*/
    
    const category = sequelize.define(alias, columns);

  

  category.associate = function(models) {
    // associations can be defined here
    // hasMany
      category.hasMany(models.products, {
        as: 'products',
        foreignKey: 'idCategory'
      })
    

  };
  return category;
};