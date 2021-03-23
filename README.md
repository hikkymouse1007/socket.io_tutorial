# socket.io_tutorial
https://socket.io/get-started/chat/
https://socket.io/docs/v4/


Run the command below
```
node index.js
```

and open localhost:3000

参考:
- http://marctech.hatenadiary.com/entry/2018/01/19/191209
- http://marctech.hatenadiary.com/entry/2018/01/26/202937

### 負荷テストについて
Artillery
- https://artillery.io/docs/guides/guides/socketio-reference.html
- https://artillery.io/blog/load-testing-socketio-with-artillery
- https://itnext.io/websocket-load-testing-with-artillery-io-b8b7ecbcd7ed
- https://github.com/hikkymouse1007/socketio-load-test-artillery-example
- https://socket.io/demos/chat/
- https://github.com/hassy/socketio-load-test-artillery-example


Artilleryでテストするには、
socket.ioのバージョンは2系を使うこと。

```
## package.json
"dependencies": {
    "express": "~4.17.1",
    "socket.io": "^2.3.0"
  },
```

socket.ioの3系はartilleryのv3をインストールする必要がある
