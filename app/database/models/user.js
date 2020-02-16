module.exports = (sequelize, DataTypes) => {
  let alias = 'users';
    let columns = {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    state: DataTypes.STRING,
};
/*let config = {
tableName: 'products',
timestamps: false, // createdAt - updatedAt
};*/
  const user = sequelize.define(alias, columns);

  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};

