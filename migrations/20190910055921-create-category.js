'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('categories', {
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
      slug: {
        type: Sequelize.STRING
      },
      parent_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'categories',
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
    }).then(()=>queryInterface.addIndex('categories',['parent_id']));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('categories');
  }
};