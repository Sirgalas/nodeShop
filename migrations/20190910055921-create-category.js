'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('category', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      parent_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'category',
            key:'id'
          },
          onDelete: 'No action',
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
    }).then(()=>queryInterface.addIndex('category',['parent_id']));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('category');
  }
};