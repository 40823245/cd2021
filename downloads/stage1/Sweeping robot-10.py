import sim as vrep
import sys
# child threaded script: 
#simExtRemoteApiStart(19999)
 
vrep.simxFinish(-1)
 
clientID = vrep.simxStart('192.168.192.111', 19999, True, True, 5000, 5)
 
if clientID!= -1:
    print("Connected to remote server")
else:
    print('Connection not successful')
    sys.exit('Could not connect')
    
    res = vrep.simxAddStatusbarMessage(
        clientID, "text",
        vrep.simx_opmode_oneshot)
    if res not in (vrep.simx_return_ok, vrep.simx_return_novalue_flag):
        print("Could not add a message to the status bar.")
 
errorCode,left_motor_handle=vrep.simxGetObjectHandle(clientID,'LBMotor',vrep.simx_opmode_oneshot_wait)
 
errorCode,right_motor_handle=vrep.simxGetObjectHandle(clientID,'RBMotor',vrep.simx_opmode_oneshot_wait)
 
if errorCode == -1:
    print('Can not find left or right motor')
    sys.exit()
 
errorCode=vrep.simxSetJointTargetVelocity(clientID,left_motor_handle,0, vrep.simx_opmode_oneshot_wait)
errorCode=vrep.simxSetJointTargetVelocity(clientID,right_motor_handle,2, vrep.simx_opmode_oneshot_wait)
