
function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function(e) {
            // console.log("change")
            $('#img-preview').show();
            $('#img-preview').attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}
$(".banner-image").change(function() {
     
    try{
        (new FileReader).readAsDataURL($('.banner-image').prop('files')[0]);
    }catch(err){
        var no_image_url = "../asset/no-image.jpg"
        $('#img-preview').attr('src', no_image_url);
        $('#img-preview').hide();
    }
    
    readURL(this);
});