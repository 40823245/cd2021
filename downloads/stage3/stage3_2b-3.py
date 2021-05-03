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
    
output = ""    
seperator = "-"*20 + "<br />"

for i in group[1:]:
    team = i[0]
    leader = i[1]
    m1 = i[3]
    m2 = i[5]
    m3 = i[7]
    try:
        m8 = i[17]
    except:
        m8 = ""
        
    leaderrepo = "<a href='http://github.com/" + leader + "/cd2021'>" + leader + " repo</a>"
    leadersite = "<a href='http://" + leader + ".github.io/cd2021'>" + leader +  " site</a>"
    m1repo = "<a href='http://github.com/" + m1 + "/cd2021'>" + m1 + " repo</a>"
    m1site = "<a href='http://" + m1 + ".github.io/cd2021'>" + m1 +  " site</a>"
    m2repo = "<a href='http://github.com/" + m2 + "/cd2021'>" + m2 + " repo</a>"
    m2site = "<a href='http://" + m2 + ".github.io/cd2021'>" + m2 +  " site</a>"
    m3repo = "<a href='http://github.com/" + m3 + "/cd2021'>" + m3 + " repo</a>"
    m3site = "<a href='http://" + m3 + ".github.io/cd2021'>" + m3 +  " site</a>"

 

    teamrepo = "<a href='http://github.com/" + leader + "/" + team + "'>" + team + " repo</a>"
    teamsite =  "<a href='http://" + m1 + ".github.io/" + team + "'>" + team +  " site</a>"

    output += teamrepo + " | " + teamsite + " | " +leaderrepo + " | " + leadersite + " | " +m1repo + " | " + m1site + " | " +m2repo + " | " + m2site + " | " +m3repo + " | " + m3site 
    
    if m8 != "":
       m8repo = "<a href='http://github.com/" + m8 + "/cd2021'>" + m8 + " repo</a>"
       m8site = "<a href='http://" + m8 + ".github.io/cd2021'>" + m8 +  " site</a>"   
       output += " |  " + m8repo + "| " + m8site + "<br />" + seperator
    else:
        output += "<br />" + seperator


print(output)
# the following will use group data to generate needed html