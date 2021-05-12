import sim as vrep
import math
import random
import time
import keyboard

print ('Start')

# Close eventual old connections
vrep.simxFinish(-1)
# Connect to V-REP remote server
clientID = vrep.simxStart('192.168.192.111', 19997, True, True, 5000, 5)
 
if clientID !=-1:
    print ('Connected to remote API server')
  
    res = vrep.simxAddStatusbarMessage(
        clientID, "40823245",
        vrep.simx_opmode_oneshot)
         
    if res not in (vrep.simx_return_ok, vrep.simx_return_novalue_flag):
        print("Could not add a message to the status bar.")
         
    opmode = vrep.simx_opmode_oneshot_wait
    
    vrep.simxStartSimulation(clientID, opmode)
    ret,front_handle=vrep.simxGetObjectHandle(clientID,"FrontMotor",opmode)
    ret,left_handle=vrep.simxGetObjectHandle(clientID,"LBMotor",opmode)
    ret,right_handle=vrep.simxGetObjectHandle(clientID,"RBMotor",opmode)
    ret,lfan_handle=vrep.simxGetObjectHandle(clientID,"LMotor",opmode)
    ret,rfan_handle=vrep.simxGetObjectHandle(clientID,"RMotor",opmode)
    while True:
        if keyboard.is_pressed("w"):
            vrep.simxSetJointTargetVelocity(clientID,front_handle,10,opmode)
            vrep.simxSetJointTargetVelocity(clientID,left_handle,10,opmode)
            vrep.simxSetJointTargetVelocity(clientID,right_handle,10,opmode)
            print("go")
           
        if keyboard.is_pressed("s"):
            vrep.simxSetJointTargetVelocity(clientID,front_handle,-10,opmode)
            vrep.simxSetJointTargetVelocity(clientID,left_handle,-10,opmode)
            vrep.simxSetJointTargetVelocity(clientID,right_handle,-10,opmode)
            print("back")
           
        if keyboard.is_pressed("a"):
            vrep.simxSetJointTargetVelocity(clientID,front_handle,0.05,opmode)
            vrep.simxSetJointTargetVelocity(clientID,left_handle,0,opmode)
            vrep.simxSetJointTargetVelocity(clientID,right_handle,10,opmode)
            print("left")
           
        if keyboard.is_pressed("d"):
            vrep.simxSetJointTargetVelocity(clientID,front_handle,0.05,opmode)
            vrep.simxSetJointTargetVelocity(clientID,left_handle,10,opmode)
            vrep.simxSetJointTargetVelocity(clientID,right_handle,0,opmode)
            print("right")
           
        if keyboard.is_pressed("w+a"):
            vrep.simxSetJointTargetVelocity(clientID,front_handle,5,opmode)
            vrep.simxSetJointTargetVelocity(clientID,left_handle,0,opmode)
            vrep.simxSetJointTargetVelocity(clientID,right_handle,10,opmode)
            print("turn left")
            
        if keyboard.is_pressed("w+d"):
            vrep.simxSetJointTargetVelocity(clientID,front_handle,5,opmode)
            vrep.simxSetJointTargetVelocity(clientID,left_handle,10,opmode)
            vrep.simxSetJointTargetVelocity(clientID,right_handle,0,opmode)    
            print("turn right")
            
            
        if keyboard.is_pressed("space"):
            vrep.simxSetJointTargetVelocity(clientID,front_handle,0,opmode)
            vrep.simxSetJointTargetVelocity(clientID,left_handle,0,opmode)
            vrep.simxSetJointTargetVelocity(clientID,right_handle,0,opmode)
            vrep.simxSetJointTargetVelocity(clientID,lfan_handle,0,opmode)
            vrep.simxSetJointTargetVelocity(clientID,rfan_handle,0,opmode)
            print("stop")
            
        if keyboard.is_pressed("q"):
            vrep.simxSetJointTargetVelocity(clientID,lfan_handle,20,opmode)
            print("turn left fan")
           
        if keyboard.is_pressed("e"):
            vrep.simxSetJointTargetVelocity(clientID,rfan_handle,20,opmode)
            print("turn right fan")
            
else:
    print ('Failed connecting to  remote API server')
    print ('End')