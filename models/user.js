module.exports = function(sequelize, DataType){
    const User = sequelize.define('user',  {
        id: {
            autoIncrement: true, 
            primaryKey: true,
            type: DataType.INTEGER
        },        
        name: {
            type: DataType.STRING
        },
        surname: {
            type: DataType.STRING
        },
        login: {
            type: DataType.STRING
        },
        password: {
            type: DataType.STRING
        }
  });

  User.associate = (models) => {
      User.hasMany(models.account, {
        foreginKey: 'accountId'
      });
      User.hasMany(models.item, {
        foreginKey: 'shopId'
      });
  };

    return User;
};

