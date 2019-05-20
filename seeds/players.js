
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Players').del()
    .then(function () {
      // Inserts seed entries
      return knex('Players').insert([
        {id: 100, firstName: 'Aaron', surName: 'Macdonald', knickName: 'Azza', favHand:'6 7 suited',favHeadsUp: 'Wiremu', leastFavHeadsUp: 'Lucky Troy', image:'/src/public/images/aaron_001.jpg' },
        {id: 101, firstName: 'Bayley', surName: 'Legget', knickName: 'Bayles', favHand:'AA',favHeadsUp: 'Ashley', leastFavHeadsUp: 'Nick', image:'/src/public/images/bayley_001.jpg' },
        {id: 102, firstName: 'Nick', surName: 'Evans', knickName: 'Nig', favHand:'QQ',favHeadsUp: 'Kev', leastFavHeadsUp: 'Andrew', image:'/src/public/images/nick_001.jpg' },
        {id: 103, firstName: 'Troy', surName: 'Howe', knickName: 'Toa', favHand:'',favHeadsUp: '', leastFavHeadsUp: '', image:'/src/public/images/troy_001.jpg' },
        {id: 104, firstName: 'Ashley', surName: 'Smith', knickName: 'Ash', favHand:'',favHeadsUp: '', leastFavHeadsUp: '', image:'/src/public/images/ashley_001.jpg' },
        {id: 105, firstName: 'Chris', surName: 'Smith', knickName: 'Schoolboy', favHand:'',favHeadsUp: '', leastFavHeadsUp: '', image:'/src/public/images/chris_001.jpg' },
        {id: 106, firstName: 'Andrew', surName: 'Evans', knickName: 'Andy', favHand:'',favHeadsUp: '', leastFavHeadsUp: '', image:'/src/public/images/andrew_001.jpg' },
        {id: 107, firstName: 'Wiremu', surName: 'Sharman', knickName: 'Kev Jnr', favHand:'',favHeadsUp: '', leastFavHeadsUp: '', image:'/src/public/images/wiremu_001.jpg' },
        {id: 108, firstName: 'Zak', surName: 'Howe', knickName: 'Zak', favHand:'',favHeadsUp: '', leastFavHeadsUp: '', image:'/src/public/images/zak_001.jpg' },
        {id: 109, firstName: 'Kevin', surName: 'Durr', knickName: 'Kevy', favHand:'',favHeadsUp: '', leastFavHeadsUp: '', image:'/src/public/images/kevin_001.jpg' },
        {id: 110, firstName: 'Felix', surName: 'Sarr', knickName: 'Asian', favHand:'',favHeadsUp: '', leastFavHeadsUp: '', image:'/src/public/images/felix_001.jpg' },
        {id: 111, firstName: 'Michael', surName: 'Stickney', knickName: 'Mickey', favHand:'',favHeadsUp: '', leastFavHeadsUp: '', image:'/src/public/images/michael_001.jpg' },
        {id: 112, firstName: 'Tim', surName: 'Wynne-Jones', knickName: 'Timuk', favHand:'',favHeadsUp: '', leastFavHeadsUp: '', image:'' },
        {id: 113, firstName: 'Ian', surName: 'Zaks Mate', knickName: 'Ianzy', favHand:'',favHeadsUp: '', leastFavHeadsUp: '', image:'' },
        {id: 114, firstName: 'Butch', surName: 'Evans', knickName: 'Butch', favHand:'',favHeadsUp: '', leastFavHeadsUp: '', image:'' },
      ])
    })
}
