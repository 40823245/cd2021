var tipuesearch = {"pages": [{'title': 'About', 'text': '倉儲: https://github.com/40823245/cd2021 \n 二人小組:40823245、40823251 \n 四人小組:40823208、40823245、40823246、40823251 \n 二人小組倉儲: \n https://github.com/40823245/stage1-bg1 \n https://github.com/40823251/stage1-bg1 \n 四人小組倉儲: \n https://github.com/40823245/stage2-bg1 \n https://github.com/40823251/stage2-bg1 \n https://github.com/40823208/stage2-bg1 \n https://github.com/40823246/stage2-bg1 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'WORKS', 'text': '每周作業(個人網站更新、小組活動) \n', 'tags': '', 'url': 'WORKS.html'}, {'title': 'stage1', 'text': '每周分組報告包含HTML、pdf、Youtube影片 \n 1.協同設計專題 \n 2.討論分組有效方案 \n 3.使用協同pelican網誌時會遇到的問題 \n 小組討論 \n 03-01 \n \n 03-08 \n 因需要一直修改問題，所以錄製LINE聊天紀錄 \n \n', 'tags': '', 'url': 'stage1.html'}, {'title': 'W1', 'text': 'Leo \n 使用黑窗啟動Leo，新建.leoID.txt \n \n \n 編輯Blog內容，更改設定和新增Disqus \n \n slug最後面要加-1 \n \n 需登入disqus新建論壇 \n \n \n 改完後save並執行local-blog和github-blog右鍵的Goto Script的程式 \n 結果如下 \n \n \n', 'tags': '', 'url': 'W1.html'}, {'title': 'W2~W3', 'text': '主體:掃地機器人 動機:利用自動化機械結構來滿足靠人力打掃家中的需求，並實現節省時間及勞力的願景。 \n 小組分工程式模擬40823245 \n 3/6模擬測試 \n 第一版 \n 最初的版本，前面無法支撐本體 \n \n 第二版 \n 增加球體支撐，但還是會不穩 \n \n 第三版 \n 前面改為輪子，但會打轉 \n \n 3/7模擬測試 \n 第四版 \n 後輪分開給馬達 \n \n 小組分工零件繪製40823251 \n 3/6初次草稿圖檔 掃地機器人.zip \n 3/7修正圖檔 掃地機器人-2.zip \n', 'tags': '', 'url': 'W2~W3.html'}, {'title': 'W4', 'text': '製作小組reveal和錄製影片 \n 小組reveal連結: https://40823245.github.io/stage1-bg1/reveal/index.html#/ \n 小組影片 \n \n', 'tags': '', 'url': 'W4.html'}, {'title': '分組程式測試(待測試)', 'text': '開啟Redis、nodejs和ethercalc來測試程式 \n \n 第一版本 \n #!/usr/bin/env python3\nimport ethercalc\nimport pprint\nimport os\n\nproxy = \'http://192.168.0.139:8000\'\n\nos.environ[\'http_proxy\'] = proxy \nos.environ[\'HTTP_PROXY\'] = proxy\nos.environ[\'https_proxy\'] = proxy\nos.environ[\'HTTPS_PROXY\'] = proxy\n\npp=pprint.PrettyPrinter(indent=4)\ne = ethercalc.EtherCalc("http://192.168.0.139:8000")\n\npp.pprint(e.export("qv12b4lvl0hr")) \n 結果 \n \n 第二版本 \n #!/usr/bin/env python3\nimport ethercalc\nimport pprint\n  \npp = pprint.PrettyPrinter(indent=4)\ne = ethercalc.EtherCalc("http://192.168.0.139:8000")\noutput = e.export("qv12b4lvl0hr")\nfor i in range(len(output)):\n    #print(output[i])\n    # 設法除掉 None element\n    soutput = set(output[i])\n    print(soutput) \n 結果 \n \n 2b stage1測試名單 \n 結論: 由上圖可知，我們能藉由Redis、Nodejs和ethercalc來跑人工分組的程式，但還是需要改善，可能有人沒有組別要加到別組或學號的跑程式問題。 \n', 'tags': '', 'url': '分組程式測試(待測試).html'}, {'title': '後續', 'text': '討論 該如何對各組簡報的 .mp4 檔案進行排序改名? 採手動? 以程式進行? \n 我使用了2個程式來做，1個是改名另1個是做.xls \n rename是用來改名，但有點小問題是會把改名後的檔案從資料夾移到外面 \n \n videotime用來讀取影片時間和做.xls檔的，但一樣有個問題，它會有紅字顯示錯誤但不影響跑程式(把檔案移回資料夾) \n \n excel打開如下 \n \n 最後上傳到雲端拿程式碼如下 \n \n', 'tags': '', 'url': '後續.html'}, {'title': '新增鏡頭', 'text': '在前面增加鏡頭，可看到前方的地面 \n ttt檔 \n \n 修改解析度 \n ttt檔 \n \n', 'tags': '', 'url': '新增鏡頭.html'}, {'title': 'stage2', 'text': '主題:內燃機 \n 繪圖:40823246 \n 網頁編輯:40823208、40823251 \n 模擬:40823245 \n 0326討論 \n \n solidworks模擬: \n \n Coppeliasim測試後結果: \n 無法讓轉子和外殼做干涉 \n ttt檔 \n \n', 'tags': '', 'url': 'stage2.html'}, {'title': 'W6', 'text': '修改主題:堆高機 \n 繪圖:40823246 \n 網頁編輯:40823208、40823251 \n 模擬:40823245 \n 0408討論 \n \n 0412圖檔(40823246繪製) \n 堆高機stl \n 0413簡化圖檔(40823246繪製) \n 堆高機sldprt \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': 'stage2-bg1的heroku網頁: https://s40823245.herokuapp.com/content/index.html \n 使用heroku，可以看到網址連結是heroku的 \n \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W8', 'text': '主題:堆高機 \n 動機: 可以幫助人將重物搬到定位，希望物品實現量產時能 快速且準確的將產品運送到各個有需求的地方。 \n 我和40823246負責模擬 \n 第一版 \n 前輪的連桿機構無法正常運作 \n \n 第二版 \n 簡化前輪機構 \n \n 第三版 \n 增加攝像頭 \n \n 第四版 \n 增加後方攝像頭 \n \n 第五版 \n 可控制上下左右(wsad)和增加假人，但動起來會頓頓的 \n \n \n 最終版 \n 可控制前後左右(wsad)和 載貨支撐架的上下，並新增齒輪，但還是會頓頓的 \n', 'tags': '', 'url': 'W8.html'}, {'title': '筆記', 'text': '2019~2021所用到的指令、步驟等 \n', 'tags': '', 'url': '筆記.html'}, {'title': '建立網頁', 'text': '載點 \n 打開start_ipv4.bat 確認版本 \n \n \n \n tmp新增git_ref資料夾並在裡面新增git_config.txt git_config.txt內容為git config --global http.proxy http://[2001:288:6004:17::69]:3128 在home_ipv4新增.gitconfig .gitconfig內容為 [http] #proxy = http://[2001:288:6004:17::69]:3128 登入github帳號 新增cd2021 \n \n \n 輸入指令(創資料夾) \n git clone https://github.com/40823245/cd2021.git \n \n 進到cd2021，輸入指令 \n git submodule add https://github.com/mdecourse/cmsimde.git cmsimde \n \n 進到cmsimde→up_dir，複製全部(ctrl+A→ctrl+C) \n \n 貼到cd2021，會有重複的檔案 選擇第3個 \n \n \n 進到cmsimde \n \n 分別輸入pip install flask、pip install flask_cors、pip install lxml、pip install bs4、pip install markdown、pip install pelican、pip install leo指令 載完後輸入python wsgi.py 打開9443，登入(login)輸入密碼(admin) 點config更改title(40823245 cd2021) 自己的學號 做編輯，然後save→generate_pages 進到cd2021 git add . git config user.name "40823245"\xa0 \xa0 \xa0 \xa0 自己的學號 git config user.email "40823245@gm.nfu.edu.tw"\xa0 \xa0 \xa0 \xa0 自己的信箱 git commit -m "變更所做的標題" git push(學號和密碼) 到倉儲，點setting \n \n 往下到github pages，更改成main→save \n \n 回到倉儲看是否有出現黃球和綠勾 \n', 'tags': '', 'url': '建立網頁.html'}, {'title': '9443', 'text': '\n 先打指令到cmsimde資料夾 \n 在執行python wsgi.py指令 \n 網址搜尋https://localhost:9443/ \n 或複製黑窗最後一行的網址 \n \n 案login登入→密碼admin \n', 'tags': '', 'url': '9443.html'}, {'title': '8444', 'text': '先到cd2021資料夾找到http-server.py檔案 \n \n 使用白窗開啟http-server.py \n 點選Tools→go \n \n', 'tags': '', 'url': '8444.html'}, {'title': 'ssh', 'text': '點選資料夾的Portablegit →bin→sh.exe \n \n 輸入ssh-keygen -t rsa -b 4096 -C "40823245" \n 請自行改成自己的學號 \n 案enter →輸入/y/tmp/id_rsa→案2次enter \n \n 下載putty_home、GitExtensions (請自行更改路徑) \n 將start_ipv4.bat移到白窗\xa0 並新增\xa0 \n set GIT_HOME=%Disk%:\\Portablegit\\bin\\\nset GIT_SSH=%Disk%:\\putty\\plink.exe \n \n 打開.git資料夾，把config移到白窗 \n 如沒有.git資料夾 打開隱藏的項目 \n \n 新增[remote "origin"]裡的url = git@github.com:40823245/cd2021.git \n \n file→save \n 打開putty資料夾的puttygen.exe \n 點load，找到id_rsa \n \n 案是→Save private key→案是→輸入學號(存.ppk檔) \n 打開putty.exe \n \n 若沒有github.com，在Host Name和Save Sessions打 github.com案Save \n \n 設定proxy(使用自家網路、手機網路請選None) \n 看你的網路連到哪一台 就打一樣的proxy \n \n 打開SSH裡面的Auth \n 選擇你所生產的金鑰檔案(.ppk) \n 回到session點選save再open \n \n 在home_ipv4新增.ssh資料夾 \n ProxyCommand y:/putty/plink.exe github.com %h %p\n  \nHost github.com\n    User git\n    Port 22\n    Hostname github.com\n  \n    TCPKeepAlive yes\n    IdentitiesOnly yes \n 將上面的指令複製到白窗並另存config \n 到倉儲網頁新增金鑰(右上Settings) \n \n 點New SSH key \n 到tmp找到id_rsa.pub並用白窗開啟，複製內容到Key \n 並確認學號 \n \n 案Add SSH key，完成ssh \n 若要做完馬上使用，要先stop.bat，重新開啟 start_ipv4.bat，因為有編輯過start_ipv4.bat，所以要重開才會讀到更改過的內容 \n', 'tags': '', 'url': 'ssh.html'}, {'title': '上傳', 'text': '方法一 \n 先進到cd2021\xa0 →\xa0cd tmp/cd2021 \n git add . \n git commit -m "此更新的主旨" \n git push \n 輸入帳號(學號) \n 輸入密碼 \n 方法二(啟用ssh) \n 要先改.git裡面的config \n [remote "origin"]把之前的https加上# \n \n 開啟putty(putty.exe)\xa0 \xa0將設定調好 \n 點github.com\xa0 案load \n 設定proxy(使用自家網路、手機網路請選None) \n 看你的網路連到哪一台 就打一樣的proxy \n 打開SSH裡面的Auth \n 選擇你所生產的金鑰檔案(.ppk) \n 回到session點選save再open \n \n 出現上圖就代表成功 \n 一樣先進到cd2021\xa0 →\xa0cd tmp/cd2021 \n git add . \n git commit -m "此更新的主旨" \n git push \n (此方法不需打帳號密碼) \n 方法三(啟用ssh) \n 使用資料夾的GitExtensions \n 點選GitExtensions.exe \n 修改設定 \n \n \n 確認正確以後\xa0 \xa0點OK \n 選擇Create new repository \n \n brown找到cd2021資料夾後點Create \n 點tools→Git GUI \n \n 先點Stage Changed(=git add .) \n \n 案是 \n \n 案Continue \n \n 左下的框會出現資料 \n 然後右下的位置打上這次變更的主旨(= git commit -m "此更新的主旨" )可輸入中文 \n \n 點Commit→Push →Push \n \n 出現上圖代表成功 \n', 'tags': '', 'url': '上傳.html'}, {'title': '更改標題', 'text': '打開資料夾找到init.py \n \n 使用白窗打開 \n \n 找到並修改成site_title = "學號 cd2021" \n file→save就可完成 \n', 'tags': '', 'url': '更改標題.html'}, {'title': 'Zoomit', 'text': '1、Ctrl+1:畫面放大+按下滑鼠進入畫畫模式( ESC能解除 ) \n 2、 Ctrl+2:進入畫畫模式(ESC能解除) \n 3、Ctrl+3:出現倒數的時間，休息時間剩多久(ESC能解除、Ctrl+3重置倒數時間) \n 4、 Ctrl+4:放大鏡(Ctrl+4 能解除) \n 5、畫畫模式:滑鼠直接畫任意線段、TAB+滑鼠滑動=畫圓、Shift+滑鼠滑動=畫直線 \n Ctrl+ 滑鼠滑動=畫矩形、Shift+Ctrl+滑鼠滑動=畫指線、Ctrl+T=打字 \n', 'tags': '', 'url': 'Zoomit.html'}, {'title': '使用cms和acp指令', 'text': '需先改版cmsimde為 最新版 ， 此方法一定要有ssh才可使用 \n 步驟的scad2為上學期的倉儲，作為更新cmsimde的示範， 請依照個人所需使用各自的資料夾 \n 先進到cmsimde裡，輸入git pull \n \n 載完資料後將up_dir裡面的acp.bat、cms.bat、http-server.py、localhost.crt、localhost.key複製到資料夾裡(取代) \n \n \n 接著退到資料夾輸入acp "所做的變更標題" \n \n 結果可在倉儲中看到更新後的cmsimde版本 \n \n 如要使用cms則只需要在資料夾輸入cms指令 \n \n', 'tags': '', 'url': '使用cms和acp指令.html'}, {'title': '合併組員倉儲', 'text': '組長: \n 需要把組員設為協同者，組員須同意申請 \n 組員: \n 創建1個新的空倉儲(因為本人為組長，所以新辦1個github帳號做步驟) \n Repository name輸入名稱，什麼都不要選直接create \n \n 進到tmp執行git clone --recurse-submodules 小組網址(因我tmp有stage1-bg1了，所以直接在data做) \n \n 進到資料夾，執行git remote add 「remote名稱」 個人github倉儲網址.git(剛剛創的空倉儲) \n \n 可看到多了remote(如有做ssh，請自行在remote底下新增，我用新帳號所以沒有使用) \n \n 執行git push 剛剛「remote名稱」 \n \n 成功後到settings設定 \n \n 把branch設為main並save \n \n 回去看是否有綠勾 \n \n 之後組員若要推倉儲，一樣add、commit完後push有git push(推組長)和git push bg1(推自己)2種，都要推 \n \n', 'tags': '', 'url': '合併組員倉儲.html'}, {'title': 'heroku', 'text': 'heroku影片版本(影片中的帳號為另1之帳，小組網站資料夾也為stage1的，請自行更改) \n 影片5分多~9分多為跑程式，可略過 \n \n 登入 heroku ，辦帳號 \n 以s+學號，建立第一個app(https://s學號.herokuapp.com) \n 載 heroku ，放在data裡 \n 修改路徑 \n \n set path_heroku=%Local%\\heroku\\bin;\n\n%path_heroku%; \n 重啟後測試是否能執行 heroku.exe \n 打heroku version \n \n 有上面回應就是可以 \n 進到tmp>stage2-bg1(自己組) \n 打git remote add\xa0heroku\xa0https://git.heroku.com/s40823245.git \n 可以在.git裡面的config看到 \n \n 若資料夾裡不是最新的版本要先git pull \n \n heroku指令 \n 在黑窗打指令登錄heroku \n heroku login -i \n 輸入剛剛創heroku帳號的email \n 輸入heroku的密碼 \n \n 然後打git push heroku \n \n \n 就能在https://s學號.herokuapp.com看到stage2-bg1(自己組)的網站', 'tags': '', 'url': 'heroku.html'}, {'title': '網站影片', 'text': '每週個人所做的結果錄製 \n 個人 \n 第一周 \n \n 第二周 \n \n 第三周 \n \n 第四周上台報告 \n \n', 'tags': '', 'url': '網站影片.html'}, {'title': 'W5', 'text': '\n 第1、2組不知為甚麼跑到最後，但乙班的正常 \n', 'tags': '', 'url': 'W5.html'}]};