

var gConsole = Components.classes["@mozilla.org/consoleservice;1"].getService(Components.interfaces.nsIConsoleService);
var contenu;
var arrayElement = [];
var arrayOnglet = [];
var dict = new Object();
var onglets = new Object();

function ready(){
	contenu = document.getElementById("contenu");
	premierePage();

}


function premierePage(){
	clear();
	var h2=createElement("h2","name_page","Propriétés de l'extension");
	contenu.appendChild(h2);
	var label1=createElement("label","name_theme","Nom du thème : ");
	var input1=createElement("input","inp_name_theme","","text");
	var label2=createElement("label","vers_theme","Version du thème : ");
	var input2=createElement("input","inp_vers_theme","","text");
	var label3=createElement("label","id_inst","ID de l'instance : ");
	var input3=createElement("input","inp_id_inst","","text");
	var label4=createElement("label","desc_inst","Description de l'instance : ");
	var input4=createElement("input","inp_desc_inst","","text");
	var label5=createElement("label","min_vers","Version minimum de Thunderbird : ");
	var input5=createElement("input","inp_min_vers","","text");
	var label6=createElement("label","max_vers","Version maximum de Thunderbird : ");
	var input6=createElement("input","inp_max_vers","","text");
	var label7=createElement("label","creator","Créateur de l'instance : ");
	var input7=createElement("input","inp_creator","","text");
	
	
	arrayElement.push(label1);
	arrayElement.push(input1);
	arrayElement.push(label2);
	arrayElement.push(input2);
	arrayElement.push(label3);
	arrayElement.push(input3);
	arrayElement.push(label4);
	arrayElement.push(input4);
	arrayElement.push(label5);
	arrayElement.push(input5);
	arrayElement.push(label6);
	arrayElement.push(input6);
	arrayElement.push(label7);
	arrayElement.push(input7);
	
	afficheElement(arrayElement);
	
}

function finPremierePage(){
	//create("install.rdf");
	//clear();
	deuxiemePage();
}

function deuxiemePage(){
	clear();
	var h2=createElement("h2","name_page","Propriétés de l'instance");
	contenu.appendChild(h2);
	var label1=createElement("label","name_inst","Nom de l'instance : ");
	var input1=createElement("input","inp_name_inst","","text");
	
	
	arrayElement.push(label1);
	arrayElement.push(input1);
	
	afficheElement(arrayElement);

}

function finDeuxiemePage(){
	//create("ximfmail-profile.xml");
	//clear();
	troisiemePage();
}

function troisiemePage(){
	clear();
	var h2=createElement("h2","name_page","Dictionnaire de l'instance");
	contenu.appendChild(h2);
	var label1=createElement("label","fr","Français");
	var label2=createElement("label","us","Anglais");
	
	arrayElement.push(label1);
	arrayElement.push(label2);
	afficheElement(arrayElement);
	
	var listFr = hashWithId(dict,"listFr");
	for (var k in listFr) {
		if (listFr.hasOwnProperty(k)) {
			if(listFr[k]!="") addWorldDict(0);
		}
	}
	
	addWorldDict(1);
	
}

function addWorldDict(change){
	arrayElement.length=0;
	var input1=createElement("input","inp-listFr-"+contenu.getElementsByTagName("input").length/2+"","","text");
	var input2=createElement("input","inp-listUs-"+contenu.getElementsByTagName("input").length/2+"","","text");
	if(change==1) input1.setAttribute("onchange","addWorldDict(1);this.removeAttribute(\"onchange\");");
	
	arrayElement.push(input1);
	arrayElement.push(input2);
	afficheElement(arrayElement);
}

function finTroisiemePage(){
	quatriemePage();
}

/*
function quatriemePage(){
	clear();
	var h2=createElement("h2","name_page","Onglets de l'instance");
	contenu.appendChild(h2);

	var label1=createElement("label","onglet","onglets");
	var label2=createElement("label","none","");
	
	arrayElement.push(label1);
	arrayElement.push(label2);
	afficheElement(arrayElement);
	
	var listOnglet = hashWithId(dict,"onglet");
	for (var k in listOnglet) {
		if (listOnglet.hasOwnProperty(k)) {
			if(listFr[k]!="") addOnglet(0);		
		}
	}
	
	addOnglet(1);
	addOnglet(1);
}

function addOnglet(change){
	arrayElement.length=0;
	var input1=createElement("input","inp-onglet-"+contenu.getElementsByTagName("input").length+"","","text");
	var label1=createElement("label","none","");
	if(change==1) input1.setAttribute("onchange","addOnglet();this.removeAttribute(\"onchange\");");
	
	arrayElement.push(input1);
	arrayElement.push(label1);
	afficheElement(arrayElement);
}
*/

