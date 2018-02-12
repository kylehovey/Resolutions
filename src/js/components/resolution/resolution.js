/**
 * Resolution component
 */
export default class Resolution {
  /**
   * Construct a resolution on the page
   * @param {String} container ID of container
   * @param {String} goal Title of resolution
   * @param {Boolean} progressBar True if progressbar should be rendered
   * @param {Number} progressGoal Quantity for resolution
   * @param {String} unit Type of thing being measured
   */
  constructor(opts) {
    this._opts = Object.assign({
      container : "body",
      goal : "Do a thing.",
      progressBar : false,
      progressGoal : 100,
      unit : "%"
    }, opts);

    this._element = $(`
      <li class="resolution">
        ${this._opts.goal}
        ${this._opts.progressBar ? `
          <div class="progress progress-striped">
            <div class="progress-bar" style="width:0%">
              0 ${this._opts.unit}
            </div>
          </div>
        ` : ""}
      </li>
    `);

    $(`#${this._opts.container}`).append(this._element);
  }

  /**
   * Complete the resolution
   */
  complete() {
    this._element.addClass("done");
  }

  /**
   * Set the progress bar
   * @param {Number} value Value to set
   * @throws {Error} Throws error if no progress bar is found
   */
  setProgress(value = 0) {
    if (this._opts.progressBar) {
      const progress = Math.round(100 * value / this._opts.progressGoal);

      this._element
        .find(".progress-bar")
        .css("width", `${progress}%`)
        .text(`${value} ${this._opts.unit}`);
    } else {
      throw new Error("No progress bar in this resolution.");
    }
  }
}
