var tipuesearch = {"pages": [{'title': 'About', 'text': '倉儲: https://github.com/40823245/cd2021 \n 二人小組:40823245、40823251 \n 二人小組倉儲: https://github.com/40823245/stage1-bg1', 'tags': '', 'url': 'About.html'}, {'title': 'WORKS', 'text': '每周作業(個人網站更新、小組活動) \n', 'tags': '', 'url': 'WORKS.html'}, {'title': 'stage1', 'text': '每周分組報告包含HTML、pdf、Youtube影片 \n 1.協同設計專題 \n 2.討論分組有效方案 \n 3.使用協同pelican網誌時會遇到的問題 \n 小組討論03-01 \n \n', 'tags': '', 'url': 'stage1.html'}, {'title': 'W1', 'text': 'Leo \n 使用黑窗啟動Leo，新建.leoID.txt \n \n \n 編輯Blog內容，更改設定和新增Disqus \n \n slug最後面要加-1 \n \n 需登入disqus新建論壇 \n \n \n 改完後save並執行local-blog和github-blog右鍵的Goto Script的程式 \n 結果如下 \n \n', 'tags': '', 'url': 'W1.html'}, {'title': 'W2~W3', 'text': '主體:掃地機器人 動機:家裡很髒又懶得打掃 \n 小組分工程式模擬40823245 \n 3/6模擬測試 \n 第一版 \n 最初的版本，前面無法支撐本體 \n \n 第二版 \n 增加球體支撐，但還是會不穩 \n \n 第三版 \n 前面改為輪子，但會打轉 \n \n 3/7模擬測試 \n 第四版 \n 後輪分開給馬達 \n \n 小組分工零件繪製40823251 \n 3/6初次草稿圖檔 掃地機器人.zip \n 3/7修正圖檔 掃地機器人-2.zip \n', 'tags': '', 'url': 'W2~W3.html'}, {'title': '分組程式測試(待更新)', 'text': '第一版本 \n #!/usr/bin/env python3\nimport ethercalc\nimport pprint\nimport os\n\nproxy = \'http://192.168.0.139:8000\'\n\nos.environ[\'http_proxy\'] = proxy \nos.environ[\'HTTP_PROXY\'] = proxy\nos.environ[\'https_proxy\'] = proxy\nos.environ[\'HTTPS_PROXY\'] = proxy\n\npp=pprint.PrettyPrinter(indent=4)\ne = ethercalc.EtherCalc("http://192.168.0.139:8000")\n\npp.pprint(e.export("qv12b4lvl0hr")) \n 結果 \n \n 第二版本 \n #!/usr/bin/env python3\nimport ethercalc\nimport pprint\n  \npp = pprint.PrettyPrinter(indent=4)\ne = ethercalc.EtherCalc("http://192.168.0.139:8000")\noutput = e.export("qv12b4lvl0hr")\nfor i in range(len(output)):\n    #print(output[i])\n    # 設法除掉 None element\n    soutput = set(output[i])\n    print(soutput) \n 結果 \n \n 2b stage1測試名單', 'tags': '', 'url': '分組程式測試(待更新).html'}, {'title': '筆記', 'text': '2019~2021所用到的指令、步驟等 \n', 'tags': '', 'url': '筆記.html'}, {'title': '建立網頁', 'text': '載點 \n 打開start_ipv4.bat 確認版本 \n \n \n \n tmp新增git_ref資料夾並在裡面新增git_config.txt git_config.txt內容為git config --global http.proxy http://[2001:288:6004:17::69]:3128 在home_ipv4新增.gitconfig .gitconfig內容為 [http] #proxy = http://[2001:288:6004:17::69]:3128 登入github帳號 新增cd2021 \n \n \n 輸入指令(創資料夾) \n git clone https://github.com/40823245/cd2021.git \n \n 進到cd2021，輸入指令 \n git submodule add https://github.com/mdecourse/cmsimde.git cmsimde \n \n 進到cmsimde→up_dir，複製全部(ctrl+A→ctrl+C) \n \n 貼到cd2021，會有重複的檔案 選擇第3個 \n \n \n 進到cmsimde \n \n 分別輸入pip install flask、pip install flask_cors、pip install lxml、pip install bs4、pip install markdown、pip install pelican、pip install leo指令 載完後輸入python wsgi.py 打開9443，登入(login)輸入密碼(admin) 點config更改title(40823245 cd2021) 自己的學號 做編輯，然後save→generate_pages 進到cd2021 git add . git config user.name "40823245"\xa0 \xa0 \xa0 \xa0 自己的學號 git config user.email "40823245@gm.nfu.edu.tw"\xa0 \xa0 \xa0 \xa0 自己的信箱 git commit -m "變更所做的標題" git push(學號和密碼) 到倉儲，點setting \n \n 往下到github pages，更改成main→save \n \n 回到倉儲看是否有出現黃球和綠勾 \n', 'tags': '', 'url': '建立網頁.html'}, {'title': '9443', 'text': '\n 先打指令到cmsimde資料夾 \n 在執行python wsgi.py指令 \n 網址搜尋https://localhost:9443/ \n 或複製黑窗最後一行的網址 \n \n 案login登入→密碼admin \n', 'tags': '', 'url': '9443.html'}, {'title': '8444', 'text': '先到cd2021資料夾找到http-server.py檔案 \n \n 使用白窗開啟http-server.py \n 點選Tools→go \n \n', 'tags': '', 'url': '8444.html'}, {'title': 'ssh', 'text': '點選資料夾的Portablegit →bin→sh.exe \n \n 輸入ssh-keygen -t rsa -b 4096 -C "40823245" \n 請自行改成自己的學號 \n 案enter →輸入/y/tmp/id_rsa→案2次enter \n \n 下載putty_home、GitExtensions (請自行更改路徑) \n 將start_ipv4.bat移到白窗\xa0 並新增\xa0 \n set GIT_HOME=%Disk%:\\Portablegit\\bin\\\nset GIT_SSH=%Disk%:\\putty\\plink.exe \n \n 打開.git資料夾，把config移到白窗 \n 如沒有.git資料夾 打開隱藏的項目 \n \n 新增[remote "origin"]裡的url = git@github.com:40823245/cd2021.git \n \n file→save \n 打開putty資料夾的puttygen.exe \n 點load，找到id_rsa \n \n 案是→Save private key→案是→輸入學號(存.ppk檔) \n 打開putty.exe \n \n 若沒有github.com，在Host Name和Save Sessions打 github.com案Save \n \n 設定proxy(使用自家網路、手機網路請選None) \n 看你的網路連到哪一台 就打一樣的proxy \n \n 打開SSH裡面的Auth \n 選擇你所生產的金鑰檔案(.ppk) \n 回到session點選save再open \n \n 在home_ipv4新增.ssh資料夾 \n ProxyCommand y:/putty/plink.exe github.com %h %p\n  \nHost github.com\n    User git\n    Port 22\n    Hostname github.com\n  \n    TCPKeepAlive yes\n    IdentitiesOnly yes \n 將上面的指令複製到白窗並另存config \n 到倉儲網頁新增金鑰(右上Settings) \n \n 點New SSH key \n 到tmp找到id_rsa.pub並用白窗開啟，複製內容到Key \n 並確認學號 \n \n 案Add SSH key \n', 'tags': '', 'url': 'ssh.html'}, {'title': '上傳', 'text': '方法一 \n 先進到cd2021\xa0 →\xa0cd tmp/cd2021 \n git add . \n git commit -m "此更新的主旨" \n git push \n 輸入帳號(學號) \n 輸入密碼 \n 方法二(啟用ssh) \n 要先改.git裡面的config \n [remote "origin"]把之前的https加上# \n \n 開啟putty(putty.exe)\xa0 \xa0將設定調好 \n 點github.com\xa0 案load \n 設定proxy(使用自家網路、手機網路請選None) \n 看你的網路連到哪一台 就打一樣的proxy \n 打開SSH裡面的Auth \n 選擇你所生產的金鑰檔案(.ppk) \n 回到session點選save再open \n \n 出現上圖就代表成功 \n 一樣先進到cd2021\xa0 →\xa0cd tmp/cd2021 \n git add . \n git commit -m "此更新的主旨" \n git push \n (此方法不需打帳號密碼) \n 方法三(啟用ssh) \n 使用資料夾的GitExtensions \n 點選GitExtensions.exe \n 修改設定 \n \n \n 確認正確以後\xa0 \xa0點OK \n 選擇Create new repository \n \n brown找到cd2021資料夾後點Create \n 點tools→Git GUI \n \n 先點Stage Changed(=git add .) \n \n 案是 \n \n 案Continue \n \n 左下的框會出現資料 \n 然後右下的位置打上這次變更的主旨(= git commit -m "此更新的主旨" )可輸入中文 \n \n 點Commit→Push →Push \n \n 出現上圖代表成功 \n', 'tags': '', 'url': '上傳.html'}, {'title': '更改標題', 'text': '打開資料夾找到init.py \n \n 使用白窗打開 \n \n 找到並修改成site_title = "學號 cd2021" \n file→save就可完成 \n', 'tags': '', 'url': '更改標題.html'}, {'title': 'Zoomit', 'text': '1、Ctrl+1:畫面放大+按下滑鼠進入畫畫模式( ESC能解除 ) \n 2、 Ctrl+2:進入畫畫模式(ESC能解除) \n 3、Ctrl+3:出現倒數的時間，休息時間剩多久(ESC能解除、Ctrl+3重置倒數時間) \n 4、 Ctrl+4:放大鏡(Ctrl+4 能解除) \n 5、畫畫模式:滑鼠直接畫任意線段、TAB+滑鼠滑動=畫圓、Shift+滑鼠滑動=畫直線 \n Ctrl+ 滑鼠滑動=畫矩形、Shift+Ctrl+滑鼠滑動=畫指線、Ctrl+T=打字 \n', 'tags': '', 'url': 'Zoomit.html'}, {'title': '網站影片', 'text': '每週個人和小組所做的結果錄製 \n 個人 \n 第一周 \n \n 第二周 \n \n 小組 \n 第一周 \n \n 第二週 \n 因需要一直修改問題，所以錄製LINE聊天紀錄 \n', 'tags': '', 'url': '網站影片.html'}]};