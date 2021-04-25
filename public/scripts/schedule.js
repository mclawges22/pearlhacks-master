function buildScheduleTable(data, header) {
    let html = "<div class='table rounded'>";
    html += `<div class='rounded-top row mx-0 text-center font-weight-bold th py-2 text-uppercase'>
                <div class='col-12'>  
                    ${header}
                </div>
            </div>`;
    data.forEach((event) => {
        let row = "<div class='row mx-0 text-center py-2'>";
        row += `
        <div class='col-6 font-weight-bold'>
            ${event['Time']}
        </div>
        <div class='col-6'>
            ${event['Event']}
        </div>`;
        row += "</div>";
        html += row;
    });
    
    return html + "</div>";
}

function buildTable(day) {
    let html = "<div class='table mt-4 rounded'>";
    html += `<div class='rounded-top row mx-0 text-center font-weight-bold th py-2'>
                <div class='col-12 text-white'>  
                    ${Object.keys(day)[0]}
                </div>
            </div>`;
    day[Object.keys(day)[0]].forEach((event) => {
        let row = "<div class='row mx-0 text-center py-2'>";
        row += `
        <div class='col-4 font-weight-bold'>
            ${event['Start Time'].format("h:mma")} ${event['Start Time'].format("h:mma") != event['End Time'].format("h:mma") ? "- " + event['End Time'].format("h:mma z") : event['End Time'].format("z")}
        </div>
        <div class='col-4'>
            ${event['Event']}
        </div>
        <div class='col-4'>
        ${event['Location']}
    </div>`;
        row += "</div>";
        html += row;
    });
    
    return html + "</div>";
}

function buildSchedule(data) {
    data = data.map((row) => convertToLocalTime(row));
    let partitionedDates = [];
    data.forEach(row => {
        let start = row["Start Time"];
        let day = start.format("dddd, MMMM Do");
        if (partitionedDates.length == 0) {
            partitionedDates.push({[day]: []});
        }
        else if (Object.keys(partitionedDates[partitionedDates.length - 1])[0] != day) {
            partitionedDates.push({[day]: []});
        }
        partitionedDates[partitionedDates.length - 1][day].push(row)
    });
    let html = ""
    partitionedDates.forEach(day => {
        html += buildTable(day);
    });

    return html;
}

function convertToLocalTime(row) {
    row["Start Time"] = moment.tz(row["Start Time"], "America/New_York").tz(moment.tz.guess());
    row["End Time"] = moment.tz(row["End Time"], "America/New_York").tz(moment.tz.guess());

    return row;
}

$(document).ready(function () {
    let schedule = "";

    fetchData('1kgP_HSuMv5Jl_VjZghFuIXBE_nTogxJO2CS2IR63Ik0', '5').then((data) => {
        schedule += buildSchedule(data.filter(item => item != null));
        document.getElementById("schedule").innerHTML = schedule;
        document.getElementById("timezone").innerHTML = "Detected Time Zone: " + moment.tz().tz(moment.tz.guess()).format("z");
    }).catch((error) => {
        console.log(error);
    })
});
