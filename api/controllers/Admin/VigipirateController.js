/**
 * Admin\StudentController
 *
 * @description :: Server-side logic for managing Admin\students
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {

    listingParticipatingStudent: function (req, res, next) {
        return res.view('AdminLTE/Vigipirate/listingParticipatingStudents', {
            layout: 'Layout/AdminLTE'
        })
    },


    apiGetAllParticipatingStudents: (req, res, next) => {
        ParticipatingStudent.find().exec((err, students) => {
            if(err) {
                sails.log.error('[Admin/VigipirateController.apiGetAllParticipatingStudents] error when find all participating student:', err);
                return res.json(500, err);
            }

            return res.json(200, students);
        })
    }
};

