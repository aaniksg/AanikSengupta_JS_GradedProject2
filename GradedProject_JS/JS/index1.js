fetch('JSON/data.json')
    .then(response => response.json())
    .then(data => {
        //dataArr.push(data);
        localStorage.setItem("jsonFile", JSON.stringify(data));
    })
    .catch(function (error) {
        console.log('Error While Loading File.');
        console.log(error);
    });

let files = JSON.parse(localStorage.getItem("jsonFile"));
if (files === null) {
    location.reload();
};