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
