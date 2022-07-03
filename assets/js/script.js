
setInterval(() => {
    var time = moment().format("MMMM Do YYYY, h:mm:ss");
    $("#time").text(time);
},1000)

function handleProjectFormSubmit(event){
    event.preventDefault();
}

