import sim as vrep

clientID = vrep.simxStart('192.168.192.111', 19997, True, True, 5000, 5)
 
if clientID != -1:
    print ('Connected to remote API server')
 
    res = vrep.simxAddStatusbarMessage(
        clientID, "text",
        vrep.simx_opmode_oneshot)
    if res not in (vrep.simx_return_ok, vrep.simx_return_novalue_flag):
        print("Could not add a message to the status bar.")
else:
       print ('Failed connecting to remote API server')

class VrepLineFollower:
  def __init__(self):
    vrep.simxFinish(-1) # just in case, close all opened connections
    self.clientID = vrep.simxStart('192.168.192.111', 19997, True, True, 5000, 5)
    vrep.simxStartSimulation(self.clientID, vrep.simx_opmode_oneshot)
    
    self.wheelRadius = 0.027
    self.linearVelocityLeft  = 0.1
    self.linearVelocityRight = 0.1
    
    # vectors [left, right]
    self.direction_v = {
     'up':    [ 0.01,  0.01],
     'down':  [-0.01, -0.01],
     'left':  [-0.01,  0.01],
     'right': [ 0.01, -0.01]
    }

    res, self.leftJointDynamic  = vrep.simxGetObjectHandle(self.clientID, "LBMotor",  vrep.simx_opmode_oneshot_wait)
    res, self.rightJointDynamic = vrep.simxGetObjectHandle(self.clientID, "RBMotor", vrep.simx_opmode_oneshot_wait)

  # direction = 'up' | 'down' | 'left' | 'right'
  def to_direction(self, direction):
        direction_vector = self.direction_v[direction]
        self.linearVelocityLeft  += direction_vector[0]
        self.linearVelocityRight += direction_vector[1]
        self.set_motors()

  # private
  def set_motors(self):
        t_left  = self.linearVelocityLeft  / self.wheelRadius
        t_right = self.linearVelocityRight / self.wheelRadius
        vrep.simxSetJointTargetVelocity(self.clientID, self.leftJointDynamic,  t_left,  vrep.simx_opmode_oneshot_wait)
        vrep.simxSetJointTargetVelocity(self.clientID, self.rightJointDynamic, t_right, vrep.simx_opmode_oneshot_wait)
