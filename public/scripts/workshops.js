function buildWorkshops(data) {
    let html = "<div class='table rounded'>";
    const levelsMap = {
        "1": "No coding experience required",
        "2": "Some coding experience expected",
        "3": "Strong coding or independent project experience expected"
    };
    html += `<div class='rounded-top row mx-0 th py-2'>
                <div class='col-2 text-white'>
                    Time
                    </div>
                    <div class='col-6 text-white'>
                        Title
                    </div>
                    <div class='col-2 text-white'>
                        Host
                    </div>
                    <div class='col-2 text-white'>
                        Level
                    </div>
                </div>`;
    data.forEach((event, i) => {
        let row = "<div class='row mx-0 py-2'>";
        row += `
        <div class='col-2 font-weight-bold'>
        ${event['Start Time'].format("h:mma")} - ${event['End Time'].format("h:mma z")}

        </div>
        <div class='col-6'>
            <div class='collapse-wrapper border-0'>
                <span class="collapser collapsed d-flex align-start p-0" type="button" data-toggle="collapse" data-target="#event${i}" aria-expanded="false" aria-controls="event${i}">
                  ${event['Workshop Title']}
                </span>
              <div class="collapse border-0 p-0 mt-1" id="event${i}">
                  <p>${event['Workshop Description']}</p>
                  <p><b>Tags: </b>${makeChipList(event['Workshop Tags'])}</p>
                  <p><b>Software Requirements: </b>${makeRequirementsList(event['Software'])}</p>
                  <p><b>Prerequisites: </b>${makeRequirementsList(event['Prerequisites'])}</p>
                  ${event['Slide Deck'] ? `<a href="${event['Slide Deck']}" target="_new" class="badge badge-pill btn font-weight-normal p-2 px-3 ml-1">Slide Deck</a>` : ""}
                  ${event['Repository Link'] ? `<a href="${event['Repository Link']}" target="_new" class="badge badge-pill btn font-weight-normal p-2 px-3 ml-1">Repository Link</a>` : ""}
              </div>
            </div>
        </div>
        <div class='col-2'>
            ${event['Host']} (${event['Company']})
        </div>
        <div class='col-2'>
            ${levelsMap[event['Level']] ? `<img src="assets/images/workshop_levels/${event['Level']}.svg"
            width="75px"
            alt="Level ${event['Level']}" data-toggle="tooltip" title="${levelsMap[event['Level']]}">` : ''}
        </div>`;
        row += "</div>";
        html += row;
    });
    
    return html + "</div>";
}

function makeChipList(list) {
    if (list) {
        return list.split(",").map(item => item.trim()).map(item => `<span class='badge badge-pill mx-1 outlined font-weight-light'>${item}</span>`).join("");
    }
    else {
        return "N/A";
    }
}

function makeRequirementsList(list) {
    if (list) {
        return list.split(",").map(item => item.trim()).map(item => {
            if (item.indexOf("==") >= 0) {
                let title = item.split("==")[0];
                let link = item.split("==")[1];
                return `<a href="${link}" target="_new">${title}</a>`;
            } else {
                return item;
            }
        }).join(", ");
    }
    return "N/A";
}

function convertToLocalTime(row) {
    row["Start Time"] = moment.tz(row["Start Time"], "America/New_York").tz(moment.tz.guess());
    row["End Time"] = moment.tz(row["End Time"], "America/New_York").tz(moment.tz.guess());

    return row;
}

$(document).ready(function () {
    let workshops = "";
    fetchData('1kgP_HSuMv5Jl_VjZghFuIXBE_nTogxJO2CS2IR63Ik0', '4').then((data) => {
        workshops += buildWorkshops(data.filter(item => item != null).map(item => convertToLocalTime(item)));
        document.getElementById("workshops").innerHTML = workshops;
    });
    $("body").tooltip({ selector: '[data-toggle=tooltip]' });
});