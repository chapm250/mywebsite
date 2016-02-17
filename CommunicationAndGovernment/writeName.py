import os
data =  os.listdir('/home/felix/Documents/mywebsite/CommunicationAndGovernment')
newdata = data
com = 'CommunicationAndGovernment/'
newerdata = [com + x for x in newdata]
file = open("test.txt", "w")
file.write(str(newerdata))
file.close()
