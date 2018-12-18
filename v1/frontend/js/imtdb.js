var allMovies = '';

function retreiveAllMovies () {
    $.ajax({
        type: "GET",
        url: "http://0.0.0.0:8080/v1/proxy/movies/",
        success: function(data){
            console.log(data);
        }
    });
}

// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    retreiveAllMovies ();
});
