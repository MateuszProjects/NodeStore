module.exports = function(sequelize, DataType){
    const Account = sequelize.define('account',  {
        id: {
            autoIncrement: true, 
            primaryKey: true,
            type: DataType.INTEGER
        },
        name: {
            type: DataType.STRING
        }
    });
    return Account;
}