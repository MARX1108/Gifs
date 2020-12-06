$(document).ready(function () {
    console.log("test");
    var searchbtn = $('#searchbtn');
    var searchq = $('#searchq');
    var query = "";
    searchbtn.click(function () {
        console.log(searchq.val());
        query = searchq.val();
        query = query.split(' ').join('+');

        var apicall = "http://api.giphy.com/v1/gifs/search?q=";
        var res = apicall.concat(query, "&api_key=xVZ2RMp67cD1t8aAn0HLuKMlrJ0DJ4ip&limit=36");
        console.log(res);
        var xhr = $.get(res);

        xhr.done(function (data) {
            const node = document.getElementById("gifresults");
            node.innerHTML = '';
            data = data.data;
            for (var i = 0; i < data.length; i++) {
                // var elem = document.createElement("img");
                // elem.setAttribute("id", i);
                // elem.setAttribute("src", data[i].images.downsized.url);
                // elem.setAttribute("class", "img-fluid w-25");
                // document.getElementById("gifresults").appendChild(elem);
                

                $("<img>")
                    .attr("src", data[i].images.downsized.url)
                    .attr("class", "img-fluid w-25")
                    .click(function(){ 
                        console.log("clicked");
                        var mainImage = $(this).attr("src"); //Find Image Name
                        $("#main_img").attr({ src: mainImage });
                    })
                    .appendTo("#gifresults");
            }
        });
    });

    $("#1").click(function() {
        console.log("1 clicked");
        var mainImage = $(this).attr("src"); //Find Image Name
        $("#main_img").attr({ src: mainImage });
        return false;      
     });

});