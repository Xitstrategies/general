//js resume/scripts/build.js

load("steal/rhino/rhino.js");
steal('steal/build',function(){
	steal.build('resume/scripts/build.html',{to: 'resume'});
});
