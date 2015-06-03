from gopigo import *
import time
enable_servo()
def turnleft():
  enc_tgt(0, 1, 14 steps)
  time.sleep(.1)
  left()
  time.sleep(.1)
def turnright():
  enc_tgt(1, 0, 14 steps)
  time.sleep(.1)
  right()
  time.sleep(.1)
while us_dist(15) > 100:
  fwd()
servo(0)
if us_dist(15) > 100:
  turnleft()
  fwd()
 
else:
  servo(180)
  turnright()
  fwd()
  
  
