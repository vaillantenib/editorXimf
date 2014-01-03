

var gConsole = Components.classes["@mozilla.org/consoleservice;1"].getService(Components.interfaces.nsIConsoleService);
var contenu;
var arrayElement = [];
var arrayOnglet = [];
var dict = new Object();
var onglets = new Object();
var listOnglets = [];
var page = "";
var table;
var table2;
var menu;
var pages;

function createPage(nbPage,parent){
	this.parent = parent;
	this.nbPage = nbPage;
	this.menu = new createTableau(this.nbPage,1,"menu");
	this.menu.attachOn(this.parent);
	var br=createElement("br");
	this.parent.appendChild(br);
	this.page = [];
	this.currentPage;
	
	for(var i=0 ; this.nbPage>i ; i++){
		this.menu.setButtonOnCellule(i,0,"onglet"+i,"pages.affichePage("+i+")")
	}

	this.resize = function(x){
		this.menu.resize(x,0);
		this.nbPage+=x;
		for(var i=this.nbPage-x ; this.nbPage>i ; i++){
			this.menu.setButtonOnCellule(i,0,"onglet"+i,"pages.affichePage("+i+")")
		}
		this.parent.removeChild(br);
		this.parent.appendChild(br);
	}

	this.affichePage = function(numPage){
		for(var i=0 ; this.page.length>i ; i++){
			this.page[i].dettach();
		}
		this.page[numPage].attachOn(this.parent);
		this.currentPage = this.page[numPage];
	}

	this.onstart = function(){

		this.page.push(new createTableau(10,10,"tableau"));

		this.page.push(new createTableau(5,5,"tableau2"));
	
		/*for(var x=0 ; this.page.length>x ; x++){
			this.page[x].attachOn(document.getElementById('body'));
			for(var i=0 ; this.page[x].height>i ; i++){
				for(var j=0 ; this.page[x].width>j ; j++){
					this.page[x].setLabelOnCellule(j,i,j+"-"+i);
				}
			}
			this.page[x].dettach();
		}*/
	}

	//this.onstart();
}

function ready(){
	contenu = document.getElementById("contenu");
	pages = new createPage(0,document.getElementById('body'));
	premierePage();
	deuxiemePage();
}


function premierePage(){
	pages.resize(1);
	pages.page.push(new createTableau(2,8,"intro"));
	var page1 = pages.page[pages.page.length-1];

	var input1=createElement("input","inp_name_theme","","text");
	var input2=createElement("input","inp_vers_theme","","text");
	var input3=createElement("input","inp_id_inst","","text");
	var input4=createElement("input","inp_desc_inst","","text");
	var input5=createElement("input","inp_min_vers","","text");
	var input6=createElement("input","inp_max_vers","","text");
	var input7=createElement("input","inp_creator","","text");
	var input8=createElement("input","inp_name_inst","","text");

	page1.attachOn(document.getElementById('body'));
	page1.setLabelOnCellule(0,0,"Nom du thème : ");
	page1.setLabelOnCellule(0,1,"Version du thème : ");
	page1.setLabelOnCellule(0,2,"ID de l'instance : ");
	page1.setLabelOnCellule(0,3,"Description de l'instance : ");
	page1.setLabelOnCellule(0,4,"Version minimum de Thunderbird : ");
	page1.setLabelOnCellule(0,5,"Version maximum de Thunderbird : ");
	page1.setLabelOnCellule(0,6,"Créateur de l'instance : ");
	page1.setLabelOnCellule(0,7,"Nom de l'instance : ");

	page1.setCellule(1,0,input1);
	page1.setCellule(1,1,input2);
	page1.setCellule(1,2,input3);
	page1.setCellule(1,3,input4);
	page1.setCellule(1,4,input5);
	page1.setCellule(1,5,input6);
	page1.setCellule(1,6,input7);
	page1.setCellule(1,7,input8);
	page1.dettach();
	
}

