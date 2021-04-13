const dummy = [...new Array(12)];

const md = dummy.map((_, idx) => `col-md-${++idx}`);
const normal = dummy.map((_, idx) => `col-${++idx}`);

module.exports = [...md, ...normal, /^modal-/, "btn-secondary"];
