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
    
    const categories = sequelize.define(alias, columns);

  

  categories.associate = function(models) {
    // associations can be defined here
  };
  return categories;
};