module.exports = function(sequelize, DataType){
    const Account = sequelize.define('account',  {
        id: {
            autoIncrement: true, 
            primaryKey: true,
            type: DataType.INTEGER
        },
        prokuct: {
            type: DataType.STRING
        },
        quantity: {
            type: DataType.INTEGER
        },
        price: {
            type: DataType.STRING
        }
    });
    return Account;
}