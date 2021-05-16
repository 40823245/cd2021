def stu2b(account):
    if account == "40823231":
        return account + "-2"
    elif account[0:3] == "407":
        return "s" + account
    else:
        return account

teamb = []

# open file, default is read mode, since txt content no chinese char
# no encoding = "UTF-8" is needed
with open("stage3_2b.txt") as fh:
    # readlines will read into the whole line and put into list format
    # has \n at the end of each line
    data = fh.readlines()
#print(len(data))
for i in range(len(data)):
    group = data[i].rstrip("\n").split("\t")
    teamb.append(group)
    
output = ""    
seperator = "-"*10 + "<br />"

for i in teamb[0:]:
    team = i[0]
    leader = stu2b(i[1])
    m1 = stu2b(i[3])
    m2 = stu2b(i[5])
    m3 = stu2b(i[7])
    m4 = stu2b(i[9])
    m5 = stu2b(i[11])
    m6 = stu2b(i[13])
    
    try:
        m7 = stu2b(i[15])
    except:
        m7 = ""
    try:
        m8 = stu2b(i[17])
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
    m4repo = "<a href='http://github.com/" + m4 + "/cd2021'>" + m4 + " repo</a>"
    m4site = "<a href='http://" + m4 + ".github.io/cd2021'>" + m4 +  " site</a>"
    m5repo = "<a href='http://github.com/" + m5 + "/cd2021'>" + m5 + " repo</a>"
    m5site = "<a href='http://" + m5 + ".github.io/cd2021'>" + m5 +  " site</a>"
    m6repo = "<a href='http://github.com/" + m6 + "/cd2021'>" + m6 + " repo</a>"
    m6site = "<a href='http://" + m6 + ".github.io/cd2021'>" + m6 +  " site</a>"
 

    leaderteamrepo = "<a href='http://github.com/" + leader + "/" + team + "'>" + team + " repo</a>"
    leaderteamsite =  "<a href='http://" + leader + ".github.io/" + team + "'>" + team +  " site</a>"
    m1teamrepo = "<a href='http://github.com/" + m1 + "/" + team + "'>" + team + " repo</a>"
    m1teamsite = "<a href='http://" + m1 + ".github.io/" + team + "'>" + team +  " site</a>"
    m2teamrepo = "<a href='http://github.com/" + m2 + "/" + team + "'>" + team + " repo</a>"
    m2teamsite = "<a href='http://" + m2 + ".github.io/" + team + "'>" + team +  " site</a>"
    m3teamrepo = "<a href='http://github.com/" + m3 + "/" + team + "'>" + team + " repo</a>"
    m3teamsite = "<a href='http://" + m3 + ".github.io/" + team + "'>" + team +  " site</a>"
    m4teamrepo = "<a href='http://github.com/" + m4 + "/" + team + "'>" + team + " repo</a>"
    m4teamsite = "<a href='http://" + m4 + ".github.io/" + team + "'>" + team +  " site</a>"
    m5teamrepo = "<a href='http://github.com/" + m5 + "/" + team + "'>" + team + " repo</a>"
    m5teamsite = "<a href='http://" + m5 + ".github.io/" + team + "'>" + team +  " site</a>"
    m6teamrepo = "<a href='http://github.com/" + m6 + "/" + team + "'>" + team + " repo</a>"
    m6teamsite = "<a href='http://" + m6 + ".github.io/" + team + "'>" + team +  " site</a>"

    output += leaderrepo + " | " + leadersite + " | " +leaderteamrepo + " | " + leaderteamsite + " | " +m1repo + " | " + m1site + " | " +  m1teamrepo + " | " + m1teamsite + " | " +m2repo + " | " + m2site +  " | "  + m2teamrepo + " | " + m2teamsite + " | " +m3repo + " | " + m3site + " | "  + m3teamrepo + " | " + m3teamsite + " | " +m4repo + " | " + m4site + " | "  + m4teamrepo + " | " + m4teamsite + " | " +m5repo + " | " + m5site + " | "  + m5teamrepo + " | " + m5teamsite + " | " +m6repo + " | " + m6site + " | "  + m6teamrepo + " | " + m6teamsite
    
    if m7 != "":
       m7repo = "<a href='http://github.com/" + m7 + "/cd2021'>" + m7 + " repo</a>"
       m7site = "<a href='http://" + m7 + ".github.io/cd2021'>" + m7 +  " site</a>"   
       m7teamrepo = "<a href='http://github.com/" + m7 + "/" + team + "'>" + team + " repo</a>"
       m7teamsite = "<a href='http://" + m7 + ".github.io/" + team + "'>" + team +  " site</a>"
       output += " |  " + m7repo + "| " + m7site +  " | "  + m7teamrepo + " | " + m7teamsite
    else:
        output += "" 
    
    if m8 != "":
       m8repo = "<a href='http://github.com/" + m8 + "/cd2021'>" + m8 + " repo</a>"
       m8site = "<a href='http://" + m8 + ".github.io/cd2021'>" + m8 +  " site</a>"   
       m8teamrepo = "<a href='http://github.com/" + m8 + "/" + team + "'>" + team + " repo</a>"
       m8teamsite = "<a href='http://" + m8 + ".github.io/" + team + "'>" + team +  " site</a>"
       output += " |  " + m8repo + "| " + m8site +  " | "  + m8teamrepo + " | " + m8teamsite + "<br />" + seperator
    else:
        output += "<br />" + seperator


print(output)
# the following will use group data to generate needed html