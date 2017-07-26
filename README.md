# BhandaraScooters
Inventory Management System

# Add gitignore for existing project

Commit all pending changes, then run this command:
```
toch .gitignore
```
Open gitignore in your notepad and make changes and then type
```
git add .
```
```
git commit -m "Adding .gitinore to existing app"
```
```
git push origin master
```
Now run this command
```
git rm -r --cached .
```
This removes everything from the index, then just run:
```
git add .
```
Commit it:
```
git commit -m ".gitignore is now working"
```
Cheers!!

var loginUrl = apiEndPointUrl + '/bhandara/db/insert';
        var xhr = new XMLHttpRequest();
		//xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = loginHandler;
        xhr.open('POST', loginUrl);
        xhr.setRequestHeader('Content-type', 'application/json');
       // xhr.send();
		xhr.send(JSON.stringify({items:['ar1','ar2','ar3'],amount:1300.54,custName:'ars'}));