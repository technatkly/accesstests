/** ------------- FUNCTIONS ON MODAL -------------- */

const modalbtn = document.querySelectorAll(".modal-btn");
const t = document.querySelectorAll(".modal-table");
const crossbtn = document.querySelectorAll(".cross-btn");

/**
 * Event Listener activated by clicking button inside the modal, which shows table and hide the button.
 * @date 2022-11-05
 * @returns {elements}
 */
modalbtn.forEach((mb) => {
    mb.addEventListener("click", () => {
        t.forEach((ta) => {
            if (ta.classList.contains("d-none")) {
                ta.classList.remove("d-none");
                mb.classList.add("d-none");
            }
        });
    });
});
/**
 * Event Listener activated by clicking the cross button inside the modal, which hides the modal and reset settings on modal, i.e. displaying table.
 * @date 2022-11-05
 * @returns {elements}
 */
crossbtn.forEach((cb) => {
    cb.addEventListener("click", () => {
        modalbtn.forEach((mb) => {
            if (mb.classList.contains("d-none")) {
                mb.classList.remove("d-none");
            }
        });
        t.forEach((ta) => {
            if (!ta.classList.contains("d-none")) {
                ta.classList.add("d-none");
            }
        });
    });
});

/** ------------- FUNCTIONS ON SEARCH BAR -------------- */

/** ------------------------
  Adapted and modified from W3Schools:

  W3Schools (2022) How To Create a Filter/Search List. Available at: https://www.w3schools.com/howto/howto_js_filter_lists.asp (Accessed: 1 Dec 2022).
  ------------------------- */
/**
 * Function to filter cards of country accoring to user search.
 * @date 2022-11-24
 * @returns {elements}
 */
function filterCard() {
    const input = document.getElementById("searchbar");
    const filter = input.value.toUpperCase();
    const item = document.getElementsByClassName("col");
    let count = 9;

    for (let i = 0; i < item.length; i++) {
        const a = item[i].getElementsByClassName("card-title")[0];
        if (a.textContent.toUpperCase().indexOf(filter) > -1) {
            item[i].style.display = "";
        } else {
            item[i].style.display = "none";
            count -= 1;
        }
    }
    const sf = document.getElementById("search-failure");
    if (count === 0) {
        sf.classList.remove("d-none");
    } else {
        sf.classList.add("d-none");
    }
}

/** ------------- FUNCTIONS ON CONTACT -------------- */

/**
 * Adapted and modified from:
 * Holtz, Y. (2018) Choropleth map with hover effect in d3.js. Available at https://d3-graph-gallery.com/graph/choropleth_hover_effect.html (Accessed: 3 Dec 2022).
 */

/**
 * Class to create Subscriber profile
 */
class Subscriber {
    /**
     * Create a Subscriber.
     * @param {text} name
     * @param {text} email
     * @param {text} country
     */
    constructor(name, email, country) {
        this.name = name;
        this.email = email;
        this.country = country;
    }

    /**
     * Check if Subscriber's country has already been included in the data
     * @returns {text}
     */
    checkCountry() {
        const clist = [
            "AFGANISTAN",
            "AUSTRALIA",
            "DENMARK",
            "FINLAND",
            "FRANCE",
            "NORWAY",
            "SINGAPORE",
            "UNITED KINGDOM",
            "UK",
            "BRITAIN",
            "UNITED STATES",
            "US",
            "AMERICA",
        ];
        if (clist.includes(this.country.toUpperCase())) {
            return "We will notify you when we updated anything!";
        } else {
            return `We will add ${this.country} very very soon!`;
        }
    }
}

const subbtn = document.getElementById("subscribe");
/**
 * Event Listener activated by clicking which shows the success alert.
 * @returns {elements}
 */
subbtn.addEventListener("click", () => {
    const inputname = document.getElementById("input-name").value;
    const inputemail = document.getElementById("input-email").value;
    const inputcountry = document.getElementById("input-country").value;
    const sub = new Subscriber(inputname, inputemail, inputcountry);
    document.getElementById("alert-text").textContent =
        "Thank you very much for subscribing, " +
        sub.name +
        "! " +
        sub.checkCountry();
    const alertt = document.getElementById("alert");
    alertt.classList.add("show");
});

/** ------------- D3 GRAPH -------------- */

const svg = d3.select("#barchart");
const width = +svg.attr("width");
const height = +svg.attr("height");

/** ap and projection */
const path = d3.geoPath();
const projection = d3
    .geoMercator()
    .scale(140)
    .center([20, 20])
    .translate([width / 2, height / 1.4]);

/** Data and color scale */
const data = new Map();
const colorScale = d3
    .scaleThreshold()
    .domain([3000, 4000, 5000, 6000, 7000])
    .range(d3.schemeBlues[7]);

/**
 * Load external data and boot
 */
Promise.all([
    d3.json(
        "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"
    ),
    /**
     * function to map data
     */
    d3.csv("2022.csv", function (d) {
        data.set(d.code, +d.score);
    }),
]).then(function (loadData) {
    const topo = loadData[0];

    const tooltip = d3
        .select("#barchart")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "1px")
        .style("border-radius", "5px")
        .style("padding", "10px");

    /**
     * Function to have interactive elements when user hovering on map
     * @param event
     * @param d
     */
    const mouseover = function (event, d) {
        const subgroupName = d.country;
        const subgroupValue = d.score;
        d3.selectAll(".Country")
            .transition()
            .duration(200)
            .style("opacity", 0.5);
        d3.select(this)
            .transition()
            .duration(200)
            .style("opacity", 1)
            .style("stroke", "black");
        tooltip
            .html(
                "subgroup: " + subgroupName + "<br>" + "Score: " + subgroupValue
            )
            .style("opacity", 1);
    };
    /**
     * Function to have interactive elements when user moving on map
     * @param event
     * @param d
     */
    const mousemove = function (event, d) {
        tooltip
            .style("transform", "translateY(-55%)")
            .style("left", event.x / 2 + "px")
            .style("top", event.y / 2 - 30 + "px");
    };
    /**
     * Function to have interactive elements when user leaving the map
     * @param event
     * @param d
     */
    const mouseleave = function (event, d) {
        tooltip.style("opacity", 0);
        d3.selectAll(".Country")
            .transition()
            .duration(200)
            .style("opacity", 0.8);
        d3.select(this)
            .transition()
            .duration(200)
            .style("stroke", "transparent");
    };

    /**
     * Draw the map
     */
    svg.append("g")
        .selectAll("path")
        .data(topo.features)
        .join("path")
        // draw each country
        .attr("d", d3.geoPath().projection(projection))
        // set the color of each country
        .attr("fill", function (d) {
            d.total = data.get(d.id) || 0;
            return colorScale(d.total);
        })
        .style("stroke", "transparent")
        .attr("class", function (d) {
            return "Country";
        })
        .style("opacity", 0.8)
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave);
});
