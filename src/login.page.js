class Login {
  get user() {
    return $('//*[@id="j_id0:j_id4:j_id5"]/div/div/div/div[2]/div/input');
  }

  get password() {
    return $('//*[@id="j_id0:j_id4:password"]');
  }

  get button() {
    return $('//*[@id="j_id0:j_id4:save"]');
  }

  submit(user, password) {
    if (user) {
      this.user.setValue(user);
    }

    if (password) {
      this.password.setValue(password);
    }

    this.button.click();
  }
}

module.exports = new Login();
