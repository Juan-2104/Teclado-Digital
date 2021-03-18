let cuadro=document.getElementById("cuadro");

//Números

let numUno=document.getElementById("numUno");
let numDos=document.getElementById("numDos");
let numTres=document.getElementById("numTres");
let numCuatro=document.getElementById("numCuatro");
let numCinco=document.getElementById("numCinco");
let numSeis=document.getElementById("numSeis");
let numSiete=document.getElementById("numSiete");
let numOcho=document.getElementById("numOcho");
let numNueve=document.getElementById("numNueve");
let numCero=document.getElementById("numCero");
let borrar=document.getElementById("borrar");

//Linea 1 teclado QWERTYUIOP

let letQ=document.getElementById("letQ");
let letW=document.getElementById("letW");
let letE=document.getElementById("letE");
let letR=document.getElementById("letR");
let letT=document.getElementById("letT");
let letY=document.getElementById("letY");
let letU=document.getElementById("letU");
let letI=document.getElementById("letI");
let letO=document.getElementById("letO");
let letP=document.getElementById("letP");
let enter=document.getElementById("enter");

//Linea 2 teclado ASDFGHJKLÑ

let letA=document.getElementById("letA");
let letS=document.getElementById("letS");
let letD=document.getElementById("letD");
let letF=document.getElementById("letF");
let letG=document.getElementById("letG");
let letH=document.getElementById("letH");
let letJ=document.getElementById("letJ");
let letK=document.getElementById("letK");
let letL=document.getElementById("letL");
let letÑ=document.getElementById("letÑ");

//Linea 3 teclado ZXCVBNM,.-

let letZ=document.getElementById("letZ");
let letX=document.getElementById("letX");
let letC=document.getElementById("letC");
let letV=document.getElementById("letV");
let letB=document.getElementById("letB");
let letN=document.getElementById("letN");
let letM=document.getElementById("letM");
let letCOM=document.getElementById("letCOM");
let letPUN=document.getElementById("letPUN");
let letGUI=document.getElementById("letGUI");

//temp

let tecTemp = "";

//Funciones
//Números
const numUnoF = () =>{
    cuadro.innerHTML = tecTemp+"1"
    tecTemp=tecTemp+"1"
}
const numDosF = () =>{
    cuadro.innerHTML = tecTemp+"2"
    tecTemp=tecTemp+"2"
}
const numTresF = () =>{
    cuadro.innerHTML = tecTemp+"3"
    tecTemp=tecTemp+"3"
}
const numCuatroF = () =>{
    cuadro.innerHTML = tecTemp+"4"
    tecTemp=tecTemp+"4"
}
const numCincoF = () =>{
    cuadro.innerHTML = tecTemp+"5"
    tecTemp=tecTemp+"5"
}
const numSeisF = () =>{
    cuadro.innerHTML = tecTemp+"6"
    tecTemp=tecTemp+"6"
}
const numSieteF = () =>{
    cuadro.innerHTML = tecTemp+"7"
    tecTemp=tecTemp+"7"
}
const numOchoF = () =>{
    cuadro.innerHTML = tecTemp+"8"
    tecTemp=tecTemp+"8"
}
const numNueveF = () =>{
    cuadro.innerHTML = tecTemp+"9"
    tecTemp=tecTemp+"9"
}
const numCeroF = () =>{
    cuadro.innerHTML = tecTemp+"0"
    tecTemp=tecTemp+"0"
}
const borrarF = () =>{
    tecTemp=""
    cuadro.innerHTML = ""
}
//Línea 1 teclado QQWERTYUIOP
const letQF = () =>{
    cuadro.innerHTML = tecTemp+"Q"
    tecTemp=tecTemp+"Q"
}
const letWF = () =>{
    cuadro.innerHTML = tecTemp+"W"
    tecTemp=tecTemp+"W"
}

const letEF = () =>{
    cuadro.innerHTML = tecTemp+"E"
    tecTemp=tecTemp+"E"
}

const letRF = () =>{
    cuadro.innerHTML = tecTemp+"R"
    tecTemp=tecTemp+"R"
}

const letTF = () =>{
    cuadro.innerHTML = tecTemp+"T"
    tecTemp=tecTemp+"T"
}

const letYF = () =>{
    cuadro.innerHTML = tecTemp+"Y"
    tecTemp=tecTemp+"Y"
}

const letUF = () =>{
    cuadro.innerHTML = tecTemp+"U"
    tecTemp=tecTemp+"U"
}

const letIF = () =>{
    cuadro.innerHTML = tecTemp+"I"
    tecTemp=tecTemp+"I"
}

const letOF = () =>{
    cuadro.innerHTML = tecTemp+"O"
    tecTemp=tecTemp+"O"
}

const letPF = () =>{
    cuadro.innerHTML = tecTemp+"P"
    tecTemp=tecTemp+"P"
}
const enterF = () =>{
    cuadro.innerHTML = tecTemp+"<br>"
    tecTemp=tecTemp+"<br>"
}

