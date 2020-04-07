module.exports = (sequelize, DataTypes) => {
    let alias = 'masterusers';
      let columns = {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      gender: DataTypes.STRING,
      typeDocument: DataTypes.STRING,
      document: DataTypes.STRING,
      telephone: DataTypes.INTEGER,
      email: DataTypes.STRING,
      street: DataTypes.STRING,
      city: DataTypes.STRING,
      CP: DataTypes.STRING,
      province: DataTypes.STRING,
      avatarName: DataTypes.STRING,
      state: DataTypes.INTEGER,
      password: DataTypes.STRING,
  
  };
  //let config = {
  //tableName: 'masterusers',
  //timestamps: false, // createdAt - updatedAt
  //};
    const masteruser = sequelize.define(alias, columns);
  
    masteruser.associate = function(models) {
      
      masteruser.hasMany(models.products, {
        as: 'products',
        foreignKey: 'idSeller'
      })

    };

    return masteruser;
  };
  