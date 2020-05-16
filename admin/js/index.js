$(function () {
    //登录后，进入首页，立即向服务器发送请求
    $.ajax({
        type: 'get',
        url: 'http://localhost:8080/api/v1/admin/user/info',
        //只有登录过的用户才可以进入到首页，所以需要在登陆页面后，服务器返回给客户端一个token，当用户想进入首页，需要拿着token，服务器才知道是刚刚登录的用户
        headers: {
            'Authorization': localStorage.getItem('token')
        },
        success: function (res) {
            console.log(res)
            if (res.code == 200) {
                $('.user_info i').text(res.data.nickname)
                $('.user_info img').attr('src', res.data.userPic)
                //个人中心的图像也要换
                $('.user_center_link img').attr('src', res.data.userPic)
            }
        }
    })
})

