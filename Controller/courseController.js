const coursemodel = require("../Model/courseModel");

const insertCourse = async (req, resp) => {
    try {
        const { Cname, Tname, Duration, Fees } = req.body;

        await coursemodel.create({ Cname,Tname,Duration, Fees});

        resp.redirect("/displayCourse");

    } catch (error) {
        console.log(error);
    }
};

const displayCourse = async(req,resp)=>{
    try {
        const result = await coursemodel.find();
       resp.render("displayCourse", {
       courses: result
   });
    } catch(error) {
        console.log(error);
    }
};

const updateCourse = async(req,resp)=>{
    try {
    const{Cname,Tname,Duration,Fees} = req.body;
    await coursemodel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    resp.redirect("/displayCourse");
    } catch(error) {
        console.log(error);
        
    }
};

const deleteCourse = async(req,resp)=>{
    try {
        await coursemodel.findByIdAndDelete(req.params.id);
        resp.redirect("/displayCourse");
    } catch(error) {
        console.log(error); 
    }
};

const addCourse = (req,resp)=>{
    resp.render("addCourse")
};

const editCourse = async(req,resp)=>{
    try {
        const course = await coursemodel.findById(req.params.id);

        resp.render("editCourse", {
            course
        });

    } catch (error) {
        console.log(error);
    }
};

module.exports = {addCourse,displayCourse,deleteCourse,editCourse,insertCourse,updateCourse};

