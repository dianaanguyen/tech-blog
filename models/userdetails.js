const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

// create our User model 
class UserDetails extends Model {}

UserDetails.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        playedInst: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        musicType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        zipcode: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }   
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true, 
        underscored: true,
        modelName: 'userdetails'
    }
);

module.exports = UserDetails;