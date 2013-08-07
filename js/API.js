function GetTwitterFeedByUser(User, Count) {

    //example: https://api.twitter.com/1/statuses/user_timeline.json?screen_name=mkpenrod05&count=10&callback=?
    var Url = "https://api.twitter.com/1/statuses/user_timeline.json?screen_name=" + User + "&count=" + Count + "&callback=?";

    $.ajax({
        dataType: "jsonp",
        url: Url,
        data: "",
        success: function (data) {
            var Html = "<div style='text-align:center; margin:0px 0px 10px 0px;'>" +
                    "<p><span class='Header'>Just for fun, here is my last 10 tweets</span></p>" +
                    "<div class='Separator'></div>" + 
                "</div>";

            $.each(data, function (value) {
                //alert(data[value].text);

                var TweetReason = "";
                if (data[value].in_reply_to_screen_name == null) {
                    TweetReason = "My Tweet";
                } else {
                    TweetReason = "In reply to: @" + data[value].in_reply_to_screen_name;
                }

                Html = Html +
                "<div id='' class='TweetBlock' style='margin-bottom:10px;'>" +

                    "<div id='' class='' style='margin: 5px 0px 5px 0px;'>" +
                        "<div id='' class='' style='float:left; padding:8px 5px 5px 5px;'>" +
                        "<img src='" + data[value].user.profile_image_url + "' class='TwitterImage' style='' />" +
                        "</div>" +

                        "<div id='' class='' style='padding:5px;'>" +
                        "<span class='TwitterName'>" + data[value].user.name + "</span> " +
                        "<span class='TwitterScreenName'>@" + data[value].user.screen_name + "</span>" +
                        "<br />" +
                        AddTwitterLinks(data[value].text) +
                        //AddWebLinks(data[value].text) +
                        "</div>" +
                    "</div>" +

                    "<div id='' class='TwitterFooter' style=''>" +
                        "<div id='' class='' style='float:left;'>" +
                        AddTwitterLinks(TweetReason) +
                        "</div>" +

                        "<div id='' class='' style='text-align:right;'>" +
                        "<span class=''>" + ModifyDate(data[value].created_at) + "</span>" +
                        "</div>" +
                    "</div>" +

                "</div>";

            });
            $("#Feed").html(Html);
        }
    });
}

function AddTwitterLinks(text) {
    return text.replace(/[\@\#]([a-zA-z0-9_]*)/g,
        function (m, m1) {
            var t = '<a href="http://twitter.com/';
            if (m.charAt(0) == '#')
                t += 'hashtag/';
            return t + encodeURI(m1) + '" target="_blank">' + m + '</a>';
        });
}

function AddWebLinks(text) {
    var Link = text.match(/http:\/\/[a-zA-Z0-9.\/]+/);
    //alert(Link);
    return text.replace(Link, "<a href='http://" + Link + "'>" + Link + "</a>");
}

function ModifyDate(CreatedDate) {
    var Month_Day = /[a-zA-Z\s]{4}\d\d/;
    var Year = /\d\d\d\d$/;

    var NewDate = CreatedDate.match(Month_Day);
    NewDate = NewDate + ", " + CreatedDate.match(Year);
    
    return NewDate;        
}