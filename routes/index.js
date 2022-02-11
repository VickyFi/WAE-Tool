var express = require('express');
var router = express.Router();
const pa11y = require('pa11y');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { results: 0, error: 0 });
});

// async function runPa11y(item) {
//   try {
//       results = await pa11y(item);
//       // console.log(results);
//       // const task = await createNewTask(results); 
//       // queue.push(results);
//       console.log("Page loaded: ",results);
//       // router.get('/', function(req, res, next) {
//       //   res.render('index', { results: results, error: 0 });
//       // });
//       // res.render('index', { results: results, error: 0 });
//       // Do something with the results
//   } catch (error) {
//       // Handle the error
//   }
// }

// router.post('/', function(req, res) {
//   let item = req.body.userSearchInput;
//   let results=0;

//   function validURL(str) {
//     var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
//       '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
//       '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
//       '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
//       '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
//       '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
//     return !!pattern.test(str);
//   }

//   var url = validURL(item);
    
//   // console.log(message);
//   if(url){

//     runPa11y(item);
//     res.render('loading', { results: results, error: 0 });
    
//     // res.render('index', { results: results, error: 0 });
//     // res.render('index', { results: results, error: 0 });
//     // pa11y(item).then((results) => {
//     //   console.log("Page loaded: ",results);
//     //   res.render('index', { results: results, error: 0 });
//     // });
//   }else{
//     console.log("Not valid URL");
//     var error="Please enter a valid URL.";
//     res.render('index', { results: results, error: error });
//   }
  
// });

router.post('/', function(req, res) {
  let item = req.body.userSearchInput;
  let results=0;

  function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }

  var url = validURL(item);
    
  // console.log(message);
  if(url){
    async function runPa11y() {
      try {
          results = await pa11y(item);
          // const task = await createNewTask(results); 
          // queue.push(results);
          // console.log("Page loaded: ",results);
          res.render('index', { results: results, error: 0 });
          // Do something with the results
      } catch (error) {
          // Handle the error
      }
    }

    runPa11y();
    // res.render('index', { results: results, error: 0 });
    // res.render('index', { results: results, error: 0 });
    // pa11y(item).then((results) => {
    //   console.log("Page loaded: ",results);
    //   res.render('index', { results: results, error: 0 });
    // });
  }else{
    console.log("Not valid URL");
    var error="Please enter a valid URL.";
    res.render('index', { results: results, error: error });
  }
  
});

module.exports = router;
