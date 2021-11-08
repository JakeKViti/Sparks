var timer

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

	grid.on("layoutComplete", function() {
		$(".gridItem img").css("visibility", "visible");
	});

	grid.masonry({
		itemSelector: ".gridItem",
		columnWidth: 200,
		gutter: 5,
		isInitLayout: false
	});

    $("[data-fancybox]").fancybox();
})

function increaseLinkClicks(linkID, url){
    $.post("ajax/updateLinkCount.php", {linkID: linkID});
}

function loadImage(src, className){
    var image = $("<img>");
	image.on("load", function() {
		$("." + className + " a").append(image);
		clearTimeout(timer);
		timer = setTimeout(function() {
			$(".imageResults").masonry();
		}, 500);

	});

    image.on("error", function(){
        $("." + className).remove();
    })

    image.attr("src", src)
}