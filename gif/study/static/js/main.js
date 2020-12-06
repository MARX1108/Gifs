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
            console.log("success got data", data);
            const node = document.getElementById("gifresults");
            node.innerHTML = '';
            data = data.data;
            // console.log("images url", data[i].images.downsized.url);
            for (var i = 0; i < data.length; i++) {
                console.log(data[i].embed_url);
                var elem = document.createElement("img");
                elem.setAttribute("src", data[i].images.downsized.url);
                elem.setAttribute("class", "img-fluid w-25");
                document.getElementById("gifresults").appendChild(elem);
                // document.getElementById("imageid").src="../template/save.png";
            }
        });
    });


});