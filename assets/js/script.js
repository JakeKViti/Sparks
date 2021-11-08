$(document).ready(function(){
    $(".result").on("click", function(){
        let url = $(this).attr("href");
        let linkID = $(this).attr("data-linkID");

        if(!id){
            alert("DataID is not found!")
        }
        increaseLinkClicks(linkID, url);
        return false
    })
    var grid = $(".imageResults");

	grid.masonry({
		itemSelector: ".gridItem",
		columnWidth: 200,
		gutter: 5,
		isInitLayout: false
	});
})

function increaseLinkClicks(linkID, url){
    $.post("ajax/updateLinkCount.php", {linkID: linkID});
}

function loadImage(src){
    var image = $("<img>");
    image.on("load", function(){
        $("." + className + " a").append(image);
    })

    image.on("error", function(){
        
    })

    image.attr("src", src)
}