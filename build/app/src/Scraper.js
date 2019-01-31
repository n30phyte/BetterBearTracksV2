"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ldap = __importStar(require("ldapjs"));
const Database_1 = require("./Database");
class Scraper {
    constructor() {
        this.db = new Database_1.DatabaseHelper();
        this.ldapClient = ldap.createClient({ url: "ldap://directory.srv.ualberta.ca" });
        this.db.bootstrap();
    }
    Start() {
        this.ScrapeTerms();
        this.ScrapeCourses(1660);
    }
    ScrapeCourses(termID) {
        const opts = {
            filter: "objectClass=uOfACourse",
            scope: "one",
            sizeLimit: 0,
        };
        this.ldapClient.search("term=" + termID + ", ou=calendar, dc=ualberta, dc=ca", opts, (err, res) => {
            res.on("searchEntry", (entry) => {
                let sql = "INSERT INTO Course (asString, courseSubject, courseCatalog, courseTitle) VALUES ('" +
                    entry.object.asString + "', '" + entry.object.subject + "', " + entry.object.catalog + ", '" +
                    entry.object.courseTitle + "')";
                console.log(sql);
                this.db.insert(sql, "courses");
            });
            res.on("searchReference", (referral) => {
                // console.log("Referral", referral);
            });
            res.on("error", (err) => {
                // throw err;
                // console.log("Error is", err);
            });
            res.on("end", (result) => {
                // console.log("Result is", result);
            });
        });
    }
    ScrapeTerms() {
        const opts = {
            filter: "objectClass=uOfATerm",
            scope: "one",
            sizeLimit: 0,
        };
        this.ldapClient.search("ou=calendar, dc=ualberta, dc=ca", opts, (err, res) => {
            res.on("searchEntry", (entry) => {
                let sql = "INSERT INTO Term VALUES (" + entry.object.term + ", '" +
                    entry.object.termTitle + "', '" + entry.object.startDate + "', '" + entry.object.endDate + "')";
                this.db.insert(sql, "term");
                // console.log(JSON.stringify(entry.object));
            });
            res.on("searchReference", (referral) => {
                // console.log("Referral", referral);
            });
            res.on("error", (err) => {
                // throw err;
                // console.log("Error is", err);
            });
            res.on("end", (result) => {
                // console.log("Result is", result);
            });
        });
    }
    debug(param) {
        // this.db.printDatabase("Term");
        this.db.printDatabase(param);
    }
}
exports.Scraper = Scraper;
let scraper = new Scraper();
// scraper.Start();
scraper.debug("Course");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NyYXBlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImFwcC9zcmMvU2NyYXBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IseUNBQTRDO0FBRTVDLE1BQWEsT0FBTztJQUloQjtRQUNJLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSx5QkFBYyxFQUFFLENBQUE7UUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsR0FBRyxFQUFFLGtDQUFrQyxFQUFFLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTSxLQUFLO1FBQ1IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVNLGFBQWEsQ0FBQyxNQUFjO1FBQy9CLE1BQU0sSUFBSSxHQUFXO1lBQ2pCLE1BQU0sRUFBRSx3QkFBd0I7WUFDaEMsS0FBSyxFQUFFLEtBQUs7WUFDWixTQUFTLEVBQUUsQ0FBQztTQUNmLENBQUM7UUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxHQUFHLG1DQUFtQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUM5RixHQUFHLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUM1QixJQUFJLEdBQUcsR0FBVyxvRkFBb0Y7b0JBQ3RHLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLE1BQU0sR0FBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSztvQkFDM0YsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFX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