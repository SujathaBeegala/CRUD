var Register = require('../models/Register.js');

exports.index = function(req,res){
    res.render('register');
}

exports.postregister = function (req, res) {
    let register = new Register(
        {
            name: req.body.name,
        }
    );
    register.save(function (err) {
        if (err) {
            return next(err);
        }
        console.log('New User Registered successfully');
        res.redirect('/info');
    })
};
 
exports.information = function(req, res){
  Register.find(function(error, employees){
    res.render('index', {
          title: 'Employees',
          emps: employees
      });
});
};

exports.geteditemployee = function(req, res){
    Register.findById({_id: req.param('_id')}, function(error, employee) {
		res.render('editemployee',
		{ 
            employee: employee
		});
	});
  };

exports.posteditemployee = function(req, res){
   Register.updateMany({_id: req.param('_id')},{
    name: req.param('name'),
   } , function(error, docs) {
       res.redirect('/info')
      });
}

exports.postdeleteemployee = function(req, res){
    Register.deleteOne({_id: req.param('_id')}, function(error, docs) {
		res.redirect('/info')
	});
};
