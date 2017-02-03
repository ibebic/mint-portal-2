//import moment from 'moment'
//import naziv from './nesto.js'
const moment = require('moment');
const naziv = require('./nesto.js');

// export default {
//   name: 'app',
//   data () {
//     return {
//       msg: 'Welcome to Your Vue.js App',
//       date: 'Time is ' + moment().format(),
//       name: naziv.ime
//     }
//   }
// }
console.log('This is a test and my name is', naziv.ime, naziv.prezime);

module.exports = {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      date: 'Time is ' + moment().format(),
      name: naziv.ime
    }
  }
}