function quatriemePage(){
	clear();
	var h2=createElement("h2","name_page","Onglets de l'instance");
	contenu.appendChild(h2);
	
	addOnglet(1);
}

function addOnglet(change){
	if(arrayOnglet.length<5){
		var button1=createElement("input","onglet"+arrayOnglet.length,"","text");
		if(change==1) button1.setAttribute("onchange","addOnglet();this.removeAttribute(\"onchange\");");
		button1.setAttribute("onclick","onglet"+arrayOnglet.length+"();");
		var button2=createElement("input","onglet"+(arrayOnglet.length+1),"","text");
		if(change==1) button2.setAttribute("onchange","addOnglet();this.removeAttribute(\"onchange\");");
		button2.setAttribute("onclick","onglet"+(arrayOnglet.length+1)+"();");
		
		arrayOnglet.push(button1);
		arrayOnglet.push(button2);
	}
	clear();
	addLigne(arrayOnglet);
}

function onglet0(){
	var table=createElement("table","table"+arrayOnglet.length,"","");
}

function onglet1(){
	var table=createElement("table","table"+arrayOnglet.length,"","");
}

function onglet2(){
	var table=createElement("table","table"+arrayOnglet.length,"","");
}

function onglet3(){
	var table=createElement("table","table"+arrayOnglet.length,"","");
}

function onglet4(){
	var table=createElement("table","table"+arrayOnglet.length,"","");
}

function onglet5(){
	var table=createElement("table","table"+arrayOnglet.length,"","");
}

function afficheElement(array){
	var tr;
	var td;
	for(var i=0 ; array.length>i+1 ; i+=2){
		br=createElement("br");
		tr=createElement("tr");
		contenu.appendChild(tr);
		td=createElement("td");
		tr.appendChild(td);
		td.appendChild(array[i]);
		td=createElement("td");
		tr.appendChild(td);
		td.appendChild(array[i+1]);
		contenu.appendChild(br);
	}
}

function addLigne(array){
	var tr;
	tr=createElement("tr");
	var td;
	contenu.appendChild(tr);
	for(var i=0 ; array.length>i ; i++){
		td=createElement("td");
		td.appendChild(array[i]);
		tr.appendChild(td);
	}
}

