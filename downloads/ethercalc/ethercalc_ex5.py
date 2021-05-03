#!/usr/bin/env python3
import ethercalc
import pprint
import os

proxy = 'http://192.168.0.139:8000'

os.environ['http_proxy'] = proxy 
os.environ['HTTP_PROXY'] = proxy
os.environ['https_proxy'] = proxy
os.environ['HTTPS_PROXY'] = proxy

pp=pprint.PrettyPrinter(indent=4)
e = ethercalc.EtherCalc("http://192.168.0.139:8000")

pp.pprint(e.export("d0ih9bvjczmu"))