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
                'name': devices.de_name,              
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
                'name': devices.de_name,              
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
                'name': devices.de_name,              
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
                'name': devices.de_name,              
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



# def Updatedevices():
#     response = {}

#     try:

#         pr_uid = request.json.get('pr_uid')

#         update_devices = devices.query.filter_by(pr_uid = pr_uid).first()
        
#         if update_devices:
#             update_devices.name = request.form.get('name', update_devices.name)
#             update_devices.type = request.form.get('type', update_devices.type)
#             update_devices.description = request.form.get('description', update_devices.description)
#             update_devices.price = request.form.get('price', update_devices.price)
#             update_devices.image_file = request.form.get('image_file', upload_file())
#             update_devices.inventory_level = request.form.get('inventory_level', update_devices.inventory_level)
#             update_devices.price_received = request.form.get('price_received', update_devices.price_received)
#             update_devices.color = request.form.get('color', update_devices.color)
#             update_devices.tailleVe = request.form.get('tailleVe', update_devices.tailleVe)
#             update_devices.tailleJe = request.form.get('tailleJe', update_devices.tailleJe)
#             update_devices.taille1 = request.form.get('taille1', update_devices.taille1)
#             update_devices.taille2 = request.form.get('taille2', update_devices.taille2)
#             update_devices.taille3 = request.form.get('taille3', update_devices.taille3)
#             update_devices.taille4 = request.form.get('taille4', update_devices.taille4) 
     
#         db.session.add(update_devices)
#         db.session.commit() 
        
#         response['status'] = 'success'
#         response['message'] = "the devices has been updated!"

#     except Exception as e:
#         response['status'] = 'error'
#         response['error_description'] = str(e)

#     return response


# def Deletedevices():
#     response = {}

#     try:
#         pr_uid = request.json.get('pr_uid')
#         delete_devices = devices.query.filter_by(pr_uid=pr_uid).first()

#         if delete_devices:
#             db.session.delete(delete_devices)
#             db.session.commit()
#             response['status'] = 'success'
#         else:
#             response['status'] = 'error'
#             response['motif'] = 'Product non trouvé'

#     except Exception as e:
#         response['error_description'] = str(e)
#         response['status'] = 'error'

#     return response






# def ReadSingledevices():
#     response = {}

#     try:
#         uid = request.json.get('pr_uid')
#         single_devices = devices.query.filter_by(pr_uid=uid).first()

#         devices_infos = {
#             'pr_uid': single_devices.pr_uid,
#             'name': single_devices.name,  
#             'type': single_devices.type,  
#             'description': single_devices.description,              
#             'price': single_devices.price,              
#             'image_file': str(IMGHOSTNAME) + str(single_devices.image_file),              
#             'inventory_level': single_devices.inventory_level,              
#             'price_received': single_devices.price_received,              
#             'color': single_devices.color,              
#             'tailleVe': single_devices.tailleVe,              
#             'tailleJe': single_devices.tailleJe,              
#             'taille1': single_devices.taille1,              
#             'taille2': single_devices.taille2,              
#             'taille3': single_devices.taille3,              
#             'taille4': single_devices.taille4,          
#         }

#         response['status'] = 'success'
#         response['user'] = devices_infos

#     except Exception as e:
#         response['status'] = 'error'
#         response['error_description'] = str(e)

#     return response 
