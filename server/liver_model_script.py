# -*- coding: utf-8 -*-
"""
Created on Thu Apr  5 03:53:38 2018
@author: Vasudev
"""

from sklearn.externals import joblib
import numpy as np
import sys

svc_classifier=joblib.load('liver_model_svc.json')
#test_point=sys.argv[1]

test_point= [[35, 0, 1.6, 0.7, 157, 15, 44, 5.2, 2.5, 0.9]]
test_point=np.array(test_point)
result=svc_classifier.predict_proba(test_point)
print(result[0][0])
sys.stdout.flush()