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
})

function increaseLinkClicks(linkID, url){
    $.post("ajax/updateLinkCount.php", {linkID: linkID});
}