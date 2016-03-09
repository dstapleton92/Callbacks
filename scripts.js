function capitalize() {
    davidsLib.uppercaseString('hello', function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log('Eureka!');
            console.log(result);
        }
    });
}