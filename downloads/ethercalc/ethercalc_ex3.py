#!/usr/bin/env python3
import ethercalc
import pprint
  
pp = pprint.PrettyPrinter(indent=4)
e = ethercalc.EtherCalc("http://192.168.0.139:8000")
output = e.export("qv12b4lvl0hr")
for i in range(len(output)):
    #print(output[i])
    # 設法除掉 None element
    soutput = set(output[i])
    print(soutput)