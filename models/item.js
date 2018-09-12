module.exports = function(sequelize, DataType){
    const Item  = sequelize.define('item',  {
        id: {
            autoIncrement: true, 
            primaryKey: true,
            type: DataType.INTEGER
        },        
        title: {
            type: DataType.STRING
        },
        value: {
            type: DataType.FLOAT(11)
        },
        imagePath: {
            type: DataType.STRING
        }
    });
    return Item;
}