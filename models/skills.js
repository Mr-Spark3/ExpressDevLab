const skills =[
    {id: 1, skill: 'HTML & CSS', learned: true},
    {id: 2, skill: 'Javascript', learned: true},
    {id: 3, skill: 'Express Framework', learned: true},
    {id: 4, skill: 'Python', learned: false},
    {id: 5, skill: 'Problem Solving', learned: true},
    ];

    const getAll = () =>{
        return skills;
    };
    
    const getOne = (id) =>{
     id = parseInt(id);
     return skills.find(skill => skill.id === id);
    }
    
    
    module.exports = {
        getAll,
        getOne,
        create,
        deleteOne
    };

    function create(skill) {
        skill.id = Date.now() % 1000000;
        skill.learned = false;
        skills.push(skill);
    }

    function deleteOne(id) {
        id = parseInt(id);
        const idx = skills.findIndex(skill => skill.id === id);
        skills.splice(idx, 1);
      }