"use strict";

module.exports = (sequelize, DataTypes) => {
    var Cart = sequelize.define('Cart', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        user: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
            // don't add the timestamp attributes (updatedAt, createdAt)
            timestamps: false,

            // don't use camelcase for automatically added attributes but underscore style
            // so updatedAt will be updated_at
            underscored: true,

            // disable the modification of table names; By default, sequelize will automatically
            // transform all passed model names (first parameter of define) into plural.
            // if you don't want that, set the following
            freezeTableName: true,

            // define the table's name
            tableName: 'cart',

            // Enable optimistic locking.  When enabled, sequelize will add a version count attribute
            // to the model and throw an OptimisticLockingError error when stale instances are saved.
            // Set to true or a string with the attribute name you want to use to enable.
            version: true
        });

    Cart.associate = models => {
        Cart.belongsToMany(models.Product, {
            as: 'Products',
            through: 'cart_product',
            foreignKey :'cart'
        });
    };
    return Cart;
};