//Línea 2 Teclado ASDFGHJKLÑ
const letAF = () =>{
    cuadro.innerHTML = tecTemp+"A"
    tecTemp=tecTemp+"A"
}
const letSF = () =>{
    cuadro.innerHTML = tecTemp+"S"
    tecTemp=tecTemp+"S"
}
const letDF = () =>{
    cuadro.innerHTML = tecTemp+"D"
    tecTemp=tecTemp+"D"
}
const letFF = () =>{
    cuadro.innerHTML = tecTemp+"F"
    tecTemp=tecTemp+"F"
}
const letGF = () =>{
    cuadro.innerHTML = tecTemp+"G"
    tecTemp=tecTemp+"G"
}
const letHF = () =>{
    cuadro.innerHTML = tecTemp+"H"
    tecTemp=tecTemp+"H"
}
const letJF = () =>{
    cuadro.innerHTML = tecTemp+"J"
    tecTemp=tecTemp+"J"
}
const letKF = () =>{
    cuadro.innerHTML = tecTemp+"K"
    tecTemp=tecTemp+"K"
}
const letLF = () =>{
    cuadro.innerHTML = tecTemp+"L"
    tecTemp=tecTemp+"L"
}
const letÑF = () =>{
    cuadro.innerHTML = tecTemp+"Ñ"
    tecTemp=tecTemp+"Ñ"
}
//Línea 3 ZXCVBNM,.-
const letZF = () =>{
    cuadro.innerHTML = tecTemp+"Z"
    tecTemp=tecTemp+"Z"
}
const letXF = () =>{
    cuadro.innerHTML = tecTemp+"X"
    tecTemp=tecTemp+"X"
}
const letCF = () =>{
    cuadro.innerHTML = tecTemp+"C"
    tecTemp=tecTemp+"C"
}
const letVF = () =>{
    cuadro.innerHTML = tecTemp+"V"
    tecTemp=tecTemp+"V"
}
const letBF = () =>{
    cuadro.innerHTML = tecTemp+"B"
    tecTemp=tecTemp+"B"
}
const letNF = () =>{
    cuadro.innerHTML = tecTemp+"N"
    tecTemp=tecTemp+"N"
}
const letMF = () =>{
    cuadro.innerHTML = tecTemp+"M"
    tecTemp=tecTemp+"M"
}
const letCOMF = () =>{
    cuadro.innerHTML = tecTemp+","
    tecTemp=tecTemp+","
}
const letPUNF = () =>{
    cuadro.innerHTML = tecTemp+"."
    tecTemp=tecTemp+"."
}
const letGUIF = () =>{
    cuadro.innerHTML = tecTemp+"-"
    tecTemp=tecTemp+"-"
}

//OnClicks

//Números

numUno.onclick = function() {
    numUnoF();
}
numDos.onclick = function() {
    numDosF();
}
numTres.onclick = function() {
    numTresF();
}
numCuatro.onclick = function() {
    numCuatroF();
}
numCinco.onclick = function() {
    numCincoF();
}
numSeis.onclick = function() {
    numSeisF();
}
numSiete.onclick = function() {
    numSieteF();
}
numOcho.onclick = function() {
    numOchoF();
}

numNueve.onclick = function() {
    numNueveF();
}

numCero.onclick = function() {
    numCeroF();
}

borrar.onclick = function() {
    borrarF();
}
//Línea 1 Teclado QWERTYUIOP

letQ.onclick = function() {
    letQF();
}
letW.onclick = function() {
    letWF();
}
letE.onclick = function() {
    letEF();
}
letR.onclick = function() {
    letRF();
}
letT.onclick = function() {
    letTF();
}
letY.onclick = function() {
    letYF();
}
letU.onclick = function() {
    letUF();
}
letI.onclick = function() {
    letIF();
}
letO.onclick = function() {
    letOF();
}
letP.onclick = function() {
    letPF();
}
enter.onclick = function() {
    enterF();
}
//Línea 2 teclado ASDFGHJKLÑ
letA.onclick = function() {
    letAF();
}
letS.onclick = function() {
    letSF();
}
letD.onclick = function() {
    letDF();
}
letF.onclick = function() {
    letFF();
}
letG.onclick = function() {
    letGF();
}
letH.onclick = function() {
    letHF();
}
letJ.onclick = function() {
    letJF();
}
letK.onclick = function() {
    letKF();
}
letL.onclick = function() {
    letLF();
}
letÑ.onclick = function() {
    letÑF();
}
//Línea 3 ZXCVBNM,..-
letZ.onclick = function() {
    letZF();
}
letX.onclick = function() {
    letXF();
}
letC.onclick = function() {
    letCF();
}
letV.onclick = function() {
    letVF();
}
letB.onclick = function() {
    letBF();
}
letN.onclick = function() {
    letNF();
}
letM.onclick = function() {
    letMF();
}
letCOM.onclick = function() {
    letCOMF();
}
letPUN.onclick = function() {
    letPUNF();
}
letGUI.onclick = function() {
    letGUIF();
}