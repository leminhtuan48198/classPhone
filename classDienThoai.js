class Phone{
    pin;
    tinNhanDangSoan;
    hopThuDen;
    tinNhanDaGui;
    isOn;

    constructor(pin, tinNhanDangSoan, hopThuDen, tinNhanDaGui, isOn) {
        this.pin = pin;
        this.tinNhanDangSoan = tinNhanDangSoan;
        this.hopThuDen = hopThuDen;
        this.tinNhanDaGui = tinNhanDaGui;
        this.isOn = isOn;
    }
    checkIsOn(){
        if(this.isOn==true){
            return this.isOn;
            this.pin--;
            if(this.pin<=0){
                this.isOn=false}
        }
    }
    batDienThoai(){
        this.isOn=true;
        if(this.pin<=0){
            this.isOn=false}
    }
    tatDienThoai(){
        this.isOn=false;
    }
    sacPin(){
        this.pin=100;
    }
    soanTinNhan(tinNhan){
        if(this.isOn==true){
            this.tinNhanDangSoan=tinNhan;this.pin--;
            if(this.pin<=0){
                this.isOn=false}
        }
    }
    guiTinNhan(otherPhone){
        if(this.isOn==true){
            this.tinNhanDaGui.push(this.tinNhanDangSoan);
            otherPhone.hopThuDen.push(this.tinNhanDangSoan);
            this.tinNhanDangSoan="";this.pin--;if(this.pin<=0){
                this.isOn=false
            }
            otherPhone.pin--;
            if(otherPhone.pin<=0){
                otherPhone.isOn=false};
        }
    }
    xemHopThuDen(){
        if(this.isOn==true){
            document.write(this.hopThuDen);
            this.pin--;
            if(this.pin<=0){
                this.isOn=false
            }
        }
    }
    xemTinDaGui(){
        if(this.isOn==true){
            document.write((this.tinNhanDaGui));
            this.pin--;
            if(this.pin<=0){
                this.isOn=false
            }
        }
    }
}
let nokia=new Phone(100,"",[],[],true);
let iphone=new Phone(100,"",[],[],true);
function nokiagui(){
    let t=document.getElementById("nokiagui").value;
    nokia.soanTinNhan(t);
    nokia.guiTinNhan(iphone);
    document.getElementById("pinNokia").innerHTML="Pin" +nokia.pin;
    document.getElementById("pinIphone").innerHTML="Pin" +iphone.pin;
    document.getElementById("nokiagui").value=""
    document.getElementById("hopThuDenIphone").innerHTML=iphone.hopThuDen.join("<br>")
}
function iphonegui(){
    let t=document.getElementById("iphonegui").value;
    iphone.soanTinNhan(t);
    iphone.guiTinNhan(nokia);
    document.getElementById("pinIphone").innerHTML="Pin" +iphone.pin;
    document.getElementById("pinNokia").innerHTML="Pin" +nokia.pin;
    document.getElementById("iphonegui").value="";
    document.getElementById("hopThuDenNokia").innerHTML=nokia.hopThuDen.join("<br>");
}
function sacPinNokia(){
    nokia.sacPin()
    document.getElementById("pinNokia").innerHTML="Pin 100"
}
function sacPinIphone(){
    iphone.sacPin()
    document.getElementById("pinIphone").innerHTML="Pin 100"
}