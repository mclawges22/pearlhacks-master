function buildFAQs(groups) {
    let html ="";

    Object.keys(groups).forEach(key => {
        html += buildHTMLString(groups[key], key);
    });

    return html;
}

function buildHTMLString(data, key) {
    let id = key.replaceAll(" ", "").replaceAll("'", "").toLowerCase();
    console.log(id);
    let html = `<h2 class='mt-5'>${key}</h2>`;
    html += "<div class='row'>";
    let col1 = "<div class='col-12 col-lg-6'>";
    let col2 = "<div class='col-12 col-lg-6'>";
    data.forEach((question, i) => {
        if (i < data.length / 2) {
            col1 += `
            <div class='rounded collapse-wrapper mb-2'>
                <h3 class='h5 m-0 font-weight-normal collapser collapsed' data-toggle="collapse" aria-expanded="false" data-target="#${id}${i}">${question['Question']}</h3>
                <div class="collapse py-2 pr-2" id="${id}${i}">${question['Answer']}</div>
            </div>`
        }

        else {
            col2 += `
            <div class='rounded collapse-wrapper mb-2'>
                <h3 class='h5 m-0 font-weight-normal collapser collapsed' data-toggle="collapse" aria-expanded="false" data-target="#${id}${i}">${question['Question']}</h3>
                <div class="collapse py-2 pr-2" id="${id}${i}">${question['Answer']}</div>
            </div>`
        }
    });
    col1 += "</div>"
    col2 += "</div>"
    html += col1 + col2 + "</div>"

    return html;
}

function partitionFAQs(data) {
    let groups = {};
    data.forEach(item => {
        if (!groups[item["Category"]]) {
            groups[item["Category"]] = [];
        }
        groups[item["Category"]].push(item);
    });
    
    return groups;
}


$(document).ready(function () {
    fetchData('1kgP_HSuMv5Jl_VjZghFuIXBE_nTogxJO2CS2IR63Ik0', '2').then((data) => {
        let groups = partitionFAQs(data.filter(item => !!item));
        document.getElementById("faqs").innerHTML = buildFAQs(groups);
    });
});