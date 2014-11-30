function swapPhoto(photoSRC) {
	document.images.imgPhoto.src = photoSRC;
}

function render_editor(a,b,c) {

if((!b||b=='rich')&&tinyMCE)
{tinyMCE.init({mode:"exact",elements:a,entities:"",cleanup_callback:(tinyMCE.isSafari?'mce_safari_cleanup':''),theme:"advanced",theme_advanced_layout_manager:"SimpleLayout",theme_advanced_buttons2:"",theme_advanced_buttons3:"",theme_advanced_toolbar_location:"top",content_css:"http://www.patrickmoberg.com/freelance/annawolf/stylesheets/custom_tinymce.css",convert_urls:false,valid_elements:"p[*],a[*],b[*],blockquote[*],br[*],code[*],dd[*],dl[*],dt[*],"+"del[*],em[*],i[*],ins[*],li[*],ol[*],pre[*],q[*],strong[*],u[*],"+"ul[*],s[*],script[*],img[*],hr[*],sub[*],sup[*],strike[*],"+"h1[*],h2[*],h3[*],h4[*],h5[*],h6[*]"+(tinyMCE.isSafari?',span[*]':''),theme_advanced_buttons1:(c?"bold,italic,separator,"+"bullist,numlist,separator,"+"link,unlink,separator,code":"bold,italic,strikethrough,separator,"+"bullist,numlist,separator,indent,outdent,separator,"+"image,link,unlink,separator,"+"spellchecker,separator,code"),width:'100%'});if(document.getElementById(a+'_is_rich_text')){document.getElementById(a+'_is_rich_text').value=1}}else{var d=document.createElement('div');d.setAttribute('class','mceEditorContainer mceEditor mceToolbarTop mceToolbarContainer');d.setAttribute('style','border-bottom:0px; width:auto;');d.innerHTML='<div style="float:right; font-size:9px; line-height:22px; padding-right:10px; color:#888;">'+(b=='markdown'?'<a href="http://daringfireball.net/projects/markdown/syntax" target="_blank" style="color:#888;">markdown</a>':'HTML enabled')+'</div><a href="#" class="mceButtonNormal" onclick="'+(b=='markdown'?'insertTag(\''+a+'\', \'**\', \'**\');':'insertTag(\''+a+'\', \'<b>\', \'</b>\');')+' return false;"><img title="Bold" alt="Bold" src="/javascript/tiny_mce/themes/advanced/images/bold.gif"/></a><a href="#" class="mceButtonNormal" onclick="'+(b=='markdown'?'insertTag(\''+a+'\', \'_\', \'_\');':'insertTag(\''+a+'\', \'<i>\', \'</i>\');')+' return false;"><img title="Italic" alt="Italic" src="/javascript/tiny_mce/themes/advanced/images/italic.gif"/></a>'+((b=='markdown')?'':'<a href="#" class="mceButtonNormal" onclick="insertTag(\''+a+'\', \'<strike>\', \'</strike>\'); return false;"><img title="Strikethrough" alt="Strikethrough" src="/javascript/tiny_mce/themes/advanced/images/strikethrough.gif"/></a>')+'<a href="#" class="mceButtonNormal" onclick="'+(b=='markdown'?'insertTag(\''+a+'\', \'[\', \'](\' + prompt(\'Enter the URL:\', \'http://\') + \')\');':'insertTag(\''+a+'\', \'<a href=&quot;\' + prompt(\'Enter the URL:\', \'http://\') + \'&quot;>\', \'</a>\');')+' return false;"><img title="Insert link" alt="Insert link" src="/javascript/tiny_mce/themes/advanced/images/link.gif"/></a>';document.getElementById(a).parentNode.insertBefore(d,document.getElementById(a))}
	
}

function add_filebox(type)
{
	//Using random numbers for this value is pretty n00b - think through it more - but hey it works...		
	var id = Math.round(Math.random()*10000)
	
	var div = document.createElement("div");
	div.setAttribute("id", type + "_file_" + id);
	
	var inpt = document.createElement("input");
	inpt.setAttribute("type", "file");
	inpt.setAttribute("name", "file_" + id);
	inpt.setAttribute("value", id);
	
	var lnk = document.createElement("input");
	lnk.setAttribute("onclick", "removeElement('" + type + "','" + id + "')");
	lnk.setAttribute("type", "button");
	lnk.setAttribute("value", "remove");
	lnk.setAttribute("style", "margin:0; padding:1px; border: 0; background: transparent;");
	
	div.appendChild(inpt);
	div.appendChild(lnk);
	
	document.getElementById(type + "_filebox").appendChild(div);
}

function removeElement(type, id) {
 		 	
 	var d = document.getElementById(type + '_filebox');
  	
  	var olddiv = document.getElementById(type + '_file_' + id);
 	
 	d.removeChild(olddiv);
}
