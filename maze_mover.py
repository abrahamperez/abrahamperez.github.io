from gopigo import *
import time
enable_servo()
while us_dist(15)> 200:
  fwd()
for i in range(180):
  
