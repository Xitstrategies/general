steal(
	'resume/experience/create',
	'resume/experience/list'
).then(
    '../css/bootstrap.min.css',
    '../css/bootstrap.min.js',
	'./resume.less',
	'./models/fixtures/fixtures.js',
function (ExperienceCreate, ExperienceList) {
	
	new ExperienceList('#experiences');
	new ExperienceCreate('#create');

});