$(function() {

    $(".edit-panel-slide").click(function(e) {
        e.preventDefault();
        $(".md-modal").addClass('md-show');  
        $("body").addClass('freeze');  
    });
    
     $(".edit-panel-close").click(function(e) {
        e.preventDefault();
        $(".md-modal").removeClass('md-show');  
        $("body").removeClass('freeze');  
    });
    
});