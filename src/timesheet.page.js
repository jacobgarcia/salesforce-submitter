class TimeSheet {
  get form() {
    return $('//*[@id="j_id0:frm:timelogBlock:j_id51:j_id53"]');
  }
  submit() {
    this.form.click();
  }
}

module.exports = new TimeSheet();
