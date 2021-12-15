(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{506:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[t._v("#")]),t._v(" 环境搭建")]),t._v(" "),a("ul",[a("li",[t._v("系统：macOS 11.3.1")]),t._v(" "),a("li",[t._v("芯片：Apple M1「ARM64」")])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"rabbitmq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq"}},[t._v("#")]),t._v(" RabbitMQ")]),t._v(" "),a("ul",[a("li",[t._v("使用homebrew安装")]),t._v(" "),a("li",[a("code",[t._v("brew install rabbitmq")])]),t._v(" "),a("li",[t._v("找到安装目录将其加入环境变量「修改.zshrc文件」")]),t._v(" "),a("li",[a("code",[t._v("nano ~/.zshrc")])])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# RabbitMQ")]),t._v("\nexport PATH"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$PATH:/opt/homebrew/Cellar/rabbitmq/3.8.16/sbin"')]),t._v("\nsource "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bash_profile\n")])])]),a("ul",[a("li",[t._v("重启终端，使配置生效")]),t._v(" "),a("li",[t._v("配置RabbitMQ")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加用户跟密码")]),t._v("\n$ rabbitmqctl add_user "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" test123\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加虚拟主机")]),t._v("\n$ rabbitmqctl add_vhost test_vhost\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 为用户添加标签「给test设置标签test_tag」")]),t._v("\n$ rabbitmqctl set_user_tags "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" test_tag\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置用户权限「这里是表示用户test将拥有所有配置、写入和读取权限」")]),t._v("\n$ rabbitmqctl set_permissions -p test_vhost "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".*"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".*"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".*"')]),t._v("\n")])])]),a("h3",{attrs:{id:"celery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#celery"}},[t._v("#")]),t._v(" Celery")]),t._v(" "),a("ul",[a("li",[t._v("安装 "),a("code",[t._v("pip install celery")])]),t._v(" "),a("li",[t._v("创建一个Demo，项目结构如下图「"),a("code",[t._v("__init__.py")]),t._v("文件也很重要，不可缺」")]),t._v(" "),a("li",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007e6d0Xgy1gr45mb7zllj60n909dgmz02.jpg",alt:"image.png"}})]),t._v(" "),a("li",[t._v("celery.py")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" __future__ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" absolute_import\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" celery "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Celery\n\napp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Celery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test_celery'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nbroker"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'amqp://test:test123@localhost/test_vhost'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nbackend"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rpc://'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\ninclude"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test_celery.tasks'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("run_tasks.py")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tasks "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" add_longtime\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" time\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__main__'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" add_longtime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#此时，任务还未完成，它将返回False")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Task finished? '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ready"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Task result: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 延长到10秒以确保任务已经完成")]),t._v("\n    time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 现在任务完成，ready方法将返回True")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Task finished? '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ready"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Task result: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("ul",[a("li",[t._v("tasks.py")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" __future__ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" absolute_import\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" test_celery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("celery "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" app\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" time\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("task")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_longtime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'long time task begins'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# sleep 5 seconds")]),t._v("\n    time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'long time task finished'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b\n")])])]),a("ul",[a("li",[t._v("命令行运行"),a("code",[t._v("celery -A test_celery worker --loglevel=info")]),t._v("，启动成功则可以看到以下输出")]),t._v(" "),a("li",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007e6d0Xgy1gr45mr6c45j60m00bmabc02.jpg",alt:"image.png"}})]),t._v(" "),a("li",[t._v("项目内执行"),a("code",[t._v("python -m test_celery.run_tasks")])]),t._v(" "),a("li",[t._v("celery接收到消息")]),t._v(" "),a("li",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007e6d0Xgy1gr45o21nmfj60lf0363yw02.jpg",alt:"image.png"}})]),t._v(" "),a("li",[t._v("代码执行结果，先输出false，10秒后获得结果")]),t._v(" "),a("li",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007e6d0Xgy1gr45oqc87jj60bb027a9z02.jpg",alt:"image.png"}})])]),t._v(" "),a("h3",{attrs:{id:"flower-实时监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flower-实时监控"}},[t._v("#")]),t._v(" flower 实时监控")]),t._v(" "),a("ul",[a("li",[t._v("安装 "),a("code",[t._v("pip install flower")])]),t._v(" "),a("li",[t._v("启动 "),a("code",[t._v("celery -A test_celery flower")])]),t._v(" "),a("li",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007e6d0Xgy1gr45zd5inpj61fz0ci3zn02.jpg",alt:"image.png"}})]),t._v(" "),a("li",[t._v("可以看到运行状态")])]),t._v(" "),a("div",{staticClass:"custom-block theorem"},[a("p",{staticClass:"title"},[t._v("参考")]),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/qiulin_wu/article/details/106119757",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python Celery和RabbitMQ实战教程"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);