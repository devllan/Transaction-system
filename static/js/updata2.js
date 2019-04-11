layui.use('table', function () {
    var table = layui.table;

    //第一个实例
    table.render({
        elem: '#test'
            //   ,height: 312
            ,
        url: './3.json' //数据接口
            ,
        page: true //开启分页
            ,
        cols: [
            [ //表头
                {
                    field: 'id',
                    title: '序号'
                }, {
                    field: 'username',
                    title: '案件号'
                }, {
                    field: 'sex',
                    title: '提交时间'
                }, {
                    field: 'city',
                    title: '状态'
                },{
                    fixed: 'right',
                    width: 80,
                    align: 'center',
                    toolbar: '#barDemo'
                }
            ]
        ]
    });
    //监听工具条
    table.on('tool(test)', function (obj) { //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
        var data = obj.data; //获得当前行数据
        var layEvent = obj.event; //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
        var tr = obj.tr; //获得当前行 tr 的DOM对象

        if (layEvent === 'detail') { //查看
            //do somehing
            console.log(data);
            window.location = './updata3.html';
        } else if (layEvent === 'del') { //删除
            layer.confirm('真的删除行么', function (index) {
                obj.del(); //删除对应行（tr）的DOM结构，并更新缓存
                layer.close(index);
                //向服务端发送删除指令
            });
        } else if (layEvent === 'edit') { //编辑
            //do something

            //同步更新缓存对应的值
            obj.update({
                username: '123',
                title: 'xxx'
            });
        }
    });

});