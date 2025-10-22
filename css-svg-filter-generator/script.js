// JS filter to find a filter
document.getElementById("search").addEventListener("input", function () {
	const query = this.value.toLowerCase();
	const filters = document.querySelectorAll(".filter-range");

	filters.forEach((filter) => {
		const filterName = filter.getAttribute("data-filter-name").toLowerCase();
		if (filterName.includes(query)) {
			filter.style.display = "block";
		} else {
			filter.style.display = "none";
		}
	});
});

const image = document.getElementById("currentImage");

const inputs = {
	greyscale: document.getElementById("greyscale"),
	sepia: document.getElementById("sepia"),
	blur: document.getElementById("blur"),
	brightness: document.getElementById("brightness"),
	huerotate: document.getElementById("huerotate"),
	saturate: document.getElementById("saturate"),
	opacity: document.getElementById("opacity"),
	contrast: document.getElementById("contrast"),
	invert: document.getElementById("invert"),
	svgEdges: document.getElementById("svg-edges"),
	svgEdgesCheckbox: document.getElementById("svg-edges-checkbox")
};

const valueLabels = {
	greyscale: document.getElementById("greyscale-value"),
	sepia: document.getElementById("sepia-value"),
	blur: document.getElementById("blur-value"),
	brightness: document.getElementById("brightness-value"),
	huerotate: document.getElementById("huerotate-value"),
	saturate: document.getElementById("saturate-value"),
	opacity: document.getElementById("opacity-value"),
	contrast: document.getElementById("contrast-value"),
	invert: document.getElementById("invert-value"),
	svgEdges: document.getElementById("svg-edges-value")
};

const resultSpan = document.getElementById("result");

function updateFilter() {
	const filterValues = {
		greyscale: inputs.greyscale.value + "%",
		sepia: inputs.sepia.value + "%",
		blur: inputs.blur.value + "px",
		brightness: inputs.brightness.value + "%",
		huerotate: inputs.huerotate.value + "deg",
		saturate: inputs.saturate.value + "%",
		opacity: inputs.opacity.value + "%",
		contrast: inputs.contrast.value + "%",
		invert: inputs.invert.value + "%"
	};

	// Update the labels with the current values
	Object.keys(valueLabels).forEach((key) => {
		if (key !== "svgEdges") {
			valueLabels[key].textContent = ` ${filterValues[key]}`;
		}
	});
	valueLabels.svgEdges.textContent = ` ${inputs.svgEdges.value}%`;

	// Construct the filter string, excluding default values
	let filterValue = "";
	if (inputs.greyscale.value != 0)
		filterValue += `grayscale(${filterValues.greyscale}) `;
	if (inputs.sepia.value != 0) filterValue += `sepia(${filterValues.sepia}) `;
	if (inputs.blur.value != 0) filterValue += `blur(${filterValues.blur}) `;
	if (inputs.brightness.value != 100)
		filterValue += `brightness(${filterValues.brightness}) `;
	if (inputs.huerotate.value != 0)
		filterValue += `hue-rotate(${filterValues.huerotate}) `;
	if (inputs.saturate.value != 100)
		filterValue += `saturate(${filterValues.saturate}) `;
	if (inputs.opacity.value != 100)
		filterValue += `opacity(${filterValues.opacity}) `;
	if (inputs.contrast.value != 100)
		filterValue += `contrast(${filterValues.contrast}) `;
	if (inputs.invert.value != 0) filterValue += `invert(${filterValues.invert}) `;
	filterValue = filterValue.trim();

	// Apply the filter to the image
	if (inputs.svgEdgesCheckbox.checked) {
		image.style.filter = `url(#svgEdges) ${filterValue}`;
	} else {
		image.style.filter = filterValue;
	}

	// Update the result span
	resultSpan.textContent = `filter: ${filterValue}`;
}

function updateSvgFilter() {
	inputs.svgEdgesCheckbox.checked = true;
	var svgEdges = `
        <svg xmlns="http://www.w3.org/2000/svg">
            <filter id="svgEdges">
                <feConvolveMatrix order="3 3" preserveAlpha="true" divisor="1" bias="${inputs.svgEdges.value}" kernelMatrix="-1,-1,-1 -1,9,-1 -1,-1,-1" />
            </filter>
        </svg>
    `;
	document.getElementById("svg-filters").innerHTML = svgEdges;
	document.getElementById("resultHtml").textContent =
		'<div id="svg-filters">' + svgEdges + "</div>";
	updateFilter();
}

function checkSvgFilter() {
	if (inputs.svgEdgesCheckbox.checked) {
		updateSvgFilter();
	} else {
		inputs.svgEdgesCheckbox.checked = false;
		document.getElementById("svg-filters").innerHTML = "";
		updateFilter();
	}
}

