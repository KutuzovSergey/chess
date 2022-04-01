function CreateConnection(){
    this.connect = () =>{
        console.log('Connect')
    }
}

function testConnect(){
    console.log('test');
    new CreateConnection().connect();
}

// проверяем является ли модуль подключаемым или запускаемым

if (module.parent) {
    module.exports = CreateConnection;
} else {
    testConnect();
}