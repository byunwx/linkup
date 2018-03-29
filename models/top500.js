module.exports = (sequelize, DataTypes) => {
    const Top500 = sequelize.define("Top500", {
        url: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Top500;
}