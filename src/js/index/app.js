import ResolutionList from "../components/resolutionList/resolutionList.js";
window.ResolutionList = ResolutionList;

/**
 * Main application code for one view
 */
export default class App {
  /**
   * Construct the view from components
   */
  constructor() {
    this.resolutions = new ResolutionList({
      container : "body",
      resolutions : [
        {
          "goal" : "Go Skiing 25 Days",
          "progressBar" : true,
          "progressGoal" : 25,
          "unit" : "days",
          "progress" : 10,
          "done" : false
        },{
          "goal" : "Hammock Camp in a Snow Storm",
          "done" : true
        }
      ]
    });
  }
}
