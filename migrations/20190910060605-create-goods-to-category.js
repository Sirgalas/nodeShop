'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('goods_to_categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      goods_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'goods',
            key:'id'
          },
          onDelete: 'cascade',
          onUpdate: 'restrict',
        },
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'categories',
            key:'id'
          },
          onDelete: 'cascade',
          onUpdate: 'restrict',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(()=>queryInterface.addIndex('goods_to_categories',['goods_id','category_id']));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('goods_to_categories');
  }
};