function create(){
	var file="";
	var file = Components.classes["@mozilla.org/file/directory_service;1"]
                     .getService(Components.interfaces.nsIProperties)
                     .get("ProfD", Components.interfaces.nsIFile);
					 
	file.append("extensions");
	if( !file.exists() || !file.isDirectory() ) {   // S'il n'existe pas, le créer
	   file.create(Components.interfaces.nsIFile.DIRECTORY_TYPE, 0664);
	}
	
	var name_theme=dict["inp_name_theme"];
	
	file.append(name_theme);
	if( !file.exists() || !file.isDirectory() ) {   // S'il n'existe pas, le créer
	   file.create(Components.interfaces.nsIFile.DIRECTORY_TYPE, 0664);
	}

	var sPath=getFilePathInProfile("extensions/"+name_theme+"/"+"install.rdf");
	
	var vers_theme=dict["inp_vers_theme"];
	var id_inst=dict["inp_id_inst"];
	var desc_inst=dict["inp_desc_inst"];
	var min_vers=dict["inp_min_vers"];
	var max_vers=dict["inp_max_vers"];
	var creator=dict["inp_creator"];
	
	var data = createRdf(name_theme,vers_theme,id_inst,desc_inst,min_vers,max_vers,creator);
	createFile(sPath,data);
	
	sPath=getFilePathInProfile("extensions/"+name_theme+"/"+"chrome.manifest");
	data = createManifest();
	createFile(sPath,data);
	
	
	file.append("chrome");
	if( !file.exists() || !file.isDirectory() ) {   // S'il n'existe pas, le créer
	   file.create(Components.interfaces.nsIFile.DIRECTORY_TYPE, 0664);
	}
	file.append("content");
	if( !file.exists() || !file.isDirectory() ) {   // S'il n'existe pas, le créer
	   file.create(Components.interfaces.nsIFile.DIRECTORY_TYPE, 0664);
	}
	
	sPath=getFilePathInProfile("extensions/"+name_theme+"/chrome/content/"+"ximfmail-profile.xml");
	var name_inst=dict["inp_name_inst"];
	var data = createXimfProfile(name_theme,name_inst,id_inst);
	createFile(sPath,data);
	
	file.append(name_theme);
	if( !file.exists() || !file.isDirectory() ) {   // S'il n'existe pas, le créer
	   file.create(Components.interfaces.nsIFile.DIRECTORY_TYPE, 0664);
	}
	
	sPath=getFilePathInProfile("extensions/"+name_theme+"/chrome/content/"+name_theme+"/dictionary-"+name_theme+".xml");
	var listFr = hashWithId(dict,"listFr");
	var listUs = hashWithId(dict,"listUs");
	var data = createDictionnary(name_inst,listFr,listUs);
	createFile(sPath,data);
	
	/*sPath=getFilePathInProfile("extensions/"+name_theme+"/chrome/content/"+name_theme+"/headers-"+name_theme+".xml");
	var name_inst=dict("inp_name_inst");
	var data = createHeaders();
	createFile(sPath,data);
	
	sPath=getFilePathInProfile("extensions/"+name_theme+"/chrome/content/"+name_theme+"/ihm-"+name_theme+".xml");
	var name_inst=dict("inp_name_inst");
	var data = createIhm();
	createFile(sPath,data);
	
	sPath=getFilePathInProfile("extensions/"+name_theme+"/chrome/content/"+name_theme+"/rules-"+name_theme+".xml");
	var name_inst=dict("inp_name_inst");
	var data = createRules();
	createFile(sPath,data);*/
	
	
}

function hashWithId(hash,id){
	var return_hash = new Object();
	for (var k in hash) {
		if (hash.hasOwnProperty(k)) {
			if(k.match(id)){
				return_hash[k]=hash[k];
			}
		}
	}
	
	return return_hash
}

function createFile(sPath,data){

	var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
    file.initWithPath(sPath);
    var stream = Components.classes["@mozilla.org/network/file-output-stream;1"].createInstance(Components.interfaces.nsIFileOutputStream);
    stream.init(file,0x02 | 0x08 | 0x20, 0666,  0);
	var converter = Components.classes["@mozilla.org/intl/converter-output-stream;1"].
    createInstance(Components.interfaces.nsIConverterOutputStream);
	converter.init(stream, "UTF-8", 0, 0);
	converter.writeString(data);
	converter.close();
}


function createElement(tag,id="",value="",type=""){
	if(tag=="label" || tag=="table"){ var ele = document.createElementNS("http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul", "html:"+tag);}
	else{ var ele = document.createElementNS("http://www.w3.org/1999/xhtml", tag);}
	//if(tag=="input"){dict[id]="";}
	if(id!="")ele.setAttribute("id", id);
	if(value!="")ele.setAttribute("value", value);
	if(dict[id] && dict[id]!="")ele.setAttribute("value", dict[id]);
	if(type!="")ele.setAttribute("type", type);
	return ele;
}

function getFilePathInProfile(aRelativePath) {    
    var file = Components.classes["@mozilla.org/file/directory_service;1"]
                      .getService(Components.interfaces.nsIProperties)
                      .get("ProfD", Components.interfaces.nsIFile);

    // Add relative data file
    var path = aRelativePath.split("/");
    for (var i = 0, sz = path.length; i < sz; i++) {
        if (path[i] != "")
           file.append(path[i]);
    }
    return file.path;
}

function test(){
	finDeuxiemePage();

}



