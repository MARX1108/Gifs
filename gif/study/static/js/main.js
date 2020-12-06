$(document).ready(function() {
    console.log("test");
    var searchbtn = $('#searchbtn');
    var searchq = $('#searchq');
    var query = "";
    searchbtn.click(function() {
        console.log(searchq.val());
        query = searchq.val();
        query = query.split(' ').join('+');

        var apicall = "http://api.giphy.com/v1/gifs/search?q=";
        var res = apicall.concat(query, "&api_key=xVZ2RMp67cD1t8aAn0HLuKMlrJ0DJ4ip&limit=5");
        console.log(res);
        var xhr = $.get(res);
        
        xhr.done(function(data) { console.log("success got data", data); });
    });

    
});
