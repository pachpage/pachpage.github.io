### Atomic
```javascript
javascript:window.location='atomic://'+location.href.substring(4);
```
### Bowser
```javascript
javascript:(function(){if(document.location.href.indexOf('http')===0)document.location.href=document.location.href.replace(/^http/,'bowser');})();
```
### Chrome
```javascript
javascript:(function(){if(document.location.href.indexOf('http')===0)document.location.href=document.location.href.replace(/^http/,'googlechrome');})();
```
### Dolphin
```javascript
javascript:if(location.href.substring(4,5)=='s'){location.href='dolphin://'+location.href.substring(5);}else{location.href='dolphin://'+location.href.substring(4);}`
```
### Mercury
```javascript

```
### Opera Mini
```javascript
javascript:window.location='o'+location.href;
```
### Perfect Web Browser
```javascript
javascript:window.location='perfect://'+location.href;
```
### Photon
```javascript
javascript:(function(){if(document.location.href.indexOf('http')===0)document.location.href=document.location.href.replace(/^http/,'photon');})();
```
### Puffin
```javascript
javascript:(function(){if(document.location.href.indexOf('http')===0)document.location.href=document.location.href.replace(/^http/,'puffin');})();
```
