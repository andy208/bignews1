$(function () {
    //点击登录按钮，向服务器发送请求，验证用户名和密码是否输入正确
    //直接给表单注册提交事件
    $('.login_form').on('submit', function (e) {
        //阻止submit按钮默认提交行为
        e.preventDefault()
        $.ajax({
            type: 'post',
            url: 'http://localhost:8080/api/v1/admin/user/login',
            data: $('.login_form').serialize(),
            beforeSend: function () {
                var flag = true
                $('.login_form input[name]').each(function (index, ele) {
                    if ($.trim($(ele).val()) == '') {
                        flag = false
                    }
                })
                if (!flag) {
                    $('.modal').modal('show')
                    $('.modal-body p').text('用户名或密码输入不能为空')
                }
            },
            success: function (res) {
                // console.log(res)
                $('.modal').modal('show')
                $('.modal-body p').text(res.msg)
                if (res.code == 200) {
                    $('.modal').on('hidden.bs.modal', function (e) {
                        window.location.href = './index.html'
                    })
                }
            }
        })
    })
})