const {mongoose} = require('../db/mongoose')

var LiverSchema = mongoose.Schema({
    patientID : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        minlength:1
    },
    parameters : [{
        tot_bilirubin : {
            type: Number,
            required: true
        }, 
        dir_bilirubin : {
            type: Number,
            required: true
        }, 
        tot_proteins : {
            type : Number, 
            required: true
        },
        ag_ratio : {
            type : Number,
            required: true
        }
    }]
})

var Liver = mongoose.Schema('Liver', LiverSchema)

module.exports = {Liver}