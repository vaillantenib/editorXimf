

var gConsole = Components.classes["@mozilla.org/consoleservice;1"].getService(Components.interfaces.nsIConsoleService);
var contenu;
var save = new Object();
var pageId = new Object();
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
var example;
var ilk = [];

function createPage(nbPage,parent,id){
	this.id = id;
	pageId[this.id]=this;
	this.parent = parent;
	this.nbPage = nbPage;
	this.menu = new createTableau(this.nbPage,1,this.id+"menu");
	this.menu.attachOn(this.parent);
	var br=createElement("br");
	this.parent.appendChild(br);
	this.page = [];
	this.currentPage;
	
	for(var i=0 ; this.nbPage>i ; i++){
		this.menu.setButtonOnCellule(i,0,"onglet"+i,"pageId[\""+this.id+"\"].affichePage("+i+")")
	}

	this.resize = function(x){
		this.menu.resize(x,this.menu.height);
		
		for(var i=this.nbPage ; x>i ; i++){
			this.menu.setButtonOnCellule(i,0,"onglet"+i,"pageId[\""+this.id+"\"].affichePage("+i+")")
		}
		this.nbPage=x;
		this.parent.removeChild(br);
		this.parent.appendChild(br);
	}

	this.affichePage = function(numPage){
		for(var i=0 ; this.page.length>i ; i++){
			this.page[i].dettach();
		}
		this.page[numPage].attachOn(this.parent);
		this.currentPage = numPage;
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
	pages = new createPage(0,document.getElementById('body'),"principal");
	premierePage();
	deuxiemePage();
	troisiemePage();
}

function test(){
	gConsole.logStringMessage(save["select1x1"].value);
}

function premierePage(){
	pages.resize(pages.nbPage+1);
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
	pages.resize(pages.nbPage+1);
	pages.page.push(new createTableau(2,1,"dictionnaire"));
	var page2 = pages.page[pages.page.length-1];
	
	page2.attachOn(document.getElementById('body'));
	page2.setLabelOnCellule(0,0,"Français");
	page2.setLabelOnCellule(1,0,"Anglais");	
	
	addWorldDict(page2);
	addWorldDict(page2);
	page2.dettach();
	
}

function addWorldDict(page){
	var input1=createElement("input","inp-listFr-"+(page.height-1),"","text");
	var input2=createElement("input","inp-listUs-"+(page.height-1),"","text");
	input1.setAttribute("onchange","addWorldDict(pages.page[pages.currentPage]);this.removeAttribute(\"onchange\");");
	page.resize(page.width,page.height+1);
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
	pages.resize(pages.nbPage+1);
	pages.page.push(new createTableau(2,1,"onglets"));
	var page3 = pages.page[pages.page.length-1];
	
	page3.attachOn(document.getElementById('body'));
	page3.setButtonOnCellule(0,0,"Add onglet","addOnglet()");
	example = new createPage(0,page3.getCellule(1,0),"example");

	page3.dettach();
}

function addOnglet(){
	example.resize(example.nbPage+1);
	example.page.push(new createTableau(5,9,"onglet"+example.page.length));
	var pageexample = example.page[example.page.length-1];
	pageexample.attachOn(document.getElementById('body'));

	pageexample.setLabelOnCellule(0,0,"Nom de l'onglet :");
	pageexample.setLabelOnCellule(0,1,"Intitulé du champs :");
	pageexample.setLabelOnCellule(0,2,"Champs Obligatoire :");
	pageexample.setLabelOnCellule(0,3,"Type de champs :");

	pageexample.setLabelOnCellule(0,4,"Option 1 :");
	pageexample.setLabelOnCellule(0,5,"Option 2 :");
	pageexample.setLabelOnCellule(0,6,"Option 3 :");
	pageexample.setLabelOnCellule(0,7,"Option 4 :");
	pageexample.setLabelOnCellule(0,8,"Option 5 :");

	var input1=createElement("input","inp_name_onglet"+example.page.length,"","text");
	pageexample.setCellule(1,0,input1);

	for(var x=1 ; 4>=x ; x++){
		var input2=createElement("input","inp_name_champs"+example.page.length+"x"+x,"","text");
		var selectMandatory=createElement("select","selectMandatory"+example.page.length+"x"+x,"","",["Non","Oui"]);
		var selectType=createElement("select","selectType"+example.page.length+"x"+x,"","",["champs éditable","liste"]);
		selectType.setAttribute("onchange","selectChange(this,"+x+");");

		pageexample.setCellule(x,1,input2);
		pageexample.setCellule(x,2,selectMandatory);
		pageexample.setCellule(x,3,selectType);
	}
	pageexample.dettach();

	if(example.currentPage!=null) example.affichePage(example.currentPage);
}

function selectChange(ele,col){
	if(ele.value=="liste"){
		addForList(example.page[example.currentPage],col);
	}else{
		removeForList(example.page[example.currentPage],col);
	}
}

function addForList(page,col){
	
	var option1=createElement("input","option1"+(example.currentPage+1)+"x"+col,"","text");
	var option2=createElement("input","option2"+(example.currentPage+1)+"x"+col,"","text");
	var option3=createElement("input","option3"+(example.currentPage+1)+"x"+col,"","text");
	var option4=createElement("input","option4"+(example.currentPage+1)+"x"+col,"","text");
	var option5=createElement("input","option5"+(example.currentPage+1)+"x"+col,"","text");

	page.setCellule(col,4,option1);
	page.setCellule(col,5,option2);
	page.setCellule(col,6,option3);
	page.setCellule(col,7,option4);
	page.setCellule(col,8,option5);
}

function removeForList(page,col){
	page.clearCellule(col,4);
	page.clearCellule(col,5);
	page.clearCellule(col,6);
	page.clearCellule(col,7);
	page.clearCellule(col,8);
}

function create(){

	var name_theme=save["inp_name_theme"].value;
	var vers_theme=save["inp_vers_theme"].value;
	var id_inst=save["inp_id_inst"].value;
	var desc_inst=save["inp_desc_inst"].value;
	var min_vers=save["inp_min_vers"].value;
	var max_vers=save["inp_max_vers"].value;
	var creator=save["inp_creator"].value;
	var name_inst=save["inp_name_inst"].value;
	var listFr = hashWithId(save,"listFr");
	var listUs = hashWithId(save,"listUs");

	var listObjectStatic = [];
	var listObjectDyn = [];
	var listOnglets = [];
	var listAssociations = [];

	var name_onglet = hashWithId(save,"inp_name_onglet");

	for (var j in name_onglet) {
		if (name_onglet.hasOwnProperty(j)) {
			//alert();
			var ongletId = j.slice(-1,j.length);
			var ongletObj = new onglet(name_onglet[j]);
			var groupObj = new group(name_onglet[j]);
			
			
			var name_champs = hashWithId(save,"inp_name_champs"+ongletId);
			var selectType = hashWithId(save,"selectType"+ongletId);
			var selectMandatory = hashWithId(save,"selectMandatory"+ongletId);

			for (var k in name_champs) {
				if (name_champs.hasOwnProperty(k)) {
					var id = k.slice(-2,k.length);
					var object = new objectDyn(name_champs[k],selectType["selectType"+ongletId+id],selectMandatory["selectMandatory"+ongletId+id]);
					if(selectType["selectType"+ongletId+id]=="liste"){
						for(var x=1 ; 5>=x ; x++){
							if(save["option"+x+ongletId+id].value!=""){
								object.addOptions(save["option"+x+ongletId+id].value);
							}
						}
					}
					listObjectDyn.push(object);
					groupObj.addElement(object);
				}
			}
			ongletObj.addGroup(groupObj);
			listOnglets.push(ongletObj);
		}
	}

	if(name_theme==""||vers_theme==""||id_inst==""||desc_inst==""||min_vers==""||max_vers==""||creator==""||name_inst==""||listFr.length==0||listUs.length==0){
		alert("Manque valeur !");
		return;
	}

	var file="";
	var file = Components.classes["@mozilla.org/file/directory_service;1"]
                     .getService(Components.interfaces.nsIProperties)
                     .get("ProfD", Components.interfaces.nsIFile);
					 
	file.append("extensions");
	if( !file.exists() || !file.isDirectory() ) {   // S'il n'existe pas, le créer
	   file.create(Components.interfaces.nsIFile.DIRECTORY_TYPE, 0664);
	}
	
	
	
	file.append(name_theme+"@dga.tld");
	if( !file.exists() || !file.isDirectory() ) {   // S'il n'existe pas, le créer
	   file.create(Components.interfaces.nsIFile.DIRECTORY_TYPE, 0664);
	}

	var sPath=getFilePathInProfile("extensions/"+name_theme+"@dga.tld"+"/"+"install.rdf");
	
	var data = createRdf(name_theme,vers_theme,id_inst,desc_inst,min_vers,max_vers,creator);
	createFile(sPath,data);
	
	sPath=getFilePathInProfile("extensions/"+name_theme+"@dga.tld"+"/"+"chrome.manifest");
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
	
	sPath=getFilePathInProfile("extensions/"+name_theme+"@dga.tld"+"/chrome/content/"+"ximfmail-profile.xml");
	
	data = createXimfProfile(name_theme,name_inst,id_inst);
	createFile(sPath,data);
	
	file.append("Instance");
	if( !file.exists() || !file.isDirectory() ) {   // S'il n'existe pas, le créer
	   file.create(Components.interfaces.nsIFile.DIRECTORY_TYPE, 0664);
	}
	
	sPath=getFilePathInProfile("extensions/"+name_theme+"@dga.tld"+"/chrome/content/"+"Instance"+"/dictionary-"+name_inst+".xml");
	
	data = createDictionnary(name_inst,listFr,listUs);
	createFile(sPath,data);
	sPath=getFilePathInProfile("extensions/"+name_theme+"@dga.tld"+"/chrome/content/"+"Instance"+"/headers-"+name_inst+".xml");
	data = createHeaders(name_inst,listObjectStatic,listObjectDyn);
	createFile(sPath,data);

	sPath=getFilePathInProfile("extensions/"+name_theme+"@dga.tld"+"/chrome/content/"+"Instance"+"/ihm-"+name_inst+".xml");
	data = createIhm(name_inst,listOnglets);
	createFile(sPath,data);
	
	sPath=getFilePathInProfile("extensions/"+name_theme+"@dga.tld"+"/chrome/content/"+"Instance"+"/rules-"+name_inst+".xml");
	data = createRules(name_inst,listAssociations);
	createFile(sPath,data);
	
	
}

function hashWithId(hash,id){
	var return_hash = new Object();
	for (var k in hash) {
		if (hash.hasOwnProperty(k)) {
			if(k.match(id) && hash[k].value!=""){
				return_hash[k]=hash[k].value;
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

function createElement(tag,id="",value="",type="",options=[]){
	if(tag=="label" || tag=="table"){ var ele = document.createElementNS("http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul", "html:"+tag);}
	else{ var ele = document.createElementNS("http://www.w3.org/1999/xhtml", tag);}
	if(id!="")ele.setAttribute("id", id);
	if(value!="")ele.setAttribute("value", value);
	if(type!="")ele.setAttribute("type", type);
	if(tag=="select"){
		var option;
		for(var i=0 ; options.length>i ; i++){
			option = document.createElementNS("http://www.w3.org/1999/xhtml", "option");
			option.setAttribute("value",options[i]);
			option.innerHTML = options[i];
			ele.appendChild(option);
		}
	}
	if(tag=="input" || tag=="select"){save[id]=ele;}
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
	"<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<RDF xmlns=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns:em=\"http://www.mozilla.org/2004/em-rdf#\">\n  <Description about=\"urn:mozilla:install-manifest\">\n    <em:name>"+name_theme+"</em:name>\n    <em:version>"+vers_theme+"</em:version>\n    <em:unpack>true</em:unpack>\n    <em:id>"+name_theme+"@dga.tld"+"</em:id>\n    <em:description>"+desc_inst+"</em:description>\n    <em:targetApplication>\n      <!-- Thunderbird -->\n      <Description>\n       <em:id>{3550f703-e582-4d05-9a08-453d09bdfdc6}</em:id>\n       <em:minVersion>"+min_vers+"</em:minVersion>\n       <em:maxVersion>"+max_vers+"</em:maxVersion>\n      </Description>\n    </em:targetApplication>\n <em:creator>"+creator+"</em:creator>\n </Description>\n</RDF>";
	return data;
}

function createManifest(){
	var data = "";
	return data;
}

function createXimfProfile(name_theme,name_inst,id_inst){
	var data = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<profile>\n	<theme name=\" "+ name_theme + "\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:noNamespaceSchemaLocation=\"D:\\DOC\\DOC_THUN_INTRACED\\ximf_profile.xsd\">\n		<instance id=\"smtp\" ximfVersion=\"2.0\" version=\"1.0\" label=\"Message standard\" name=\"smtp\" directory=\"\" author=\"string\"/>\n		<instance id=\"id"+name_inst+"Definition\" ximfVersion=\"2.0\" version=\"1.0\"\n			name=\""+name_inst+"\"\n			directory=\""+name_theme+"@dga.tld"+"/chrome/content/Instance/\"\n			author=\"Ximfmail\">\n			<schema id=\"AAAAB\" name=\""+name_inst+"\">headers-"+name_inst+".xml</schema>\n			<dictionary author=\"EADS DS\">dictionary-"+name_inst+".xml</dictionary>\n			<ihm id=\"AAAAC\" name=\"string\">ihm-"+name_inst+".xml</ihm>\n			<rule id=\"AAAAD\" author=\"string\">rules-"+name_inst+".xml</rule>\n		</instance>\n	</theme>\n</profile>";
	return data;
}

function createDictionnary(name_inst,listFr,listUs){
	var data="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\n<ximf:instance name=\""+name_inst+"\" version=\"1.0\" ximfVersion=\"2.0\" xmlns:ximf=\"http://eads.org/ximf/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://eads.org/ximf/ ximf.xsd\">\n\t<ximf:dictionary id=\"OneDico\">\n\t\t<ximf:locale lang=\"fr\">\n";
	var tripleTab = "\t\t\t";
	ilk = [];
	var g = 0;
	for (var k in listFr) {
		if (listFr.hasOwnProperty(k)) {
			data += tripleTab;
			ilk.push(stringToIlk(listFr[k]));
			data += "<ximf:ilk entity=\"ilk-"+ilk[g++]+"\">"+listFr[k]+"</ximf:ilk>\n";			
		}
	}
	
	data += "\t\t</ximf:locale>\n\t\t<ximf:locale lang=\"en-US\">\n";
	g = 0;
	for (var k in listUs) {
		if (listUs.hasOwnProperty(k)) {
			data += tripleTab;
			data += "<ximf:ilk entity=\"ilk-"+ilk[g++]+"\">"+listUs[k]+"</ximf:ilk>\n";			
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
			data += "<ximf:header id=\"header-"+listObjectStatic[k].name+"\" headerName=\"X-XIMF-"+listObjectStatic[k].name+"\" >\t\t\r\n\t\t<ximf:string content=\""+listObjectStatic[k].value+"\"/>\r\n\t</ximf:header>\r";
	}
	
	for (var k in listObjectDyn) {
			alert(listObjectDyn[0].name);
			alert(k);
			alert(k.name);
			data += espace;
			data += "<ximf:header id=\"header-"+listObjectDyn[k].name+"\" \r\n\t\t\t\t headerName=\"X-XIMF-"+listObjectDyn[k].name+"\"\r\n\t\t\t\t type=\""+((listObjectDyn[k].type=="date")?"date":"string")+"\"\r\n\t\t\t\t ilk=\""+((findArray(ilk,listObjectDyn[k].name)!=-1)?"ilk-":"")+listObjectDyn[k].name+"\"\r\n\t\t\t\t isMandatory=\""+((listObjectDyn[k].mandatory=="Oui")?"true":"false")+"\">\r";
			
			if(listObjectDyn[k].type == "liste"){
				data += "\n\t\t<ximf:set id=\"value-"+listObjectDyn[k].name+"\">\r";
				for( var i in listObjectDyn[k].options){
					data += "\n\t\t\t<ximf:string ilk=\""+((findArray(ilk,listObjectDyn[k].options[i])!=-1)?"ilk-":"")+listObjectDyn[k].options[i]+"\" content=\""+listObjectDyn[k].options[i]+"\"/>\r";
				}
				data += "\n\t\t</ximf:set>\r";
			}else{
				data += "\n\t\t<ximf:string id=\"value-"+listObjectDyn[k].name+"\" editable=\"true\" />\r";
			}
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
	alert(listOnglets.length);
	for (var k in listOnglets) {
		alert("listOnglets");
		data += "\n\t<ximf:panel id=\"pane_"+listOnglets[k].name+"\" ilk=\""+((findArray(ilk,listOnglets[k].name)!=-1)?"ilk-":"")+listOnglets[k].name+"\">\r";
		for (var j in listOnglets[k].groups) {
			data += "\n\t\t<ximf:groupbox id=\"group-"+listOnglets[k].groups[j].name+"\" ilk=\""+((findArray(ilk,listOnglets[k].groups[j].name)!=-1)?"ilk-":"")+listOnglets[k].groups[j].name+"\">\r";
			for (var i in listOnglets[k].groups[j].elements) {
				data += "\n\t\t\t<ximf:headerRef>header-"+listOnglets[k].groups[j].elements[i].name+"</ximf:headerRef>\r";
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
		data += "\n\t\t\t\t<ximf:aliasHeader headerName=\"X-XIMF-"+listAssociations[k].contraint.name+"\" headerRef=\"X-XIMF-"+listAssociations[k].condition.name+"\">\r";
		for (var j in listAssociations[k].rules) {
			data += "\n\t\t\t\t<ximf:aliasValue valueName=\"";
			var bool=1;
			for (var i in listAssociations[k].rules[0]) {
				if(bool!=1){
					data += ",";
				}
				data += listAssociations[k].rules[0][i];
				bool=0;
			}
			bool=1;
			data += "\" valueRef=\"";
			for (var i in listAssociations[k].rules[1]) {
				if(bool!=1){
					data += ",";
				}
				data += listAssociations[k].rules[1][i];
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

function afficher(){
	for (var k in save) {
		// use hasOwnProperty to filter out keys from the Object.prototype
		if (save.hasOwnProperty(k)) {
			gConsole.logStringMessage('key is: ' + k + ', value is: ' + save[k]);
		}
	}
}

function createTableau(width,height,id){

	this.createElement = function(tag,id,value,type,options){
		if(tag=="label" || tag=="table"){ var ele = document.createElementNS("http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul", "html:"+tag);}
		else{ var ele = document.createElementNS("http://www.w3.org/1999/xhtml", tag);}
		if(id!=null)ele.setAttribute("id", id);
		if(value!=null)ele.setAttribute("value", value);
		if(type!=null)ele.setAttribute("type", type);
		if(tag=="select"){
			var option;
			for(var i=0 ; options.length>i ; i++){
				option = document.createElementNS("http://www.w3.org/1999/xhtml", "option");
				option.setAttribute("value",options[i]);
				option.innerHTML = options[i];
			}
		}
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
		this.width =x;
		this.height =y;
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

function findArray(array,value){
	for(var i = 0; i<array.length ; i++){
		if(array[i]==value) return 1;
	}
	return -1;
}