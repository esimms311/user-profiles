var profiles = [
  {
    name: 'Preston McNeil',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
    status: 'Everything is BIGGER in Texas'
  },
  {
    name: 'Ryan Rasmussen',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg',
    status: 'RR Rules'
  },
  {
    name: 'Terri Ruff',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!?!?!?'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY!'
  },
];

module.exports = {
  getFriends: function(req, res, next) {
    var userObj = {};
    var friendsList = [];
    userObj.user = req.session.currentUser;
    userObj.user.friends.forEach(function(friend){
      friendsList.push(profiles.filter(function(profile) {
        return (friend == profile.name);
      })[0]);
    });
    userObj.friends = friendsList;
    res.status(200).json(userObj);
 
 }

};


// {
// show: function(req, res, next){
//   var friendArr = req.session.currentUser.friends.map(function(friend){
//     for (var i = 0; i < profiles.length; i++) {
//       if (profiles[i].name === friend) return profiles[i];
//     }
//   })
//   var ans = {
//     currentUser: req.session.currentUser,
//     friends: friendArr
//   }
//   res.json(ans);
// }
// }
