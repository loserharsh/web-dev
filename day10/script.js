function getdata(data){
    return new Promise((resolve, reject) => {
        let internet = Math.floor(Math.random() * 10);
        console.log("Internet speed is: " + internet);
        if (internet > 5) {
            resolve(data);
        } else {
            reject("No Internet this is the error message");
        }
    });
}

getdata("First data saved")
    .then((data) => {
        console.log(data);
        return getdata("Second data saved");
    })
    .then((data) => {
        console.log(data);
        return getdata("Third data saved");
    })
    .then((data) => {
        console.log(data);
        return getdata("Fourth data saved");
    })
    .catch((error) => {
        console.log(error);
    });