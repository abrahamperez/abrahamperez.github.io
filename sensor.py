from gopigo import *
if us_dist(15) > 200:
  fwd()
elif us_dist(15) < 50:
  right()
  increase_speed()
else us_dist(15) < 200:
  right()
