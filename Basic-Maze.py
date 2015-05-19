from gopigo import *
import time
import math
set_speed(100)

enc_tgt(1, 1, 18)
time.sleep(.1)
fwd()
time.sleep(3)

def move_forward(feet):
  mm = feet * 304.8
  steps = mm/11.34
  enc_tgt(1, 1, steps)
  time.sleep(.1)
  fwd()
  time.sleep(3 * feet)

def right():
  enc_tgt(1, 0, steps)
  time.sleep(.1)
  
