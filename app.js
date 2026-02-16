const condition = true; 

const myPromise = new Promise((resolve, reject) => { 
  if (condition) { 
    resolve('Success!'); 
  } else { 
    reject('Failure!'); 
  } 
}); 

myPromise
  .then((result) => console.log("Promise Resolved:", result))
  .catch((error) => console.log("Promise Rejected:", error));