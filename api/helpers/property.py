from datetime import timedelta
from flask import request, jsonify
import uuid
from config.db import db        

import bcrypt
from flask_jwt_extended import create_access_token
from model.powercalc import *


def AddDeviceStore():
    reponse = {}

    try:
        de_name = (request.json.get('de_name'))
        de_amperage = (request.json.get('de_amperage'))      
        de_wattage = (request.json.get('de_wattage'))
        de_usage_time = (request.json.get('de_usage_time'))
        de_uid = str(uuid.uuid4())
        
        new_device = Store()
        new_device.de_name = de_name
        new_device.de_amperage = de_amperage
        new_device.de_wattage = de_wattage
        new_device.de_usage_time = de_usage_time
        new_device.de_uid = de_uid
        
        db.session.add(new_device)
        db.session.commit()

        reponse['status'] = 'success'

    except Exception as e:
        reponse['error_description'] = str(e)
        reponse['status'] = 'error'
    # except:
    #     reponse['error'] = 'Incorrect data, recheck it'

    return reponse


def AddDeviceHouse():
    reponse = {}

    try:
        de_name = (request.json.get('de_name'))
        de_amperage = (request.json.get('de_amperage'))      
        de_wattage = (request.json.get('de_wattage'))
        de_usage_time = (request.json.get('de_usage_time'))
        de_uid = str(uuid.uuid4())
        
        new_device = House()
        new_device.de_name = de_name
        new_device.de_amperage = de_amperage
        new_device.de_wattage = de_wattage
        new_device.de_usage_time = de_usage_time
        new_device.de_uid = de_uid
        
        db.session.add(new_device)
        db.session.commit()

        reponse['status'] = 'success'

    except Exception as e:
        reponse['error_description'] = str(e)
        reponse['status'] = 'error'
    # except:
    #     reponse['error'] = 'Incorrect data, recheck it'

    return reponse


def AddDeviceAgency():
    reponse = {}

    try:
        de_name = (request.json.get('de_name'))
        de_amperage = (request.json.get('de_amperage'))      
        de_wattage = (request.json.get('de_wattage'))
        de_usage_time = (request.json.get('de_usage_time'))
        de_uid = str(uuid.uuid4())
        
        new_device = Agency()
        new_device.de_name = de_name
        new_device.de_amperage = de_amperage
        new_device.de_wattage = de_wattage
        new_device.de_usage_time = de_usage_time
        new_device.de_uid = de_uid
        
        db.session.add(new_device)
        db.session.commit()

        reponse['status'] = 'success'

    except Exception as e:
        reponse['error_description'] = str(e)
        reponse['status'] = 'error'
    # except:
    #     reponse['error'] = 'Incorrect data, recheck it'

    return reponse


def AddDeviceCompany():
    reponse = {}

    try:
        de_name = (request.json.get('de_name'))
        de_amperage = (request.json.get('de_amperage'))      
        de_wattage = (request.json.get('de_wattage'))
        de_usage_time = (request.json.get('de_usage_time'))
        de_uid = str(uuid.uuid4())
        
        new_device = Company()
        new_device.de_name = de_name
        new_device.de_amperage = de_amperage
        new_device.de_wattage = de_wattage
        new_device.de_usage_time = de_usage_time
        new_device.de_uid = de_uid
        
        db.session.add(new_device)
        db.session.commit()

        reponse['status'] = 'success'

    except Exception as e:
        reponse['error_description'] = str(e)
        reponse['status'] = 'error'
    # except:
    #     reponse['error'] = 'Incorrect data, recheck it'

    return reponse


def AllStoreDevice():
    response = {}
    
    try:
        all_devices = Store.query.all()

        devices_info = []

        for devices  in all_devices:
            devices_infos = {
                'de_name': devices.de_name,              
                'de_amperage': devices.de_amperage,              
                'de_wattage': devices.de_wattage,              
                'de_usage_time': devices.de_usage_time,              
                'de_uid': devices.de_uid,              
            }
            devices_info.append(devices_infos)

        response['status'] = 'success'
        response ['devices'] = devices_info

    except Exception as e:
        response['status'] = 'error'
        response['error_description'] = str(e)

    return response


def AllHouseDevice():
    response = {}
    
    try:
        all_devices = House.query.all()

        devices_info = []

        for devices  in all_devices:
            devices_infos = {
                'de_name': devices.de_name,              
                'de_amperage': devices.de_amperage,              
                'de_wattage': devices.de_wattage,              
                'de_usage_time': devices.de_usage_time,              
                'de_uid': devices.de_uid,                 
            }
            devices_info.append(devices_infos)

        response['status'] = 'success'
        response ['devices'] = devices_info

    except Exception as e:
        response['status'] = 'error'
        response['error_description'] = str(e)

    return response


def AllAgencyDevice():
    response = {}
    
    try:
        all_devices = Agency.query.all()

        devices_info = []

        for devices  in all_devices:
            devices_infos = {
                'de_name': devices.de_name,              
                'de_amperage': devices.de_amperage,              
                'de_wattage': devices.de_wattage,              
                'de_usage_time': devices.de_usage_time,              
                'de_uid': devices.de_uid,                 
            }
            devices_info.append(devices_infos)

        response['status'] = 'success'
        response ['devices'] = devices_info

    except Exception as e:
        response['status'] = 'error'
        response['error_description'] = str(e)

    return response


def AllCompanyDevice():
    response = {}
    
    try:
        all_devices = Company.query.all()

        devices_info = []

        for devices  in all_devices:
            devices_infos = {
                'de_name': devices.de_name,              
                'de_amperage': devices.de_amperage,              
                'de_wattage': devices.de_wattage,              
                'de_usage_time': devices.de_usage_time,              
                'de_uid': devices.de_uid,                 
            }
            devices_info.append(devices_infos)

        response['status'] = 'success'
        response ['devices'] = devices_info

    except Exception as e:
        response['status'] = 'error'
        response['error_description'] = str(e)

    return response


def generate_invoice():



    return True