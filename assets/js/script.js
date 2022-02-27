jQuery(document).ready(function($) {
    $('.chvh-toggle').click(function(){
        $(document.body).toggleClass('chvh-visible');
    });
    $('.chilla-visual-hook').click(function(e){
        if ( $(document.body).hasClass('chvh-visible') ) {
            e.stopPropagation();
            $(this).addClass('show-name');
            $(this).find('> .chilla-visual-hook-name').addClass('visible');
        }
    });
});
