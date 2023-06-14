const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name:  String,
  full_name: String,
  created_at: Date,
  updated_at: Date,
  pushed_at: Date
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'database connection error'));
db.once('open', () => {
  console.log('database connection successful');
  // let Repo = mongoose.model('Repo', repoSchema);
  // let repoRecord = new Repo();
  // console.log(Repo);
  // console.log(repoRecord);
});

let save = (repos) => {
    // TODO: Your code here
    // This function should save a repo or repos to
    // the MongoDB
    let repoData = {id: repos[0].id,
      name: repos[0].name,
      full_name: repos[0].full_name,
      created_at: repos[0].created_at,
      updated_at: repos[0].updated_at,
      pushed_at: repos[0].pushed_at
    };
    let Repo = mongoose.model('Repo', repoSchema);
    console.log('after creation: ', typeof(Repo));
    let repoRecord = new Repo(repoData);
    repoRecord.save( (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`${res} successfully added to the databse`);
      }
    })
    // repos.forEach((element, key) => {
    //   const currentRepo = new Repo({element})
    //   console.log('currentRep: ', currentRepo)
    //   Repo.save( (err, currentRepo) => {
    //     if (err) return console.error(err);
    //     console.log(`${currentRepo} successfully added to the databse`);
    //   })
    // });
}

let retrieve = () => {
  Repo.find({}, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log('returning requested records: ')
      return res;
    }
  })
}






module.exports.save = save;
module.exports.retrieve = retrieve;