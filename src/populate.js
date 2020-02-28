const createStrings = () => {
  const base =
    '//*[@id="j_id0:frm:timelogBlock:j_id31:0:j_id36:0:j_id39"]/input';
  const regex = "6:0";
  const blocks = [];
  for (let i = 0; i < 5; i++) {
    blocks.push(base.replace(regex, `6:${i}`));
  }
  return blocks;
};

const populateTimesheet = () => {
  try {
    const inputs = createStrings();
    inputs.map(input => {
      $(input).setValue(8);
    });
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = populateTimesheet;
