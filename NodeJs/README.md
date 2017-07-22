# Node JS
While running nodemon it may happen that
some error will occur and process will but
service will remain up for that port.
In order to stop listening on those ports
use bellow commands to kill process using port no.
```
netstat -a -o -p
```
find out PID i.e process id attached to the port and then type following command, 
```
taskkill /F /PID <process id>
```