<!-- 实习期间最常用的 -->
    <!-- 暂存代码 -->

    git stash                           
    git stash pop


    <!-- 切换分支 -->
    git checkout -b <branchName>
    git checkout origin/release-v2.40.1
    

    <!-- 撤销在暂存区的修改 -->
    git checkout -- <fileName>
    <!-- 将文件从commit中撤回 -->
    git rm <fileName>    



    <!-- 回撤到上一个版本 ，commit也被清除了-->
    git reset HEAD^ --hard
    <!-- 从下面看来，当前版本是feat -l 可视区思想二，那么所回推到的就是feat -l 处理图片懒加载相关 -->
<!-- 版本号有 -->
<!-- 

commit 776b95bd4b590dbbca2d269809ddfba9e6b41532 (HEAD -> master, origin/master, ttt)
Author: tangyating <tangyating@dxy.cn>
Date:   Mon Sep 26 17:08:55 2022 +0800

    feat -l 可视区思想二

commit 349e3021bd0655fcff91c1ddf348c343181015be
Author: tangyating <tangyating@dxy.cn>
Date:   Mon Sep 26 16:27:02 2022 +0800

    feat -l 处理图片懒加载相关

commit 7965aebabceaabe3eb6bae7f11ac394f1be1de61
Author: tangyating <tangyating@dxy.cn>
Date:   Mon Sep 26 15:07:37 2022 +0800

    feat -l 处理十六进制颜色

commit fee1719dee77f567f353e0a4bf814904da68d06f
Author: tangyating <tangyating@dxy.cn>
Date:   Sat Sep 24 16:01:30 2022 +0800

    解析URL的params对象
 --> 
    
    
    <!-- 回撤到指定版本 , 之前的提交都还在-->
    git checkout commit id 


    <!-- git rebase 和 git merge 的区别 -->

    1.rebase会把当前的commit放到公共分支的最后面，merge把当前的commit和公共分支合并在一起
    2.用merge解决完冲突后会产生一个commit，而rebase不会



    <!-- git pull 和 git pull --rebase 的区别 -->
    git pull做了两个操作分别是‘获取’和合并。所以加了rebase就是以rebase的方式进行合并分支，默认为merge。