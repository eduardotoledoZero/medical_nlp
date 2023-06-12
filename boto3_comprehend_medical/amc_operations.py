import boto3
import json
import os
import threading
import sys

def medical_nlp_client():
    cm = boto3.client('comprehendmedical')
    """ :type : pyboto3.s3 """
    return cm

def medical_entities(text):
    return medical_nlp_client().detect_entities_v2(Text=text)


if __name__ == '__main__':
   result=medical_entities('aspirin is required 20 mg po daily for 2 times as tab')
   entities= result["Entities"]
   for entity in entities:
      print("Entity", entity)
