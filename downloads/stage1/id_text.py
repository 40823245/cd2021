import sim as vrep

class IdText:

 vrep.simxFinish(-1)

 clientID = vrep.simxStart('192.168.192.111', 19997, True, True, 5000, 5)

 if clientID != -1:
    print ('Connected to remote API server')
 
 res = vrep.simxAddStatusbarMessage(
        clientID, "text",
        vrep.simx_opmode_oneshot)
 if res not in (vrep.simx_return_ok, vrep.simx_return_novalue_flag):
        print("Could not add a message to the status bar.")