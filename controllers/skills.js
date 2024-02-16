const Skill = require('../models/skills');




const index = (req, res) =>{
   res.render('skills/index',{
     skills: Skill.getAll(),
     title : "All Skills"
   });
}


const show = (req,res) =>{
    res.render('skills/show',{
        skill: Skill.getOne(req.params.id),
        title : "Show Page",
    })
}



module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
    
};

function newSkill(req, res) {
    res.render('skills/new', { title: 'New Skill'});
}

function create(req, res) {
    res.redirect('/skills');
  }
	
function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}


