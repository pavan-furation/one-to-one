module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('Message', {
        sender: {
            type: DataTypes.STRING,
        },
        receiver: {
            type: DataTypes.STRING,
        },
        message: {
            type: DataTypes.TEXT,
        },
    });
    return Message;
};