$(function(){
    // Toggle search modal
    
    $('#search_btn').on('click', function(){
        $('#search_modal').addClass('show');
    })
    $('#search_close_btn, #search').on('click', function(){
        $('#search_modal').removeClass('show'); 
    })

})