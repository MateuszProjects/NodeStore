module.exports = function(sequelize, DataTypes){
    const Shopmodel  = sequelize.define('shopmodel',  {
        id: {
            autoIncrement: true, 
            primaryKey: true,
            type: DataTypes.INTEGER
        },        
        name: {
            type: DataTypes.STRING
        }
    });
    return Shopmodel;
}