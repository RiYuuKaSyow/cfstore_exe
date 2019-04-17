const electron = require('electron') ;
const app = electron.app ;
const browser = electron.BrowserWindow ;

let mainwindow ;

function createwindow(){
    mainwindow = new browser({
        resizable:false ,
        title:'無人商店結帳系統' ,
        icon:'logo.png'
    });
    electron.Menu.setApplicationMenu(null) ;
    mainwindow.loadFile('qrweb.html') ;
    //mainwindow.webContents.openDevTools() ;
    mainwindow.setFullScreen(true) ;
    mainwindow.on('closed',function(){
        mainwindow = null ;
    }) ;
}

app.on('ready' , createwindow) ;

app.on('window-all-closed',function(){
    app.quit() ;
});

app.on('active' , function(){
    if( mainwindow == null ){
        createwindow() ;
    }
});