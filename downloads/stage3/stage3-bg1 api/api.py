# File created by Thibaut Royer, Epitech school
# thibaut1.royer@epitech.eu
# It intends to be an example program for the "Two wheels, one arm" educative project.

import sim as vrep
import math
import random
import time
import keyboard


print ('Start')

# Close eventual old connections
vrep.simxFinish(-1)
# Connect to V-REP remote server
clientID = vrep.simxStart('192.168.1.116', 19997, True, True, 5000, 5)

if clientID != -1:
    print ('Connected to remote API server')
    
    res = vrep.simxAddStatusbarMessage(
        clientID, "40823246",
        vrep.simx_opmode_oneshot)
    if res not in (vrep.simx_return_ok, vrep.simx_return_novalue_flag):
        print("Could not add a message to the status bar.")

    
    opmode = vrep.simx_opmode_oneshot_wait
    angle=math.pi/180
    

    
    vrep.simxStartSimulation(clientID, opmode)
    ret,rightF_handle=vrep.simxGetObjectHandle(clientID,"right_jointF",opmode)
    ret,leftF_handle=vrep.simxGetObjectHandle(clientID,"left_jointF",opmode)
    ret,left_handle=vrep.simxGetObjectHandle(clientID,"left_joint",opmode)
    ret,right_handle=vrep.simxGetObjectHandle(clientID,"right_joint",opmode)
    ret,gear_handle=vrep.simxGetObjectHandle(clientID,"gear_joint",opmode)
    ret,up_handle=vrep.simxGetObjectHandle(clientID,"up_joint",opmode)
    #夾爪
    ret,vertical_handle=vrep.simxGetObjectHandle(clientID,"Prismatic_joint",opmode)#設定軸對應名稱
    ret,cam_handle=vrep.simxGetObjectHandle(clientID,"Revolute_joint",opmode)
    #ret,main = vrep.simxGetObjectHandle(clientID, "main", opmode)
    vrep.simxSetJointTargetPosition(clientID,vertical_handle,0.1,opmode)
    while True:
        #keyboard "w" 
        if keyboard.is_pressed("w"):
            vrep.simxSetJointTargetVelocity(clientID,rightF_handle,-2,opmode)
            vrep.simxSetJointTargetVelocity(clientID,leftF_handle,-2,opmode)
            vrep.simxSetJointTargetVelocity(clientID,left_handle,2,opmode)
            vrep.simxSetJointTargetVelocity(clientID,right_handle,2,opmode)
            
        #keyboard "s" 
        if keyboard.is_pressed("s"):
            vrep.simxSetJointTargetVelocity(clientID,rightF_handle,2,opmode)
            vrep.simxSetJointTargetVelocity(clientID,leftF_handle,2,opmode)
            vrep.simxSetJointTargetVelocity(clientID,left_handle,-2,opmode)
            vrep.simxSetJointTargetVelocity(clientID,right_handle,-2,opmode)
        
        #keyboard "a" 
        if keyboard.is_pressed("a"):
            vrep.simxSetJointTargetVelocity(clientID,rightF_handle,-1,opmode)
            vrep.simxSetJointTargetVelocity(clientID,leftF_handle,1,opmode)
            vrep.simxSetJointTargetVelocity(clientID,left_handle,-1,opmode)
            vrep.simxSetJointTargetVelocity(clientID,right_handle,1,opmode)
        
        #keyboard "d" 
        if keyboard.is_pressed("d"):
            vrep.simxSetJointTargetVelocity(clientID,rightF_handle,1,opmode)
            vrep.simxSetJointTargetVelocity(clientID,leftF_handle,-1,opmode)
            vrep.simxSetJointTargetVelocity(clientID,left_handle,1,opmode)
            vrep.simxSetJointTargetVelocity(clientID,right_handle,-1,opmode)
        
        
        #keyboard "space" 
        if keyboard.is_pressed("space"):
            vrep.simxSetJointTargetVelocity(clientID,rightF_handle,0,opmode)
            vrep.simxSetJointTargetVelocity(clientID,leftF_handle,0,opmode)
            vrep.simxSetJointTargetVelocity(clientID,left_handle,0,opmode)
            vrep.simxSetJointTargetVelocity(clientID,right_handle,0,opmode)
            vrep.simxSetJointTargetVelocity(clientID,up_handle,0,opmode)
        
        #keyboard "8" 
        if keyboard.is_pressed("8"):
            vrep.simxSetJointTargetVelocity(clientID,up_handle,0.2,opmode)
        
        #keyboard "5" 
        if keyboard.is_pressed("5"):
            vrep.simxSetJointTargetVelocity(clientID,up_handle,-0.2,opmode)
            
        #夾爪--------------------------------------------------------------------------------------------   
            
        if keyboard.is_pressed("t"):
            print("You pressed t")
           
            vrep.simxSetJointTargetPosition(clientID,vertical_handle,0.5,opmode)
            time.sleep(0.5)
            vrep.simxSetJointTargetPosition(clientID,cam_handle,angle*90,opmode)
            time.sleep(0.5)
            vrep.simxSetJointTargetPosition(clientID,vertical_handle,0.1,opmode)
            time.sleep(5)
            vrep.simxSetJointTargetPosition(clientID,cam_handle,angle*0,opmode)
            
        #keyboard "esc" 
        if  keyboard.is_pressed("esc"):
            vrep.simxStopSimulation(clientID, opmode)
            break
        
else:
    print ('Failed connecting to remote API server')
    print ('End')