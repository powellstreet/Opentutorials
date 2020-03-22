// callback
var pass = function(name) {
    console.log(`pass ${name} the ball!`);
  };
  
  setTimeout(() => {
    console.log("pass Pique the ball");
    setTimeout(() => {
      console.log("pass Busquets the ball");
      setTimeout(() => {
        console.log("pass Jordi the ball");
        setTimeout(() => {
          console.log("pass Griezman the ball");
          setTimeout(() => {
            console.log("pass Messi the ball");
            setTimeout(() => {
              console.log("Messi scores!");
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
  
  // promise
  var passDelay = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };
  
  function passPromise() {
    console.log("pass Pique the ball");
    return passDelay();
  }
  
  passPromise()
    .then(() => {
      console.log("pass Busquets the ball!");
      return passDelay();
    })
    .then(() => {
      console.log("pass Jordi the ball!");
      return passDelay();
    })
    .then(() => {
      console.log("pass Griezman the ball!");
      return passDelay();
    })
    .then(() => {
      console.log("pass Messi the ball");
      return passDelay();
    })
    .then(() => {
      console.log("Messi scores!");
    });
  
  
  // async/await
  var passAwait = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };
  
  var asyncPass = async () => {
    console.log("pass Pique the ball!");
    await passAwait();
    console.log("pass Busquets the ball!");
    await passAwait();
    console.log("pass Jordi the ball!");
    await passAwait();
    console.log("pass Griezman the ball!");
    await passAwait();
    console.log("pass Messi the ball!");
    await passAwait();
    console.log("Messi scores!");
  };
  
  asyncPass();
  