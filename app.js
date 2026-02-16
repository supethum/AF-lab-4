const condition = true;
const myPromise = new Promise((resolve) => {
    setTimeout(() => resolve('Success after 2 seconds!'), 2000);
});

async function myFunction() { 
  try { 
    console.log("Waiting for promise...");
    const result = await myPromise; 
    console.log("Async result:", result); 
  } catch (error) { 
    console.log("Error:", error); 
  } 
} 

myFunction();