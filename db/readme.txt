					Run Databse in Docker
					
Why WSL?
--------
Docker can be run in Hyper-V backend, but instead of this you recommended to use 
the Windows Subsystem for Linux (WSL) 2. WSL starts Docker much quicker than a Hyper-V VM 
and provides dynamic resource allocations that make it able to run in environments with 
lower memory.


1. WSL installation
-------------------
You must be running Windows 10 version 2004 and higher (Build 19041 and higher) 
or Windows 11 to use the commands below. If you are on earlier versions please 
see the manual install page (https://learn.microsoft.com/en-us/windows/wsl/install-manual).
Also you need computer with Hyper-V Virtualization support.

Open PowerShell in administrator mode run command `wsl --instal` and restart 
your computer. 
After reboot linux console open automatically (or you can open it manually from 
the Windows Start Menu) and it may ask you to wait for files to de-compress. 
Then set up a username and password on ubuntu. Use the `wsl -l -v` version command to 
check the running status and second version of the installed Ubuntu. Wsl version can be 
changed with command `wsl --set-version <distribution name> <versionnumber>`.


2. Docker installation
----------------------
Download Docker Desktop from https://www.docker.com/products/docker-desktop/.
Double-click the downloaded `Docker Desktop Installer.exe` file. During the installation
ensure that the `Use WSL 2 instead of Hyper-V option` on the Configuration page is selected.
Anyway this can be changed later in settings. Finish the instalattion procces.


3. Run docker-compose.yml
-------------------------
Ensure that file `init_db.sql` is located in the same directory as the `docker-compose.yml` 
file. This script is required to initialize the database with base tables.
Open PowerShell in administrator mode in docker-compose file directory and use the 
`docker-compose up` command to create and start containers. Check in DockerDesktop that 
the containers are running. One of them is the jira project database, and the other is pgadmin, 
the user interface for postgresql .


4. How to use PgAdmin
---------------------
Open a browser and enter the link `localhost:5050`. You should see pgadmin loggin page.
The email is `email@email.com` and the password is `password` (can be changed in docker-compose 
file). First in pgadim register new server with any name and set the connection configuration 
with the following parameters: Host name/address=`jira_db`, Port=`5432`, Username=`postgres`, 
Password=`postgres`. Enjoy using the database!
