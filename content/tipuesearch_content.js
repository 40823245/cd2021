var tipuesearch = {"pages": [{'title': 'About', 'text': '倉儲: https://github.com/40823245/cd2021 \n 二人小組:40823245、40823251 \n', 'tags': '', 'url': 'About.html'}, {'title': 'WORKS', 'text': '', 'tags': '', 'url': 'WORKS.html'}, {'title': '筆記', 'text': '2019~2021所用到的指令、步驟等', 'tags': '', 'url': '筆記.html'}, {'title': '建立網頁', 'text': '打開start_ipv4.bat 確認版本 \n \n \n \n tmp新增git_ref資料夾並在裡面新增git_config.txt git_config.txt內容為git config --global http.proxy http://[2001:288:6004:17::69]:3128 在home_ipv4新增.gitconfig .gitconfig內容為 [http] #proxy = http://[2001:288:6004:17::69]:3128 登入github帳號 新增cd2021 \n \n \n 輸入指令(創資料夾) \n \n 進到cd2021，輸入指令 \n \n 進到cmsimde→up_dir，複製全部(ctrl+A→ctrl+C) \n \n 貼到cd2021，會有重複的檔案選擇第3個 \n \n \n 進到cmsimde \n \n 打pip install flask、pip install flask_cors、pip install lxml、pip install bs4、pip install markdown、pip install pelican、pip install leo指令 載完後輸入python wsgi.py 打開9443，登入(login)輸入密碼(admin) 點config更改title(40823245 cd2021) 自己的學號 做編輯，然後save→generate_pages 進到cd2021 git add . git config user.name "40823245"\xa0 \xa0 \xa0 \xa0 自己的學號 git config user.gmail "40823245@gm.nfu.edu.tw"\xa0 \xa0 \xa0 \xa0 自己的信箱 git commit -m "變更所做的標題" git push(學號和密碼) 到倉儲，點setting \n \n 往下到github pages，更改成main→save \n \n 回到倉儲看是否有出現黃球和綠勾', 'tags': '', 'url': '建立網頁.html'}, {'title': '9443', 'text': '\n 先打指令到cmsimde資料夾 \n 在執行python wsgi.py指令 \n 網址搜尋https://localhost:9443/ \n 或複製黑窗最後一行的網址 \n \n 案login登入→密碼admin', 'tags': '', 'url': '9443.html'}, {'title': '8444', 'text': '先到cd2021資料夾找到http-server.py檔案 \n \n 使用白窗開啟http-server.py \n 點選Tools→go \n', 'tags': '', 'url': '8444.html'}, {'title': 'ssh', 'text': '點選資料夾的Portablegit →bin→sh.exe \n \n 輸入ssh-keygen -t rsa -b 4096 -C "40823245" \n 請自行改成自己的學號 \n 案enter →輸入/y/tmp/id_rsa→案2次enter \n \n 下載putty_home、GitExtensions (請自行更改路徑) \n 將start_ipv4.bat移到白窗\xa0 並新增\xa0 \n set GIT_HOME=%Disk%:\\Portablegit\\bin\\\nset GIT_SSH=%Disk%:\\putty\\plink.exe \n \n 打開.git資料夾，把config移到白窗 \n 如沒有.git資料夾 打開隱藏的項目 \n \n 新增[remote "origin"]裡的url = git@github.com:40823245/cd2021.git \n \n file→save \n 打開putty資料夾的puttygen.exe \n 點load，找到id_rsa \n \n 案是→Save private key→案是→輸入學號(存.ppk檔) \n 打開putty.exe \n \n 若沒有github.com，在Host Name和Save Sessions打 github.com案Save \n \n 設定proxy(使用自家網路、手機網路請選None) \n 看你的網路連到哪一台 就打一樣的proxy \n \n 打開SSH裡面的Auth \n 選擇你所生產的金鑰檔案(.ppk) \n 回到session點選save再open \n \n 在home_ipv4新增.ssh資料夾 \n ProxyCommand y:/putty/plink.exe github.com %h %p\n  \nHost github.com\n    User git\n    Port 22\n    Hostname github.com\n  \n    TCPKeepAlive yes\n    IdentitiesOnly yes \n 將上面的指令複製到白窗並另存config \n 到倉儲網頁新增金鑰(右上Settings) \n \n 點New SSH key \n 到tmp找到id_rsa.pub並用白窗開啟，複製內容到Key \n 並確認學號 \n \n 案Add SSH key', 'tags': '', 'url': 'ssh.html'}, {'title': '上傳', 'text': '方法一 \n 先進到cd2021\xa0 →\xa0cd tmp/cd2021 \n git add . \n git commit -m "此更新的主旨" \n git push \n 輸入帳號(學號) \n 輸入密碼 \n 方法二(啟用ssh) \n 要先改.git裡面的config \n [remote "origin"]把之前的https加上# \n \n 開啟putty(putty.exe)\xa0 \xa0將設定調好 \n 點github.com\xa0 案load \n 設定proxy(使用自家網路、手機網路請選None) \n 看你的網路連到哪一台 就打一樣的proxy \n 打開SSH裡面的Auth \n 選擇你所生產的金鑰檔案(.ppk) \n 回到session點選save再open \n \n 出現上圖就代表成功 \n 一樣先進到cd2021\xa0 →\xa0cd tmp/cd2021 \n git add . \n git commit -m "此更新的主旨" \n git push \n (此方法不需打帳號密碼) \n 方法三(啟用ssh) \n 使用資料夾的GitExtensions \n 點選GitExtensions.exe \n 修改設定 \n \n \n 確認正確以後\xa0 \xa0點OK \n 選擇Create new repository \n \n brown找到cd2021資料夾後點Create \n 點tools→Git GUI \n \n 先點Stage Changed(=git add .) \n', 'tags': '', 'url': '上傳.html'}, {'title': 'Zoomit', 'text': '', 'tags': '', 'url': 'Zoomit.html'}]};