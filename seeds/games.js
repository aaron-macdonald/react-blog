
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Games').del()
    .then(function () {
      // Inserts seed entries
      return knex('Games').insert([
        {id: 1, date: '7/2/2017', location: 'Ziggys'},
        {id: 2, date: '7/7/2017', location: 'Ziggys'},
        {id: 3, date: '7/14/2017', location: 'Ziggys'},
        {id: 4, date: '7/21/2017', location: 'Ziggys'},
        {id: 5, date: '7/28/2017', location: 'Ziggys'},
        {id: 6, date: '8/4/2017', location: 'Ziggys'},
        {id: 7, date: '8/11/2017', location: 'Ziggys'},
        {id: 8, date: '8/18/2017', location: 'Ziggys'},
        {id: 9, date: '8/25/2017', location: 'Ziggys'},
        {id: 10, date: '9/1/2017', location: 'Ziggys'},
        {id: 11, date: '9/8/2017', location: 'Ziggys'},
        {id: 12, date: '9/15/2017', location: 'Ziggys'},
        {id: 13, date: '9/22/2017', location: 'Ziggys'},
        {id: 14, date: '9/24/2017', location: 'Ziggys'},
        {id: 15, date: '10/6/2017', location: 'Redwood'},
        {id: 16, date: '10/13/2017', location: 'Redwood'},
        {id: 17, date: '10/20/2017', location: 'Ziggys'},
        ])
    })
}
