#!/usr/bin/env python3
import ethercalc
import pprint
 
pp = pprint.PrettyPrinter(indent=4)
e = ethercalc.EtherCalc("http://192.168.0.139:8000")
# http://192.168.0.139:8000/qv12b4lvl0hr
print(e)
# 設定 id 為 qv12b4lvl0hr 的 sheet C1 值為 number 2
e.command("qv12b4lvl0hr", ["set C1 value n 2"])
# C2 設為字串 "電腦輔助設計", 但是字串前面必須加一個單引號
e.command("qv12b4lvl0hr", [ethercalc.set("C2", "'電腦輔助設計")])
e.command("qv12b4lvl0hr", [ethercalc.set("C3", 3),
                                           ethercalc.set("C4", 4),
                                           # C5 為 C3+C4
                                           ethercalc.set("C5", "=C3+C4"),
                                          ])
pp.pprint(e.cells("qv12b4lvl0hr"))
pp.pprint(e.cells("qv12b4lvl0hr", "C5"))
pp.pprint(e.export("qv12b4lvl0hr"))