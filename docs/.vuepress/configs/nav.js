module.exports = [
    {
        text: '开发基础',
        link: '/10.开发基础/10.位运算基础'
    },
    {
        text: 'Java 技术',
        items: [{
            text: 'Java 基础',
            items: [{
                text: '小工具',
                link: '/30.java基础/10.小工具/10.智能日期识别工具类'
            }, {
                text: '并发',
                link: '/30.java基础/20.并发/10.造火箭从synchronized开始'
            }]
        }, {
            text: 'Java 框架',
            items: [{
                text: 'mybatis',
                link: '/40.java框架/10.mybatis/10.Mybatis打印日志的插件'
            }, {
                text: 'netty',
                link: '/40.java框架/20.netty/10.Java网络编程的演进史和epoll'
            }, {
                text: 'spring',
                link: '/40.java框架/30.spring/Spring'
            }],
        }]
    }, {
        text: '云原生',
        items: [
            {text: 'docker', link: '/20.云原生/10.docker/10.docker基本使用'},
            {text: 'k8s', link: '/20.云原生/20.k8s/10.k8s-常用命令'}
        ]
    }, {
        text: 'linux',
        link: '/50.linux/10.Linux简单有趣的命令'
    }, {
        text: '中间件',
        link: '/60.中间件/10.mysql/10.Mysql-next-key-lock加锁规则'
    },
];
