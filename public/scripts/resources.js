function buildHTMLString(groups) {
    let html = "";

    Object.keys(groups).forEach(key => {
        html += `<h2 class="mt-5">${key}</h2>`
        groups[key].forEach(resources => {
            html += `<p><a href="${resources["Link"]}" target="_new">${resources["Title"]}</a> <span>${resources["More Info"] ? resources["More Info"] : ""}</span></p>`
        });
    });

    return html;
}

function partitionResources(data) {
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
    fetchData('1kgP_HSuMv5Jl_VjZghFuIXBE_nTogxJO2CS2IR63Ik0', '7').then((data) => {
        let groups = partitionResources(data.filter(item => !!item));
        document.getElementById("resources").innerHTML = buildHTMLString(groups)
    });
});