function deuxiemePage(){
	pages.resize(1);
	pages.page.push(new createTableau(2,1,"dictionnaire"));
	var page2 = pages.page[pages.page.length-1];
	
	page2.attachOn(document.getElementById('body'));
	page2.setLabelOnCellule(0,0,"Français");
	page2.setLabelOnCellule(1,0,"Anglais");

	var input1=createElement("input","inp-listFr-"+"","","text");
	input1.setAttribute("onchange","addWorldDict(1);this.removeAttribute(\"onchange\");");
	
	
	addWorldDict(page2);
	addWorldDict(page2);
	page2.dettach();
	
}

function addWorldDict(page){
	var input1=createElement("input","inp-listFr-"+(page.height-1),"","text");
	var input2=createElement("input","inp-listUs-"+(page.height-1),"","text");
	input1.setAttribute("onchange","addWorldDict(pages.currentPage);this.removeAttribute(\"onchange\");");
	page.resize(0,1);
	page.setCellule(0,page.height-1,input1);
	page.setCellule(1,page.height-1,input2);
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

function troisiemePage(){
	pages.resize(1);
	pages.page.push(new createTableau(2,1,"onglets"));
	
}

function addOnglet(change){
	if(arrayOnglet.length<5){
		var button1=createElement("input","onglet"+arrayOnglet.length,"","text");
		if(change==1) button1.setAttribute("onchange","addOnglet();this.removeAttribute(\"onchange\");");
		//button1.setAttribute("onclick","onglet"+arrayOnglet.length+"();");
		var button2=createElement("input","onglet"+(arrayOnglet.length+1),"","text");
		if(change==1) button2.setAttribute("onchange","addOnglet();this.removeAttribute(\"onchange\");");
		//button2.setAttribute("onclick","onglet"+(arrayOnglet.length+1)+"();");
		
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
	data = createXimfProfile(name_theme,name_inst,id_inst);
	createFile(sPath,data);
	
	file.append(name_theme);
	if( !file.exists() || !file.isDirectory() ) {   // S'il n'existe pas, le créer
	   file.create(Components.interfaces.nsIFile.DIRECTORY_TYPE, 0664);
	}
	
	sPath=getFilePathInProfile("extensions/"+name_theme+"/chrome/content/"+name_theme+"/dictionary-"+name_theme+".xml");
	var listFr = hashWithId(dict,"listFr");
	var listUs = hashWithId(dict,"listUs");
	data = createDictionnary(name_inst,listFr,listUs);
	createFile(sPath,data);
	
	listOnglets.push(new onglet("name")); 
	new group("name");
	
	sPath=getFilePathInProfile("extensions/"+name_theme+"/chrome/content/"+name_theme+"/headers-"+name_theme+".xml");
	data = createHeaders(name_inst,listObjectStatic,listObjectDyn);
	createFile(sPath,data);
	
	sPath=getFilePathInProfile("extensions/"+name_theme+"/chrome/content/"+name_theme+"/ihm-"+name_theme+".xml");
	data = createIhm(name_inst,listOnglets);
	createFile(sPath,data);
	
	sPath=getFilePathInProfile("extensions/"+name_theme+"/chrome/content/"+name_theme+"/rules-"+name_theme+".xml");
	data = createRules(name_inst,listAssociations);
	createFile(sPath,data);
	
	
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
	save();
	page ="";
	arrayElement.length=0;
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

function createHeaders(name_inst,listObjectStatic,listObjectDyn){
	var data = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<?xml-stylesheet type=\"text/xsl\" href=\"ximftoxul.xsl\"?>\r\n<ximf:instance name=\""+name_inst+"\" version=\"1.0\" ximfVersion=\"2.0\" xmlns:ximf=\"http://eads.org/ximf/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://eads.org/ximf/ ximf.xsd\">\r";
	
	var espace = "\r\n\t";
	
	for (var k in listObjectStatic) {
			data += espace;
			data += "<ximf:header id=\"header-"+k.name+"\" headerName=\"X-XIMF-"+k.name+"\" >\t\t\r\n\t\t<ximf:string content=\""+k.value+"\"/>\r\n\t</ximf:header>\r";
	}
	
	for (var k in listObjectDyn) {
			data += espace;
			data += "<ximf:header id=\"header-"+k.name+"\" \r\n\t\t\t\t headerName=\"X-XIMF-"+k.name+"\"\r\n\t\t\t\t type=\""+k.type+"\"\r\n\t\t\t\t ilk=\"ilk-"+k.name+"\"\r\n\t\t\t\t isMandatory=\""+k.mandatory+"\">\r";
			data += "\n\t\t<ximf:set id=\"value-"+k.name+"\">\r";
			if(k.type == "date"){
				data += "\n\t\t\t<ximf:string id=\"value-"+k.name+"\" editable=\"true\" />\r";
			}else{
				for( var i in k.options){
					data += "\n\t\t\t<ximf:string ilk=\"ilk-"+i+"\" content=\""+i+"\"/>\r";
				}			
			}
			data += "\n\t\t</ximf:set>\r";
			data += "\n\t</ximf:header>\r";
	}
	
	data += "\n\t\r\n</ximf:instance>\r\n";
	return data;
}

function objectStatic(name,value){
	this.name = name;
	this.value = value;
	
	return this.name;
}

function objectDyn(name,type,mandatory){
	this.name = name;
	this.type = type;
	this.mandatory = mandatory;
	this.options = [];
	
	this.addOptions = function(value){
		this.options.push(value);
	};
	
	return this.name;
}

function onglet(name){
	this.name = name;
	this.groups = [];
	
	this.addGroup = function(value){
		this.groups.push(value);
	};
	
	return this.name;
}

function group(name){
	this.name = name;
	this.elements = [];
	
	this.addElement = function(value){
		this.elements.push(value);
	};
	
	return this.name;
}

function association(contraint,condition){
	this.contraint = contraint;
	this.condition = condition;
	this.rules = [];
	
	this.addRule = function(listContraint,listCondition){
		rules.push([listContraint,listCondition]);
	}
}

function createIhm(name_inst,listOnglets){
	var data = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<ximf:instance name=\""+name_inst+"\" version=\"1.0\" ximfVersion=\"2.0\" xmlns:ximf=\"http://eads.org/ximf/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://eads.org/ximf/ ximf.xsd\">\r";
	data += "\n<ximf:ihm xmlns:ximf=\"http://eads.org/ximf/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\r";
	
	for (var k in listOnglets) {
		data += "\n\t<ximf:panel id=\"pane_"+k.name+"\" ilk=\"ilk-"+k.name+"\">\r";
		for (var j in k.groups) {
			data += "\n\t\t<ximf:groupbox id=\"group-"+j.name+"\" ilk=\"ilk-"+j.name+"\">\r";
			for (var i in j.elements) {
				data += "\n\t\t\t<ximf:headerRef>header-"+i.name+"</ximf:headerRef>\r";
			}
			data += "\n\t\t</ximf:groupbox>\r";
		}
		data += "\n\t</ximf:panel>\r";
	}
	data += "\n</ximf:ihm>\r\n</ximf:instance>";
	return data;
}

function createRules(name_inst,listAssociations){
	var data = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n\r\n<ximf:instance name=\""+name_inst+"\" version=\"1.0\" ximfVersion=\"2.0\" xmlns:ximf=\"http://eads.org/ximf/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://eads.org/ximf/ ximf.xsd\">\r";
	
	for (var k in listAssociations) {
		data += "\n\t<ximf:rule id=\"compatibility-rule\" description=\"Règle sur la compatibilités X-SMTP / XIMF\" >\r";
		data += "\n\t\t<ximf:association>\r";
		data += "\n\t\t\t\t<ximf:aliasHeader headerName=\"X-XIMF-"+k.contraint.name+"\" headerRef=\"X-XIMF-"+k.condition.name+"\">\r";
		for (var j in k.rules) {
			data += "\n\t\t\t\t<ximf:aliasValue valueName=\"";
			var bool=1;
			for (var i in j[0]) {
				if(bool!=1){
					data += ",";
				}
				data += i;
				bool=0;
			}
			bool=1;
			data += "\" valueRef=\"";
			for (var i in j[1]) {
				if(bool!=1){
					data += ",";
				}
				data += i;
				bool=0;
			}
			data += "\" />\r";
		}
		data += "\n\t\t\t\t</ximf:aliasHeader>\r";
		data += "\n\t\t</ximf:association>\r";
		data += "\n\t</ximf:rule>\r";
	}
	data += "\n</ximf:instance>";
	return data;
}

function save(){
	if(page == "premierePage" || page=="deuxiemePage" || page == "troisiemePage"){
		var input = contenu.getElementsByTagName("input");
		for(var i = 0;i<input.length;i++){
			dict[input[i].id]=input[i].value;
		}
	}
	else if(page == "quatriemePage"){
		var input = contenu.getElementsByTagName("input");
		for(var i = 0;i<input.length;i++){
			listOnglets.push(new onglet(input[i].value));
		}
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




function createTableau(width,height,id){

	this.createElement = function(tag,id,value,type){
		if(tag=="label" || tag=="table"){ var ele = document.createElementNS("http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul", "html:"+tag);}
		else{ var ele = document.createElementNS("http://www.w3.org/1999/xhtml", tag);}
		if(id!=null)ele.setAttribute("id", id);
		if(value!=null)ele.setAttribute("value", value);
		if(type!=null)ele.setAttribute("type", type);
		return ele;
	};

	this.width = width;
	this.height = height;
	this.id = id;
	this.parent;
	
	this.table = this.createElement("table",this.id);
	var tr;
	var td;
	for(var i=0 ; this.height>i ; i++){
		tr = this.createElement("tr");
		this.table.appendChild(tr);
		for(var j=0 ; this.width>j ; j++){
			td = this.createElement("td",this.id+"coord"+i+"x"+j);
			td.setAttribute("style","border-style:solid");
			tr.appendChild(td);
		}
	}

	this.resize = function(x,y){
		this.width +=x;
		this.height +=y;

		var tabletmp = this.createElement("table",this.id);
		var tr;
		var td;
		for(var i=0 ; this.height>i ; i++){
			tr = this.createElement("tr");
			tabletmp.appendChild(tr);
			for(var j=0 ; this.width>j ; j++){
				if(this.getCellule(j,i)) tr.appendChild(this.getCellule(j,i));
				else{
				td = this.createElement("td",this.id+"coord"+i+"x"+j);
				td.setAttribute("style","border-style:solid");
				tr.appendChild(td);}
			}
		}
		while(this.table.firstChild) this.table.removeChild(this.table.firstChild);
		this.table = tabletmp;
		if(this.parent) this.attachOn(this.parent);
	}
	
	this.getCellule = function(x,y){
		return document.getElementById(this.id+"coord"+y+"x"+x);
	};
	
	this.setCellule = function(x,y,element){
		document.getElementById(this.id+"coord"+y+"x"+x).appendChild(element);
	};

	this.setLabelOnCellule = function(x,y,label){
		var lab = this.createElement("label","",label);
		document.getElementById(this.id+"coord"+y+"x"+x).appendChild(lab);
	};

	this.setButtonOnCellule = function(x,y,label,command){
		var but = this.createElement("input","",label,"button");
		but.setAttribute("onclick",command);
		document.getElementById(this.id+"coord"+y+"x"+x).appendChild(but);
	};
	
	this.clearCellule = function(x,y){
		var cellule = document.getElementById(this.id+"coord"+y+"x"+x);
		while(cellule.firstChild) cellule.removeChild(cellule.firstChild);
	};
	
	this.clearAll = function(){
		for(var i=0 ; height>i ; i++){
			for(var j=0 ; width>j ; j++){
				this.clearCellule(i,j);
			}
		}
	};

	this.attachOn = function(element){
		element.appendChild(this.table);
		this.parent = element;
	};

	this.dettach = function(){
		if(this.parent){
			this.parent.removeChild(this.table);
			this.parent=null;
		}
	}
}
