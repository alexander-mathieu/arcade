'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert("Stores", [
        {
          id: 1,
          name: "Costco",
          phoneNumber: 18002224444,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: "Game Stop",
          phoneNumber: 18003332000,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]),
      queryInterface.bulkInsert(
        "Games",
        [
          {
            title: "Fix it Felix Jr.",
            price: 50,
            releaseYear: 1982,
            active: true,
            StoreId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            title: "Ms. Pac Man",
            price: 100,
            releaseYear: 1981,
            active: true,
            StoreId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            title: "Dig Dug",
            price: 75,
            releaseYear: 1982,
            active: false,
            StoreId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            title: "Galaga",
            price: 125,
            releaseYear: 1981,
            active: true,
            StoreId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ],
        {}
      )
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkDelete('Stores', null, {}),
      queryInterface.bulkDelete('Games', null, {})
    ]);
  }
};
