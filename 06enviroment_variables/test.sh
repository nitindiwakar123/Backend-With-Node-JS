# Working with enviroment variables

# 1. View Environment Variables
# echo $env_name
# printenv
# env

# Inheritance of Environment Variables in Processes
# When a process starts, it inherits the environment variables from its parent process.

# 2. Set an Environment Variable(for Process level)
# Temporary (only for the current shell session):
export MY_VAR="HelloWorld"

# Permanent (persists after reboot, add to ~/.bashrc):
# export MY_VAR="HelloWorld"
# source ~/.bashrc

# 3. Set an Enviroment Variable(for User level(also visible in settings))
setx VAR_NAME "Value"

# you can also set and delete system level enviroment variables but at this point you can do that with using powershell(in administrative mode) not bash because bash is not made for windows it is a linux based terminal and windows main terminal is powershell.

#directly set enviroment variables on child process
VAR_NAME="Value" node --inspect app.js

#--inspect is used for debug and see node process enviroment variables

#you can also set multiple variables
VAR1="Val1" VAR2="Val2" node --inspect app.js

#note that if you set env variables like that this variables also alvailable on parent process(bash) but the main advantage of this you are no longer need to define these variables explicitly in parent process(bash) using export keyword.

#we know that if we start a child process it inherit all the enviroment variables of its parents process but we can manipulate this natural behavior of a process in its parent process.

#stop a process to inherit some env varibales
env -u VAR_NAME node --inspect app.js
#multiple
env -u VAR1 -u VAR2 node --inspect app.js