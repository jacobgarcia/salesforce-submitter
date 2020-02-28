class TimeSheet {
  get form() {
    return $('//*[@id="j_id0:frm:timelogBlock:j_id51:j_id53"]');
  }

  get confirmButton() {
    return $('//*[@id="dvconfirm"]/button[1]');
  }

  get okButton() {
    return $('//*[@id="j_id0:frm:j_id64"]/input');
  }

  get success() {
    return $(
      '//*[@id="j_id0:frm:timelogBlock"]/div[1]/div/table/tbody/tr[2]/td[1]/span/img'
    );
  }

  submit() {
    this.form.click();
  }

  confirm() {
    this.confirmButton.click();
  }

  ok() {
    this.okButton.click();
  }
}

module.exports = new TimeSheet();
