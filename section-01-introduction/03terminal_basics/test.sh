#Terminal basic commands for bash terminal.

# Bash (Bourne Again Shell): Developed for UNIX/Linux systems, but can be installed on Windows via WSL (Windows Subsystem for Linux) or Cygwin.

#Why use bash:
# Developers often prefer Bash over PowerShell for several reasons.
# Most CI/CD tools (Jenkins, GitHub Actions, GitLab CI) use Bash scripts.
# Cloud platforms (AWS, Google Cloud, Azure) offer Bash-friendly CLI tools.
# Linux-based containerization (Docker) runs Bash natively.
# Bash is open-source and widely supported.
# Bash uses .sh scripts, supports loops, conditions, and integrates well with UNIX utilities.(you can directly run above commands in bash terminal.)

#Creating variables 
# num1=5
# num2=7

#Print some line or expresssions on termin
# echo $((num1+num2))
# echo "end"

#Create a single file or multiple files in terminal
# touch file_name
# touch file1_name file2_name

#Create a single directory or multiple directories in terminal
# mkdir dir_name
# mkdir dir1_name dir2_name

#Copy a file
# cp file_name dir_path
#you can also copy multiple files with same command just give all files names you want to copy.

#Move a file
# mv file_name dir_path
#you can also move multiple files with same command just give all files names you want to move.

#rename a file
#mv command also can rename a file 
# 1. if you want only rename a file not move it
# mv file_name new_name
# 2. if you want rename a file and move it same time
# mv file_name dir_path/new_name 

# Delete a file
# rm file_name
# rm file1_name file2_name file3_name

#Delete a empty diretory
# rmdir dir_name

#Delete a Directory and Its Contents
# rm -r dir_name

#Creating 100 files using loop
# for i in {1..100}; do touch "app$i.js"; done

#Deleting 100 files using loop
# for i in {1..100}; do rm "app$i.js"; done

#Read a file
# cat file_name

#Edit a file
# 1. using nano editor command
# nano file_name

# 2. using vim editor command
# vim file_name