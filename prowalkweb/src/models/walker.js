module.exports = function (sequelize, DataTypes) {
var Walker = sequelize.define("User", {

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            isEmail: "true",
            },
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Ocuppation: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        State: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        zipcode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pictureProfile: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        latitude: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        longitude: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return Walker;
}