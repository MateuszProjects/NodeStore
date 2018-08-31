module.exports = function(sequelize, DataType){
    const User = sequelize.define('user',  {
        id: {
            autoIncrement: true, 
            primaryKey: true,
            type: DataType.INTEGER
        }
  });

  User.associate = (models) => {
      User.hasMany(models.account, {
        foreginKey: 'accountId'
      });
      User.hasMany(models.shopmodel, {
        foreginKey: 'shopId'
      });
  };

    return User;
};

