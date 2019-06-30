// const mongoose = require('mongoose/browser');
var $ = require('jquery');
// var Schema = mongoose.Schema;

// let uri = 'mongodb://plamendbuser:Test1234!@ds263156.mlab.com:63156/dayana-portfolio';
// var yourSchema = new Schema({
//     key_dates: String
// });
// mongoose.connect(uri, { useNewUrlParser: true });
// var MyModel = mongoose.model('Test', yourSchema);
// // Works
// MyModel.findOne(function (error, result) {
//     console.log(err)
//     console.log(res)
// });
$(document).ready(function () {
    var development_record_records = [
        [1, 2, 3, 4, 5],
        [12, 24, 23, 2124, 125],
        [1125, 552, 233, 234, 5312],
        [15, 223, 3214, 4412, 5123],
        [2311, 552, 323, 423, 5123],
        [361, 72, 1233, 2314, 55125],
    ];

    var development_record_head_data = [
        "What do I want/need to learn?",
        "What will I do to achieve this?",
        "What resources or support will I need?",
        "What will my success criteria be?",
        "Target dates for review and completion"
    ];

    var development_plan_records = [
        [1, 2, 3, 4],
        [12, 24, 23, 2124],
        [1125, 552, 233, 234],
        [15, 223, 3214, 4412],
        [2311, 552, 323, 423],
        [361, 72, 1233, 2314],
    ];

    var development_plan_data = [
        "Name of the subject",
        "Title of the assignment",
        "Evaluation",
        "File"
    ];

    var assignments_records = [
        [1, 2, 3, 4, 5],
        [12, 24, 23, 2124, 125],
        [1125, 552, 233, 234, 5312],
        [15, 223, 3214, 4412, 5123],
        [2311, 552, 323, 423, 5123],
        [361, 72, 1233, 2314, 55125],
    ];

    var assignments_data = [
        "What do I want/need to learn?",
        "What will I do to achieve this?",
        "What resources or support will I need?",
        "What will my success criteria be?",
        "Target dates for review and completion"
    ];

    $('#home_button').on('click', function (e) {
        $("#tbody_id").append(generateEditList(count));
    })
    $('#about').on('click', function (e) {
        $('#container').html($("#about_page").html());
    })
    $('#portfolio').on('click', function (e) {
        $('#container').html($("#portfolio_page").html());
        $("#dani_pic").height(400)
    })

    $('#development_record').on('click', function (e) {
        setupTableWithHeadersAndData(development_record_head_data, development_record_records)
    })
    $('#development_plan').on('click', function (e) {
        setupTableWithHeadersAndData(development_plan_data, development_plan_records)
    })
    $('#assignments').on('click', function (e) {
        setupTableWithHeadersAndData(assignments_data, assignments_records)
    })

    function setupTableWithHeadersAndData(tableHeadAar, data) {
        $('#container').html($("#table_template").html());
        $("#thead_id").append(generateTableHead(tableHeadAar));
        var count = data[0].length;
        data.forEach(arrLine => {
            $("#tbody_id").append(generateRow(arrLine));
        });
        $("#tbody_id").append(generateEditList(count));
        $('#add_dev_record').on('click', function (e) {
            var formInput = [];
            for (var i = 0; i < count; i++) {
                var currentItemText = $('#record_' + i).val();
                formInput.push(currentItemText)
            }
            $(generateRow(formInput)).insertBefore($('#edit_list_row'));
        });
    }

    function generateRow(arr) {
        var table_body = "<tr>";
        for (var j = 0; j < arr.length; j++) {
            table_body += '<td>';
            table_body += arr[j];
            table_body += '</td>';
        }
        table_body += '</tr>';
        return table_body
    }

    function generateTableHead(arr) {
        var table_body = "<tr>";
        for (var i = 0; i < arr.length; i++) {
            table_body += '<th scope="col">';
            table_body += arr[i];
            table_body += '</th>';
        }
        table_body += '</tr>';
        return table_body;
    }

    function generateEditList(count) {
        var table_body = '<tr id="edit_list_row">';
        for (var j = 0; j < count; j++) {
            table_body += '<td>';
            table_body += '<textarea class="form-control" rows="1" id="record_' + j + '">';
            table_body += '</textarea>';
            table_body += '</td>';
        }
        table_body += '<td>';
        table_body += '<a id="add_dev_record" href="#" style="text-decoration: underline" class="active">ADD</a>';
        table_body += '</td>';
        table_body += '</tr>';
        return table_body
    }
});