// Add event listeners
Object.values(inputs).forEach((input) => {
	input.addEventListener("input", () => {
		if (input === inputs.svgEdges) {
			updateSvgFilter();
		} else if (input === inputs.svgEdgesCheckbox) {
			checkSvgFilter();
		} else {
			updateFilter();
		}
	});
});

// Initialize the filter on page load
updateFilter();

// Play with filters

// Update input values and dispatch input event
function updateInputs(newValues) {
	Object.keys(newValues).forEach((key) => {
		const input = document.getElementById(key);
		if (input) {
			input.value = newValues[key];
			// Trigger input event to update the filter
			input.dispatchEvent(new Event("input"));
		}
	});
}

// Function to apply creepy style
function creepyStyle() {
	const newValues = {
		greyscale: 78,
		sepia: 57,
		blur: 0,
		brightness: 167,
		huerotate: 138,
		saturate: 232,
		opacity: 100,
		contrast: 100,
		invert: 100
	};
	inputs.svgEdgesCheckbox.checked = false;
	var svgEdges = ``;
	document.getElementById("svg-filters").innerHTML = svgEdges;
	updateInputs(newValues);
}

// Function to reset style
function resetStyle() {
	const newValues = {
		greyscale: 0,
		sepia: 0,
		blur: 0,
		brightness: 100,
		huerotate: 0,
		saturate: 100,
		opacity: 100,
		contrast: 100,
		invert: 0
	};
	inputs.svgEdgesCheckbox.checked = false;
	var svgEdges = ``;
	document.getElementById("svg-filters").innerHTML = svgEdges;
	updateInputs(newValues);
}

// Function to apply bright style
function brightStyle() {
	const newValues = {
		greyscale: 25,
		sepia: 0,
		blur: 0,
		brightness: 160,
		huerotate: 0,
		saturate: 100,
		opacity: 100,
		contrast: 110,
		invert: 0
	};
	inputs.svgEdgesCheckbox.checked = false;
	var svgEdges = ``;
	document.getElementById("svg-filters").innerHTML = svgEdges;
	updateInputs(newValues);
}

// Function to apply old style
function oldStyle() {
	const newValues = {
		greyscale: 0,
		sepia: 100,
		blur: 0,
		brightness: 100,
		huerotate: 0,
		saturate: 100,
		opacity: 100,
		contrast: 110,
		invert: 0
	};

	inputs.svgEdgesCheckbox.checked = true;
	var svgEdges = `
        <svg xmlns="http://www.w3.org/2000/svg">
            <filter id="svgEdges">
                <feConvolveMatrix order="3 3" preserveAlpha="true" divisor="1" bias="0" kernelMatrix="-1,-1,-1 -1,9,-1 -1,-1,-1" />
            </filter>
        </svg>
    `;
	document.getElementById("svg-filters").innerHTML = svgEdges;
	updateInputs(newValues);
}

// Function to apply old style
function rawStyle() {
	const newValues = {
		greyscale: 100,
		sepia: 0,
		blur: 0,
		brightness: 200,
		huerotate: 0,
		saturate: 0,
		opacity: 100,
		contrast: 180,
		invert: 0
	};

	inputs.svgEdgesCheckbox.checked = true;
	var svgEdges = `
        <svg xmlns="http://www.w3.org/2000/svg">
            <filter id="svgEdges">
                <feConvolveMatrix order="3 3" preserveAlpha="true" divisor="1" bias="-0.05" kernelMatrix="-1,-1,-1 -1,9,-1 -1,-1,-1" />
            </filter>
        </svg>
    `;
	document.getElementById("svg-filters").innerHTML = svgEdges;
	updateInputs(newValues);
}

// Function to apply old style
function nuclearStyle() {
	const newValues = {
		greyscale: 0,
		sepia: 100,
		blur: 0,
		brightness: 105,
		huerotate: 340,
		saturate: 1000,
		opacity: 100,
		contrast: 205,
		invert: 0
	};

	inputs.svgEdgesCheckbox.checked = false;
	var svgEdges = ``;
	document.getElementById("svg-filters").innerHTML = svgEdges;
	updateInputs(newValues);
}

// Add event listeners to the buttons
document.getElementById("resetStyle").addEventListener("click", resetStyle);
document.getElementById("brightStyle").addEventListener("click", brightStyle);
document.getElementById("creepyStyle").addEventListener("click", creepyStyle);
document.getElementById("oldStyle").addEventListener("click", oldStyle);
document.getElementById("rawStyle").addEventListener("click", rawStyle);
document.getElementById("nuclearStyle").addEventListener("click", nuclearStyle);

document
	.getElementById("imageUpload")
	.addEventListener("change", function (event) {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = function (e) {
				const img = document.getElementById("currentImage");
				img.src = e.target.result;
				img.onload = function () {
					// Make the image container visible when the image is loaded
					document.getElementById("image").style.display = "block";
				};
			};
			reader.readAsDataURL(file);
			// Save the file extension
			window.uploadedFileExtension = file.name.split(".").pop();
		}
	});