function createRdf(name_theme,vers_theme,id_inst,desc_inst,min_vers,max_vers,creator){
	var data = 
	"<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<RDF xmlns=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns:em=\"http://www.mozilla.org/2004/em-rdf#\">\n  <Description about=\"urn:mozilla:install-manifest\">\n    <em:name>"+name_theme+"</em:name>\n    <em:version>"+vers_theme+"</em:version>\n    <em:unpack>true</em:unpack>\n    <em:id>"+id_inst+"</em:id>\n    <em:description>"+desc_inst+"</em:description>\n    <em:targetApplication>\n      <!-- Thunderbird -->\n      <Description>\n       <em:id>{3550f703-e582-4d05-9a08-453d09bdfdc6}</em:id>\n       <em:minVersion>"+min_vers+"</em:minVersion>\n       <em:maxVersion>"+max_vers+"</em:maxVersion>\n      </Description>\n    </em:targetApplication>\n <em:creator>"+creator+"</em:creator>\n </Description>\n</RDF>";
	return data;
}

function createManifest(){
	var data = "";
	return data;
}

function createXimfProfile(name_theme,name_inst,id_inst){
	var data = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<profile>\n	<theme name=\" "+ name_theme + "\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:noNamespaceSchemaLocation=\"D:\\DOC\\DOC_THUN_INTRACED\\ximf_profile.xsd\">\n		<instance id=\"smtp\" ximfVersion=\"2.0\" version=\"1.0\" label=\"Message standard\" name=\"smtp\" directory=\"\" author=\"string\"/>\n		<instance id=\"id"+name_inst+"Definition\" ximfVersion=\"2.0\" version=\"1.0\"\n			name=\""+name_inst+"\"\n			directory=\""+id_inst+"/chrome/content/Instance/\"\n			author=\"Ximfmail\">\n			<schema id=\"AAAAB\" name=\""+name_inst+"\">headers-"+name_inst+".xml</schema>\n			<dictionary author=\"EADS DS\">dictionary-"+name_inst+".xml</dictionary>\n			<ihm id=\"AAAAC\" name=\"string\">ihm-"+name_inst+".xml</ihm>			<rule id=\"AAAAD\" author=\"string\">rules-"+name_inst+".xml</rule>\n		</instance>\n	</theme>\n</profile>";
	return data;
}

function clear(){
	arrayElement.length=0;
	save();
	while(contenu.firstChild) contenu.removeChild(contenu.firstChild);
}

function createDictionnary(name_inst,listFr,listUs){
	var data="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\n<ximf:instance name=\""+name_inst+"\" version=\"1.0\" ximfVersion=\"2.0\" xmlns:ximf=\"http://eads.org/ximf/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://eads.org/ximf/ ximf.xsd\">\n\t<ximf:dictionary id=\"OneDico\">\n\t\t<ximf:locale lang=\"fr\">\n";
	var tripleTab = "\t\t\t";
	
	for (var k in listFr) {
		if (listFr.hasOwnProperty(k)) {
			data += tripleTab;
			data += "<ximf:ilk entity=\"ilk-"+stringToIlk(listFr[k])+"\">"+listFr[k]+"</ximf:ilk>\n";			
		}
	}
	
	data += "\t\t</ximf:locale>\n\t\t<ximf:locale lang=\"en-US\">\n";
	
	for (var k in listUs) {
		if (listUs.hasOwnProperty(k)) {
			data += tripleTab;
			data += "<ximf:ilk entity=\"ilk-"+stringToIlk(listUs[k])+"\">"+listUs[k]+"</ximf:ilk>\n";			
		}
	}
	
	data += "\t\t</ximf:locale>\n\t</ximf:dictionary>\n</ximf:instance>\n";
	return data;
}

function stringToIlk(data){
	dataList=data.split(" ");
	var dataIlk=dataList[0].replace("'","-");
	for(var j =1;j<dataList.length;j++){
		dataIlk+="-"+dataList[j].replace("'","-");
	}
	return dataIlk;
}

function createHeaders(){
	
	return data;
}

function createIhm(){
	
	return data;
}

function createRules(){
	
	return data;
}

function save(){
	var input = contenu.getElementsByTagName("input");
	for(var i = 0;i<input.length;i++){
		dict[input[i].id]=input[i].value;
	}
}

function afficher(){
	for (var k in dict) {
		// use hasOwnProperty to filter out keys from the Object.prototype
		if (dict.hasOwnProperty(k)) {
			gConsole.logStringMessage('key is: ' + k + ', value is: ' + dict[k]);
		}
	}
}
