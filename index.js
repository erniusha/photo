$(function(){

    //换图
    var arr=[
        {img:"img/1.jpeg",link:"http//baidu.com"},
        {img:"img/7.jpg",link:"http//baidu.com"},
        {img:"img/9.jpeg",link:"http//baidu.com"},
        {img:"img/10.jpeg",link:"http//baidu.com"},
        {img:"img/11.jpeg",link:"http//baidu.com"},
        {img:"img/12.jpeg",link:"http//baidu.com"},
        {img:"img/13.jpeg",link:"http//baidu.com"},
        {img:"img/14.jpeg",link:"http//baidu.com"}
    ];
    $("input").on('click',function(){
        $('body').css({background:'url(img/99.jpg)'});
        $('.yt img').attr('src',function(i,oldsrc){
            return arr[i].img;
        })
        $('.yt link').attr('link',function(i,oldsrc){
            return arr[i].link;
        })
    })

    //点击出现
    $('.yt li').on('click',function(e){
        e.preventDefault();
        $('.cart').addClass('show');
        var src=$(this).find('img').attr('src');
        $('.rongqi img').attr('src',src);
        $(this).attr('index')
    })

    $('.close').on('click',function(){
        $('.cart').removeClass('show');
    })
    $('.cart').on('mousedown',function(e){
        e.preventDefault();
    })
    $('.cart').attr('index',$(this).index());
    $('.cart').on('click',function(e){
        $('.xianshi').css({opacity:0});
        var index=parseInt($(this).attr('index'));
        var imgs=$('.yt img');
        if(e.clientX>$('.rongqi').outerWidth(true)/2){
            index+=1;
        }else{
            index-=1;
        }
        if(index===imgs.legth){
            $('.xianshi').css({opacity:0.8}).text('最后一张')
        }
        if(index===-1){
            $('.xianshi').css({opacity:0.8}).text('第一张')
        }
        $(this).attr('index',index);
        var src=imgs.eq(index).attr('src');
        $(this).find('img').attr('src',src);
    })
})