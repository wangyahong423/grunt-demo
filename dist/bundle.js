/* global $: true */
$(function(){
    var $width = $('#width'),
        $heigth = $('#heigth'),
        $btn = $('#calculate'),
        $per = $('#perimeter'),
        $area = $('#area');

    $btn.click(function(){
        var w = Number($width.val());
        var h = Number($heigth.val());
        var rect = rectangle();
        $per.val(rect.perimeter(w,h));
        $area.val(rect.area(w,h));
    });
});

function rectangle() {  
    return{
        'perimeter':function (width,height) {  
            return 2*(width+height);
        },
        'area':function (width,height) {  
            return width*height;
        }
    }
}
