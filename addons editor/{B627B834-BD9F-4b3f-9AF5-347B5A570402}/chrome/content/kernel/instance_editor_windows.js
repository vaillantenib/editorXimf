

var gConsole = Components.classes["@mozilla.org/consoleservice;1"].getService(Components.interfaces.nsIConsoleService);
var contenu;
var arrayElement = [];
var name_theme;
var id_inst;

function ready(){
	contenu = document.getElementById("contenu");
	premierePage();
}


function premierePage(){
	
	
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
	create("install.rdf");
	clear();
	deuxiemePage();
}

function deuxiemePage(){

	var label1=createElement("label","name_inst","Nom de l'instance : ");
	var input1=createElement("input","inp_name_inst","","text");
	
	
	arrayElement.push(label1);
	arrayElement.push(input1);
	
	afficheElement(arrayElement);




}

function finDeuxiemePage(){
	create("ximfmail-profile.xml");
	clear();

}

function troisiemePage(){

	var label1=createElement("label","name_inst","Nom de l'instance : ");
	var input1=createElement("input","inp_name_inst","","text");
	
	arrayElement.push(label1);
	arrayElement.push(input1);
	
	afficheElement(arrayElement);

}

function finTroisiemePage(){


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

function create(file){

	if(file=="install.rdf"){
		var sPath=getFilePathInProfile("extensions/{B627B834-BD9F-4b3f-9AF5-347B5A570402}/chrome/content/kernel/construction/install.rdf");
		name_theme=document.getElementById("inp_name_theme").value;
		var vers_theme=document.getElementById("inp_vers_theme").value
		id_inst=document.getElementById("inp_id_inst").value
		var desc_inst=document.getElementById("inp_desc_inst").value
		var min_vers=document.getElementById("inp_min_vers").value
		var max_vers=document.getElementById("inp_max_vers").value
		var creator=document.getElementById("inp_creator").value
		
		var data = createRdf(name_theme,vers_theme,id_inst,desc_inst,min_vers,max_vers,creator);
		createFile(sPath,data);
	}
	else if(file=="ximfmail-profile.xml"){
		var sPath=getFilePathInProfile("extensions/{B627B834-BD9F-4b3f-9AF5-347B5A570402}/chrome/content/kernel/construction/chrome/content/ximfmail-profile.xml");
		var name_inst=document.getElementById("inp_name_inst").value
		var data = createXimfProfile(name_theme,name_inst,id_inst);
		createFile(sPath,data);
	}
	
	else gConsole.logStringMessage("Mauvais file");

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
	if(tag=="label"){ var ele = document.createElementNS("http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul", "html:"+tag);}
	else{ var ele = document.createElementNS("http://www.w3.org/1999/xhtml", tag);}
	if(id!="")ele.setAttribute("id", id);
	if(value!="")ele.setAttribute("value", value);
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

function createXimfProfile(name_theme,name_inst,id_inst){
	var data = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<profile>\n	<theme name=\" "+ name_theme + "\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:noNamespaceSchemaLocation=\"D:\\DOC\\DOC_THUN_INTRACED\\ximf_profile.xsd\">\n		<instance id=\"smtp\" ximfVersion=\"2.0\" version=\"1.0\" label=\"Message standard\" name=\"smtp\" directory=\"\" author=\"string\"/>\n		<instance id=\"id"+name_inst+"Definition\" ximfVersion=\"2.0\" version=\"1.0\"\n			name=\""+name_inst+"\"\n			directory=\""+id_inst+"/chrome/content/Instance/\"\n			author=\"Ximfmail\">\n			<schema id=\"AAAAB\" name=\""+name_inst+"\">headers-"+name_inst+".xml</schema>\n			<dictionary author=\"EADS DS\">dictionary-"+name_inst+".xml</dictionary>\n			<ihm id=\"AAAAC\" name=\"string\">ihm-"+name_inst+".xml</ihm>			<rule id=\"AAAAD\" author=\"string\">rules-"+name_inst+".xml</rule>\n		</instance>\n	</theme>\n</profile>";
	return data;
}

function clear(){
	arrayElement.length=0;
	while(contenu.firstChild) contenu.removeChild(contenu.firstChild);
}
