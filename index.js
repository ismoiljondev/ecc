function slope(x1, y1, x2, y2, a) {
	if (x1 === x2 && y1 === y2) {
		const numerator = 3 * x1 * x1 + a;
		const denominator = 2 * y1;
		return numerator / denominator;
	} else {
		return (y2 - y1) / (x2 - x1);
	}
}

function pointAddition(Px, Py, Qx, Qy, a) {
	const s = slope(Px, Py, Qx, Qy, a);

	const x3 = s * s - Px - Qx;
	const y3 = s * (Px - x3) - Py;

	return { x: x3, y: y3 };
}

function pointDoubling(Qx, Qy, a) {
	const s = slope(Qx, Qy, Qx, Qy, a);

	const x3 = s * s - 2 * Qx;
	const y3 = s * (Qx - x3) - Qy;

	return { x: x3, y: y3 };
}
function computeResults() {
	const Px = parseInt(document.getElementById("pointPx").value);
	const Py = parseInt(document.getElementById("pointPy").value);
	const Qx = parseInt(document.getElementById("pointQx").value);
	const Qy = parseInt(document.getElementById("pointQy").value);

	const a = 0;
	const b = 7;

	const R = pointAddition(Px, Py, Qx, Qy, a);
	const D = pointDoubling(Qx, Qy, a);
	const D2P = pointDoubling(Px, Py, a);

	document.getElementById("results").innerHTML = `
        <h2>Results</h2>
        <p>R=(P + Q): (${R.x}, ${R.y})</p>
        <p>D=(2Q): (${D.x}, ${D.y})</p>
        <p>D=(2P): (${D2P.x}, ${D2P.y})</p>
    `;
}
