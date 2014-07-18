//js resume/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs", function(DocumentJS){
	DocumentJS('resume/index.html', {
		out: 'resume/docs',
		markdown : ['resume', 'steal', 'jquery', 'can', 'funcunit'],
		parent : 'resume'
	});
});