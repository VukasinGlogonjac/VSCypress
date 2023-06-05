import { MONTHS } from "../fixtures/constants";

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = Object.values(MONTHS)[date.getMonth()];

class DatePicker {
  get taskBodyTabs() {
    return cy
      .get('div[class="vs-c-modal__body-right el-col el-col-10"]')
      .find(".el-tabs");
  }

  get taskWorklog() {
    return this.taskBodyTabs.find(".el-tabs__item").eq(1);
  }

  get manageWorklog() {
    return cy.get('button[title="Manage Worklog"]');
  }

  get manageDateIcon() {
    return cy.get('i[class="el-input__icon el-icon-date"');
  }

  get datepicker() {
    return cy.get('div[class="el-picker-panel__content"]').find("tbody").eq(0);
  }

  get datepickerHeader() {
    return cy.get(".el-date-picker__header");
  }

  get dateInputField() {
    return cy.get('input[placeholder="Start date"]');
  }

  getYesterday = () => {
    let targetDate = new Date();
    targetDate.setDate(targetDate.getDate() - 1);
    let dd = targetDate.getDate()
    return dd;
  }

  getFutureDate = (daysFromNow) => {
    let targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + daysFromNow);

    let dd = targetDate.getDate();
    let mm = targetDate.getMonth();
    let yyyy = targetDate.getFullYear();

    if (dd < 10) {
      dd = `0${dd}`;
    }

    let dateString = `${dd} ${Object.values(MONTHS)[mm]} ${yyyy}`;

    return dateString;
  };

  omitZeroInFutureDate = (daysFromNow) => {
    let date = this.getFutureDate(daysFromNow);

    if (date[0] == 0) {
      return date.substring(1, 2);
    }
  };


  getDatePickerYear() {
    this.datepickerHeader
      .find("span")
      .first()
      .should(($span) => {
        expect($span.get(0).innerText.trim()).to.be.equal(
          currentYear.toString()
        );
      });
  }

  getDatePickerMonth() {
    this.datepickerHeader
      .find("span")
      .last()
      .should(($span) => {
        expect($span.get(0).innerText.trim()).to.be.equal(currentMonth);
      });
  }

  getDate(day, className, condition = "") {
    return this.datepicker
      .find("td")
      .contains(day)
      .should(`${condition}have.class`, className)
      .and(`${condition}have.css`, "background-color", "rgb(78, 174, 147)");
  }

  checkIfTodaysDateIsCorrect(className) {
    return this.datepicker
      .find("tr").children('.available')
      .contains(this.getYesterday())
      .next()
      .should("contain", "Today")
      .and("have.class", className)
      .and("have.css", "background-color", "rgb(78, 174, 147)");
  }

  getfuturesDateAssert() {
    return this.datepicker
      .find("tr").children('.current').
      should('contain', this.omitZeroInFutureDate(10))
          .and('have.css', "background-color", "rgb(78, 174, 147)");
  }

  datePickerSuccess() {
    let yesterday = this.getYesterday();
    cy.log(this.omitZeroInFutureDate(10))
    this.taskWorklog.click();
    this.manageWorklog.click();
    this.manageDateIcon.click();
    this.checkIfTodaysDateIsCorrect("available today current");
    this.getDate(yesterday, "available current", "not.").click()
    this.manageDateIcon.click();
    this.getDatePickerMonth();
    this.getDatePickerYear();
    this.dateInputField.clear().type(this.getFutureDate(10));
    this.manageDateIcon.click();
    this.manageDateIcon.click();
    this.getfuturesDateAssert();
  }
}
export const datePicker = new DatePicker();
