# open file, default is read mode, since txt content no chinese char
# no encoding = "UTF-8" is needed
with open("stage3_2b.txt") as fh:
    # readlines will read into the whole line and put into list format
    # has \n at the end of each line
    data = fh.readlines()
#print(len(data))
for i in range(len(data)):
    group = data[i].rstrip("\n").split("\t")

    print(group)

for s in range(len(data)):
    group = data[s].rstrip("\n").split("\t")
    teamurl = "https://github.com/"
    
    print(teamurl)
# the following will use group data to generate needed html